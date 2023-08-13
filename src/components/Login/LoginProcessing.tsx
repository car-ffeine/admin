import { useMemberToken } from '@hook/login/useMemberToken';

import Loading from './Loading';

function LoginProcessing() {
  const { loginError } = useMemberToken();

  if (loginError !== null) {
    return <></>;
  }

  return <Loading />;
}

export default LoginProcessing;
