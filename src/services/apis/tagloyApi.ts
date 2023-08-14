import { Request } from 'models';
import url from 'services/urls';

const tagloyApi = ({ get, post, put }: Request) => {
  const getTagloyData = (params?: any) => {
    return get({ url: url.common.commonUrl.tagloy, params });
  };
  return {
    getTagloyData,
  };
};

export default tagloyApi;
