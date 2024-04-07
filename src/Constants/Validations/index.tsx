// Validations for mobile number
export const mobileNumberValidation = (mob: any) => {
  const pattern = /^+(?:[0-9] ?){6,14}[0-9]$/;
  return pattern.test(String(mob));
};

// Validations for passwords
export const isPasswordValid = (password: any) => {
  const pass_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$#!%*?&]{8,}$/;
  return pass_regex.test(String(password));
};

// No whiteSpace start/end
export const whiteSpaceValid = (name: any) => {
  const spac_reg = /^[^\s].*/;
  return spac_reg.test(String(name));
};
