import React from 'react';

// but I'd like to present it as best as possible.
// ToDo: Better presentation for more types of data

const stringify = data => {
  const omitTypename = (key, value) => key === '__typename' ? undefined : value;

  const dataWitoutTypename = JSON.parse(JSON.stringify(data), omitTypename);
  return JSON.stringify(dataWitoutTypename, null, 2);
};

var PrettyData = (({
  data
}) => {
  if (!data) return null;
  let prettyData = '';
  if (typeof data === 'string') prettyData = data;else if (typeof data === 'number') prettyData = data;else if (typeof data === 'object') {
    prettyData = /*#__PURE__*/React.createElement("pre", null, stringify(data));
  } else {
    prettyData = /*#__PURE__*/React.createElement("pre", null, stringify(data));
  }
  return prettyData;
});

export { PrettyData as P };
