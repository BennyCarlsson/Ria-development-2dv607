# Entry 05

Finally i'm probably finishes! I just need the mercy and acceptance of Krawaller and this will be my last entry post.

# What did I do since last entry post?
I know writing entry posts is not my strongest side and the last one was December 18 2015 but thanks for my awesome commits updates I an follow my own work.

So what have I done? not much visible functionalities and the design remains the same. But I got the mission from Krawaller do clean up my code so that is what I did. The big refactoring I did was to move the chat to redux so that I do not talk to my firebase database within my components but instead from actions. I also made it possible for me logged in as Benny can delete everyones messages and everyone else can remove their own message. I also only show users on the list that have setup their mobile to tell my database if they are in school or not. Other people still get registered when they login but they don't show up on the list to keep it clean. They can still write messages tough. After reading up on Firebase and writing a deep dive blog post about it Krawallers hawk eyes saw that I call my database from the userlist components and of course this hade to be fixed. Said and done.

Also 3 smaller pull requests where made on my classmates so that I seem like a nice contributing person.

Thank you Mikael for the pull requests making it possible to se the time when people reached or left school on mobile and touch devices.
