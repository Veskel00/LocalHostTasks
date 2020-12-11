export function filterWith(arr, filter) {
  const result = [];
  if (filter.length <= 2) {
    return [];
  } else {
    arr.filter((objectsInArray) => {
      const { _id, age, eyeColor, name, gender, company, email, phone, tags, friends } = objectsInArray;
      for (const valueOfObjects in objectsInArray) {
        if (objectsInArray[valueOfObjects] === filter) {
          result.push(_id, age, eyeColor, name, gender, company, email, phone, tags, friends);
        }
      }
      objectsInArray.friends.filter((friendObject) => {
        for (const elementOfFriendObject in friendObject) {
          if (friendObject[elementOfFriendObject] === filter) {
            result.push(_id, age, eyeColor, name, gender, company, email, phone, tags, friends);
          }
        }
      });
      objectsInArray.tags.filter((itemInTags) => {
        if (itemInTags === filter) {
          result.push(_id, age, eyeColor, name, gender, company, email, phone, tags, friends);
        }
      });
    });
  }
  return result;
}
