function makeFriendsList(friends) {
  let friendsUl = document.createElement('ul');
  let listItems = "";

  friends.forEach(function(friend) {
    listItems += `<li>${friend.firstName} ${friend.lastName}</li>`;
  });
  
  friendsUl.innerHTML = listItems;

  return friendsUl;
}
