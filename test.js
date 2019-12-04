var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"intro"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"intro":[["^This Dimilix text-only VN is a writing and programming experiment by @slip_fe3h, whose main goal is to get used to Ink syntax.","\n","^Some more details about this exercise:","\n","^~ Rated G","\n","^~ <5 min of play time","\n","^~ 2 possible (legitimate) endings (+2 randomized joke endings)","\n","^~ Fluff without plot (FWP??)","\n","^~ Written in second person, a cursed style I rarely use","\n","^As such, this story should not be taken as an accurate reflection of the programmer's writing abilities and/or as a bastion of accurate Dimitri and Felix characterizations.","\n","^Lastly, no cats were harmed in the creation of this VN.","\n","ev","str","^Okay, ready? Let's begin!","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"beginning"},"\n",{"#f":5}]}],{"#f":1}],"beginning":[["ev",0,"/ev",{"VAR=":"wake_felix","re":true},"^Turn #","ev",{"CNT?":".^.^"},"out","/ev","\n","^You, Dimitri Alexandre Blaiddyd, wake up feeling rather lonely today.","\n","^Seeking comfort, you come across two possible choices on your bed. Which do you pick?","\n","ev","str","^The cute, black cat with the soft paw pads.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^The grumpy-looking cat that could shove a sword up your ass if he wanted to.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"cat_cuddle"},"\n",{"#f":5}],"c-1":["^ ",{"->":"grumpy_cat"},"\n",{"#f":5}]}],{"#f":1}],"cat_cuddle":["^You pick up the cat, and bring your cheek to its face. ",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.^.scratch"},{"->":".^.^.17"},null],"s1":["pop","^ ",{"->":".^.^.^.purr"},{"->":".^.^.17"},null],"#f":5}],"\n",{"scratch":["^Your attempt to cuddle is rewarded with a scratch to the face. But that's okay. You're a masochist and you love both of your Felixes.","\n",{"->":".^.^.continue"},{"#f":1}],"purr":["^Your attempt to cuddle is rewarded with a purr. Aww, how sweet.","\n",{"->":".^.^.continue"},{"#f":1}],"continue":["ev",{"CNT?":".^.^"},5,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Goddess, how many times did you pick this path? May Sothis save your soul. ",{"->":".^.^.^.6"},null]}],"nop","ev",{"CNT?":".^.^"},5,">",{"CNT?":".^.^"},10,"<","&&","/ev",[{"->":".^.b","c":true},{"b":["^ Wow you're still at it?? Whyyyyy ",{"->":".^.^.^.17"},null]}],"nop","ev",{"CNT?":".^.^"},10,">=","/ev",[{"->":".^.b","c":true},{"b":["^ You need Sothis and the Four Saints at this point. Just. Why. ",{"->":".^.^.^.24"},null]}],"nop","\n",{"->":"again"},{"#f":1}],"#f":1}],"grumpy_cat":["^You edge closer to Felix, your lover. ",{"->":".^.choice"},"\n",{"choice":[["^What do you do next?","\n","ev","str","^Bury your nose into his hair.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Subtly drape an arm over him.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","ev",{"VAR?":"wake_felix"},1,"+",{"VAR=":"wake_felix","re":true},"/ev","^Felix wrinkles his nose when you bury your nose into his hair, but doesn't do anything besides that. It reminds you a little of how a cat might react, and fills you with a surge of affection.","\n","^What will you do now?","\n",["ev","str","^Subtly drape an arm over him.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Inhale his scent.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"arm_drape"},{"#f":5}],"c-1":["\n","^You take the time to inhale Felix's scent. He smells of the mint shampoo he favors, a wintery feel you appreciate. It's calming, like coming home.","\n",{"->":"hug"},{"#f":5}]}],{"#f":5}],"c-1":["^ ","\n",{"->":"arm_drape"},{"#f":5}]}],{"#f":1}],"#f":1}],"arm_drape":[["^You drape your arm over him. Felix stirs slightly, but does not make a move to get up. He, in fact, has taken hold of your other hand as a result. Just like the way he would when you were children.","\n","^What will you do now?","\n","ev","str","^Smile and stay still.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Pull him flush against your chest.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^You smile and stay still. Felix continues to slumber, seemingly unmindful of your presence. Outside of war, he's always been the type to sleep deeply, isn't he?","\n",{"->":"hug"},{"#f":5}],"c-1":["^ ","\n","ev",{"VAR?":"wake_felix"},1,"+",{"VAR=":"wake_felix","re":true},"/ev","^You pull him flush against your chest.","\n","ev",{"VAR?":"wake_felix"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"wake_mad"},{"->":".^.^.^.16"},null]}],"nop","\n","^Felix grunts when you do, but he presses against you anyway, rubbing his head against your chest and making you wonder for a moment if this is indeed Felix the human and not Felix the cat.","\n",{"->":"hug"},{"#f":5}]}],{"#f":1}],"hug":[["^Will you do anything else?","\n","ev","str","^Nothing, just stare dopily at Felix.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Kiss the top of his head.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Say \"I love you.\"","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^As usual, you're happy just watching him, and settle for staring dopily at him.","\n",{"->":"push_luck"},{"#f":5}],"c-1":["\n","^You kiss the top of his head.","\n","ev",{"VAR?":"wake_felix"},1,"+",{"VAR=":"wake_felix","re":true},"/ev","ev",{"VAR?":"wake_felix"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"wake_mad"},{"->":".^.^.^.15"},null]}],"nop","\n","^Felix shivers, sighing softly. You can't help but sigh as well, happily so, given this would be such an unthinkable reality not too long ago.","\n",{"->":"push_luck"},{"#f":5}],"c-2":["\n","^\"I love you,\" you whisper into Felix's hair, and you find Felix's shoulders drawing tight around your arm.","\n",{"->":"wake_mad"},{"#f":5}]}],{"#f":1}],"push_luck":[["^But hmm... maybe you can push your luck a bit more?","\n",["ev",{"^->":"push_luck.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No, this is fine.",{"->":"$r","var":true},null]}],"ev","str","^Maybe a forehead kiss...?","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"push_luck.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Satisfied with the way things are, you simply let things be and close your eye for a moment.","\n",{"->":"wake_tsundere"},{"#f":5}],"c-1":["\n","^You decide to press a kiss to Felix's forehead.","\n","ev",{"VAR?":"wake_felix"},1,"+",{"VAR=":"wake_felix","re":true},"/ev","ev",{"VAR?":"wake_felix"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"wake_mad"},{"->":".^.^.^.15"},null]}],"nop","\n","^His shut eyes squeeze tightly, as if the gesture is pulling him out of his slumber. You feel slightly guilty about it, but not enough to pull away.","\n",{"->":"wake_tsundere"},{"#f":5}]}],{"#f":1}],"wake_mad":["^Felix's eyes fly open, wide before they narrow at you, none too happy at being roused in this manner.","\n","^Your stomach twists in nervous knots. Because when Felix glares at you like this, it's hard to tell if he's actually angry at you, or if he's just in one of his moods, so to speak.","\n","^But one sigh later, he hangs his head and curls next to you once more, murmuring something under his breath as he closes his eyes. It sounds a lot like \"dumb boar\", but you don't mind too much. The knots in your stomach unfurl when he doesn't let go of your hand and even bothers to give it a light squeeze.","\n","^After all, such is the Felix way of love.","\n","^END","\n",{"->":"again"},{"#f":1}],"wake_tsundere":["^A moment later, Felix stirs, lashes fluttering open as a tiny smile graces his features.","\n","^But the moment you greet him a \"good morning\", the corners of his mouth tug downwards as his brows furrow at you. Red creeps to his cheeks as your gazes meet, not an unusual sight. As is the way he hangs his head and casts his eyes downwards.","\n","^However, the manner in which he inches towards you is foreign, though not unwelcome. As with the way he weaves his fingers with yours, then proceeds to press his forehead against your chest.","\n","^You smile as Felix closes his eyes, his lips tugging upwards as his breathing starts to slow. As you watch the rise and fall of his chest, you feel your eye begin to droop too.","\n","^With a yawn, you surrender yourself to the call of sleep. Fódlan can wait for now, especially when all is well.","\n","^HAPPY (?) END","\n",{"->":"again"},{"#f":1}],"again":[["^Do you want to try again?","\n","ev","str","^Yes (You have infinite divine pulses anyway)","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^No (See results and end the game)","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"beginning"},"\n",{"#f":5}],"c-1":["^ ",{"->":"results"},"\n",{"#f":5}]}],{"#f":1}],"results":[["^You have done the following:","\n","^- Cuddled the cat: ","ev",{"CNT?":"cat_cuddle"},"out","/ev","^ times","\n","ev",{"CNT?":"cat_cuddle"},"/ev",[{"->":".^.b","c":true},{"b":["^ -- Got scratched: ","ev",{"CNT?":"cat_cuddle.scratch"},"out","/ev","^ times",{"->":".^.^.^.13"},null]}],"nop","\n","ev",{"CNT?":"cat_cuddle"},"/ev",[{"->":".^.b","c":true},{"b":["^ -- Got purrs: ","ev",{"CNT?":"cat_cuddle.purr"},"out","/ev","^ times ",{"->":".^.^.^.19"},null]}],"nop","\n","^- Cuddled Felix: ","ev",{"CNT?":"grumpy_cat"},"out","/ev","^ times","\n","ev",{"CNT?":"grumpy_cat"},"/ev",[{"->":".^.b","c":true},{"b":["^ -- Felix woke up grumpy: ","ev",{"CNT?":"wake_mad"},"out","/ev","^ times",{"->":".^.^.^.32"},null]}],"nop","\n","ev",{"CNT?":"grumpy_cat"},"/ev",[{"->":".^.b","c":true},{"b":["^ -- Felix woke up tsundere: ","ev",{"CNT?":"wake_tsundere"},"out","/ev","^ times",{"->":".^.^.^.38"},null]}],"nop","\n","^Total number of turns: ","ev",{"CNT?":"beginning"},"out","/ev","\n","ev","str","^Next","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"credits"},"\n",{"#f":5}]}],{"#f":1}],"credits":[["^Thank you for playing! If you have any comments, suggestions, insults, etc feel free to hit me up on Twitter!","\n",["^Slip (@slip_fe3h)","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"global decl":["ev",0,{"VAR=":"wake_felix"},"/ev","end",null],"#f":1}],"listDefs":{}};