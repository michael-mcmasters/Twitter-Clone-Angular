import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { PersonService } from "src/app/services/person.service";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];

  constructor(personService: PersonService) {
    
    let res = personService.fetchRandomPerson(4);
    res.subscribe(val => {
      val.results.forEach((r, index) => {
        console.log(r.name.first);
        console.log(r.name.last);
        this.tweets[index].name = r.name.first;
        this.tweets[index].profileImage = r.picture;
      })});
    
    
    //personService.fetchRandomQuote();
    
    this.tweets = [
      {
        name: 'Bill Gates',
        userName: 'BillGates',
        postAge: 2,
        profileImage: './assets/images/billgates.jpg',
        message:
          "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
      },
      {
        name: 'Steve Jobs',
        userName: 'SteveJobsCEO',
        postAge: 3,
        profileImage: './assets/images/stevejobs2.jpg',
        message:
          'You have to be burning with an idea, or a problem, or a wrong that you want to right. If you’re not passionate enough from the start, you’ll never stick it out.',
      },
      {
        name: 'James Gosling',
        userName: 'errcraft',
        postAge: 6,
        profileImage: './assets/images/jamesgosling.jpg',
        message:
          "In the Java world, security is not viewed as an add-on a feature. It is a pervasive way of thinking. Those who forget to think in a secure mindset end up in trouble. But just because the facilities are there doesn't mean that security is assured automatically. A set of standard practices has evolved over the years. The Secure Coding Standard for Java is a compendium of these practices. These are not theoretical research papers or product marketing blurbs. This is all serious, mission-critical, battle-tested, enterprise-scale stuff.",
      },
      {
        name: 'Uncle Bob',
        userName: 'unclebobmartin',
        postAge: 6,
        profileImage: './assets/images/unclebob.png',
        message:
          "If you're good at the debugger it means you spent a lot of time debugging. I don't want you to be good at the debugger.",
      },

      {
        name: 'Tim Cook',
        userName: 'tim_cook',
        postAge: 6,
        profileImage: './assets/images/timcook.jpg',
        message:
          'History rarely yields to one person, but think and never forget what happens when it does. That can be you. That should be you. That must be you.',
      },
      {
        name: 'Jeff Bezos',
        userName: 'JeffBezos',
        postAge: 6,
        profileImage: './assets/images/jeffbezos.jpg',
        message:
          "If you can't tolerate critics, don't do anything new or interesting.",
      },
      {
        name: 'Elon Musk',
        userName: 'elonmusk',
        postAge: 6,
        profileImage: './assets/images/elonmusk.jpg',
        message:
          "There have to be reasons that you get up in the morning and you want to live. Why do you want to live? What's the point? What inspires you? What do you love about the future? If the future does not include being out there among the stars and being a multi-planet species, I find that incredibly depressing.",
      },
      {
        name: 'Satya Nadella',
        userName: 'satyanadella',
        postAge: 6,
        profileImage: './assets/images/satyanadella.jpg',
        message:
          'I truly believe that each of us must find meaning in our work. The best work happens when you know that it’s not just work, but something that will improve other people’s lives.',
      },
      {
        name: 'Palmer Luckey',
        userName: 'PalmerLuckey',
        postAge: 6,
        profileImage: './assets/images/palmerluckey.png',
        message:
          'Today, the best way to communicate with someone is still face-to-face. Virtual reality has the potential to change that, to make it where VR communication is as good or better than face-to-face communications, because not only do you get all the same human cues as real-world communication, you basically suspend the laws of physics, you can do whatever you want, you can be wherever you want.',
      },
      {
        name: 'Andy Jassy',
        userName: 'ajassy',
        postAge: 6,
        profileImage: './assets/images/andyjassy.jpeg',
        message:
          "If you want more protection, which I think is totally reasonable, the federal government should regulate it, i wish they'd hurry up -- if they don't, you're going to have 50 different laws in 50 different states",
      },
      {
        name: 'Linus Torvalds',
        userName: 'Linus__Torvalds',
        postAge: 6,
        profileImage: './assets/images/linustorvalds.jpeg',
        message:
          'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
      },
    ];
  }

  ngOnInit(): void {}
}
