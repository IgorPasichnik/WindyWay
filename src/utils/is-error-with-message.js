export const isErrorWithMessage = (error) => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof error.data === "object"
  );
};
