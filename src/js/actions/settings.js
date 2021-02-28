export const updateSetting = (setting, value) => {
  return {
    type: "SETTINGS_UPDATE",
    setting,
    value,
  };
};

export const loadInitialSettings = () => ({
  type: "SETTINGS_INITIAL_LOAD",
});
