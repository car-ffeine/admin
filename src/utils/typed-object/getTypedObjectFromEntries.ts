export const getTypedObjectFromEntries = <T extends string | symbol, K>(
  entries: readonly [T, K][]
): { [Key in T]: K } =>
  entries.reduce(
    (result, [key, value]) => {
      result[key] = value;

      return result;
    },
    {} as { [Key in T]: K }
  );
