import supabase from '../../../services/supabase';

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  const hostId = await checkIsUserHost(user.id);

  if (hostId) return { ...user, isHost: true, hostId };

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

  const hostId = await checkIsUserHost(user.id);

  if (hostId) return { ...user, isHost: true, hostId };

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

  if (error) throw new Error(error.message);

  return user;
}

async function checkIsUserHost(id) {
  const { data, error } = await supabase
    .from('host')
    .select('id')
    .eq('user_id', id);

  if (error) throw new Error(error.message);

  if (data.length > 0) return data[0].id;

  return null;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function createHost(host) {
  const { mobileNumber, country, address, overview } = host;
  const { data, error } = await supabase
    .from('host')
    .insert({
      mobile_number: mobileNumber,
      country,
      address,
      overview,
    })
    .select('id');
  if (error) throw new Error(error.message);

  return data[0].id;
}
