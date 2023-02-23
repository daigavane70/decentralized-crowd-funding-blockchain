import moment from "moment";

export const USER_TYPE_INVESTOR = "INVESTOR";
export const USER_TYPE_VENDOR = "VENDOR";
export const USER_TYPE_IDEAPERSON = "IDEAPERSON";

export const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

export const formatDate = (date) => {
  return moment(date).format("hh:mm, Do MMM");
};
