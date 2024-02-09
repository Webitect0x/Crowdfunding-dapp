export const currentState = (state) => {
  switch (state) {
    case 0:
      return "Fundraising";
    case 1:
      return "Expired";
    case 2:
      return "Successful";
  }
};
