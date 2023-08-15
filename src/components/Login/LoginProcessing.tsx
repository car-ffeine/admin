import { useMemberToken } from '@hook/login/useMemberToken';

import Loading from '@common/Loading';

function LoginProcessing() {
  const { loginError } = useMemberToken();

  if (loginError !== null) {
    return <></>;
  }

  return <Loading />;
}

export default LoginProcessing;
