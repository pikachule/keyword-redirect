const getGroupName = (groups, groupId) => {
  const group = groups.find(obj => obj.id === groupId);
  return group ? group.name : "Default";
};

export const appendPrefixToKeyword = (groups, groupId, keyword) => {
  const group = groups.find(obj => obj.id === groupId);
  if (group && group.prefix) {
    return `${group.prefix}${keyword}`;
  }
  return keyword;
};

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export const isValidURL = string => {
  var res = string.match(
    /(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res == null) return false;
  else return true;
};
