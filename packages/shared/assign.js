/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export const assignProperty = (obj, key, value) => {
  const descriptor = {
    __proto__: null,
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  };
  Object.defineProperty(obj, key, descriptor);
  return obj;
};

const assign = (target, ...sources) => {
  sources.forEach(source => {
    for (const key in source) {
      if (Object.hasOwn(source, key)) {
        assignProperty(target, key, source[key]);
      }
    }
  });

  return target;
};

export default assign;
