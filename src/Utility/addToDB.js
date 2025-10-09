const getStoreApp = () => {
  const StoredAppSTR = localStorage.getItem("InstallList");
  if (StoredAppSTR) {
    try {
      return JSON.parse(StoredAppSTR);
    } catch {
      return [];
    }
  }
  return [];
};

const addToStoreApp = (Id) => {
  const StoredAppData = getStoreApp();

  const exists = StoredAppData.some(x => String(x) === String(Id));
  if (exists) {
    return { status: "exists" };
  }

  const updated = [...StoredAppData, Id];
  localStorage.setItem("InstallList", JSON.stringify(updated));
  return { status: "added" };
};

export { addToStoreApp, getStoreApp };

export const removeFromStoreApp = (Id) => {
  const StoredAppData = getStoreApp();
  const updatedList = StoredAppData.filter(x => String(x) !== String(Id));
  localStorage.setItem("InstallList", JSON.stringify(updatedList));
};