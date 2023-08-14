const commonController = () => {
  const getCommonUrl = (url: string) => `${url}`;

  const commonUrl = {
    tagloy: getCommonUrl(``),
  };

  return {
    commonUrl,
  };
};

export default commonController;
