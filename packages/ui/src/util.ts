type ClassNames = string | ClassNames[];

function isClassNames(rule: unknown): rule is ClassNames {
  if (typeof rule === "string") {
    return true;
  }

  if (Array.isArray(rule) && rule.every(isClassNames)) {
    return true;
  }

  return false;
}

function ensureArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}

type ObjectIterator<TObject, TResult> = (
  value: TObject[keyof TObject],
  key: string,
  collection: TObject
) => TResult;

function mapValues<T extends object, TResult>(
  obj: T | null | undefined,
  callback: ObjectIterator<T, TResult>
): { [P in keyof T]: TResult } {
  const mappedObj = {} as Record<keyof T, TResult>;

  for (const key in obj) {
    mappedObj[key] = callback(obj[key], key, obj);
  }

  return mappedObj;
}

export { ensureArray, isClassNames, mapValues };
