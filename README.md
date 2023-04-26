User Card Implementation The goal of this project is to implement user cards
according to a given design. The user cards have a Follow button that changes
text and color when clicked. The follower count increases by one, including your
own, so the initial count is 100,500 and clicking the button once will make it
100,501.

On page refresh, the final user actions should be saved, so the Follow button
remains in the Following state with the corresponding color, and the follower
count does not reset to the initial value.

Clicking the button again reverts the text and color to the initial state and
reduces the follower count by 1 (to 100,500).

Backend Implementation The backend is created using Mockapi.io, which provides a
UI service to create resources. In this case, the users resource is defined with
the fields: id, user, tweets, followers, and avatar.

The avatars should have their own URLs and there should be at least 12 users
with different values in the database. Pagination should be implemented to
display 3 tweets per page and load more on demand.

FIGMA:
${https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1}
