import supabase from './supabase';

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  const isHost = await checkIsUserHost(user.id);

  if (isHost) return { ...user, isHost: true };

  return user;
}

export async function login({ email, password }) {
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const isHost = await checkIsUserHost(user.id);

  if (isHost) return { ...user, isHost: true };

  return user;
}

export async function signup({ email, password, firstName, lastName }) {
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });
}

async function checkIsUserHost(id) {
  const { data, error } = await supabase
    .from('host')
    .select('id')
    .eq('user_id', id);

  if (error) throw new Error(error.message);

  if (data.length > 0) return true;

  return false;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
