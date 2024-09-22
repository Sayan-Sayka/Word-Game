alert("You are 25 years old unemployer who looks for new jobs but employers do not want to hire due to your rude behavior. Now you are not able to pay the cost of renting apartment.")
alert("One day, you find an advertisement when watching tv, saying 'Looking for people to work as a nightguard, with the salary of 50000$ per month'.")
var s1=+prompt("Choose number -> Will you: 1. Go to work as a nightguard  2. Seek for another job")
if(s1==2){
    alert("You continue to search for the opportunity to work, and eventually you die of hunger because of not being able to pay the basic needs.")
}else if(s1!=1 && s1!=2){
    alert("Invalid value");
}else{
    alert("You go to the destination and meet employer. During conversation, someone hits your head with a metal bat and you lose your consciousness.")
    alert("When you wake up, you realize that you are tied up your body with rope, being left inside a small room with the dead body of someone.")
    alert("Conversation between the employer and another man is heard from the door, and you understand that you were kidnapped to take your organs out of your body. You find broken glasses near your hand.")
    var s2=+prompt("Choose number -> Will you: 1. Tear rope with the glass  2. Wait for kidnappers to go away");
    if(s2!=1 && s2!=2){
        alert("Invalid value");
    }else if(s2==1){
        alert("You manage to escape from the room by going through a vent. After entering into another room, you find a key written 'garage', by which you relax little because there might be a car used to escape.")
        alert("Suddenly, the men start shouting and noise come up from another room, likely the room you were being locked in. You can go either right, left or hide in the room.")
        var s3=+prompt("Choose number -> Will you: 1. Go right  2. Go left  3. Hide in room")
        if(s3!=1 && s3!=2 && s3!=3){
            alert("Invalid value");
        }else if(s3==1){
            alert("Unfortunately, you encouter the kidnappers and because you don't have enough strength to fight with him, you get knocked out and will never wake up again.")
        }else if(s3==2){
            alert("The kidnappers notice and begin to follow you. After running for a while, you reach the storage room and enter into there.")
            alert("As you expected earlier, there is a red car to use it to escape, but you need to open the garage door first.")
            var s4=+prompt("Choose number -> Will you: 1. Open the door now  2. Hide under car")
            if(s4==1){
                alert("The kidnappers catch you up before the door is open so you miss the chance to escape.")
                alert("You are dead.")
            }else if(s4==2){
                alert("The kidnappers can't find you so they go away to another room to find you. You gradually open the garage door.")
                alert("Because there is no noise when opening the door, you manage to escape from the kidnappers by driving the car and going back to your home.")
                alert("Congratulation, You survived!")
            }else{
                alert("Invalid value");
            }
        }else if(s3==3){
            alert("The kidnappers don't notice you and go away. Because they go to the left way, you are forced to go to right side.")
            alert("You find office room and get the entrance key with one stungun. You search for the entrance and find it.")
            alert("However, the kidnappers somehow go back and find you, and they are running toward you.")
            var s5=+prompt("Choose number -> Will you: 1. Focus on opening door  2. stun person on left side  3. Stun person on right side")
            if(s5==1){
                alert("They catch you before opening door. Before you use stungun, they knock you down with fist.")
                alert("you are dead.")
            }else if(s5==2){
                alert("You manage to stun the guy on the left side. Sadly, the person on the right side has a gun and shoot you with it.")
                alert("You are dead.")
            }else if(s5==3){
                alert("You manage to stun the guy on the right side. Fortunately, the other guy does not have any weapon, hence you threaten with the gun you stole from the stunned guy to wait until the door is opened.")
                alert("You manage to escape and survive!")
            }else{
                alert("Invalid value")
            }
        }
    }else{
        alert("After staying for a few moments, the kidnappers come into the room with evil smiling and take you to the room which look like the surgery room.")
        alert("One of them forcibly starts to cut off your body in half to take your organs away. You experience the hell time with full of pain.")
        alert("You are dead.")
    }
}