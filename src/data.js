const DONE = -10;

export default {
      1: {
      question: "Switch from hand production to machines?",
      Yes: {
          resources:0,
          money:+2,
          pollution: +1,
          happiness: -1,
          message: "In 1800s, the industries were introduced and productions ramped up due to technological advancements, but pollution increased, the many workers lost their jobs since machines replace them.",
          next: 2
      },
      No: {
          resources:0,
          money:-1,
          pollution: -1,
          happiness: +1,
          message: "Since no technological advancements and thus things remain same, hence the profit was reduced due to increase in labor charges.",
          next: 7
      },
  },

  2: {
      question: "Start mining using explosives?",
      Yes: {
          resources: +2,
          money: +1,
          pollution: +1,
          happiness:-1, 	
          message: "In 1800s the explosive mining helped obtaining metal ores, but the dust and smoke increased causing pollution of air in large amounts and difficulty in breathing.",
          next: 3,
      },
      No: {
          resources: -1,
          money: -2,
          pollution: -1,
          happiness:0,	
          message: "Mining becomes difficult without explosives because ores get deeper and harder to mine, but the environment remains safe.",
          next: 4
      },
  },
      
  3: {
      question: "A new method to manufacture steel is invented, use it?",
      Yes: {
          resources:+1,
          money:+5,
          pollution: +3,
          happiness: +2,  
          message: "Steel revolutionizes the world in production. Several machines and daily use items are made using steel. Reinforced steel helps in various activities, but it causes major pollution due to the poisonous gases.",
          next:5
      },
      No: {
          resources:-1,
          money:-2,
          pollution: -2,
          happiness: +1,
          message: "Declining the opportunity causes a drop in profits and technological advancements, but it keeps the environment safe.",
          next:6
      },
  },



  4: {
      question: "Cut down forests to meet up demands of wood for tools and machinery?",
      Yes: {
          resources:+2, 
          money:+2, 
          pollution:+3, 
          happiness: -2,
          message: "Cutting down forests gives tons of wood supply but causes soil erosion, more generation of co2 due to less trees.",
          next:10
      },
      No: {
          resources:0,
          money:-2,
          pollution:0 ,
          happiness:-1,
          message: "Lack of resources causes major decline in supply of wood along with production and wealth but the environment remains safe and healthy due to trees.",
          next:7
      },
  },



  5: {
      question: "Create the railway network?",
      Yes: {
          resources:-1,
          money:+4,
          pollution:+3,
          happiness:+4,
          message: "Railway networks revolutionizes transport but causes massive pollution due to usage of coal in steam engines.",
          next:8
      },
      No: {
          resources:0,
          money:-2,
          pollution:0 ,
          happiness:-1,
          message: "No railways takes a hit on transport and causes drop in exchange of resources and transport but keeps pollution in control.",
          next:8
      },
  },



  6:{
    question:"Metal resources have been depleted! Find new alternatives?",
    Yes: {
          resources:0,
          money:0,
          pollution:0,
          happiness:0,
          message: "Finding new alternatives...",
          next:4
      },
      No: {
          resources:-100,
          money:0,
          pollution:0 ,
          happiness:0,
          message: "The world ran out of resources, think wisely about using your resources, they matter a lot and that's what keeps you alive! GAME OVER",
          next:-1
      },
  },




  7:{
    question:"Due to increasing labour costs and less production, profits are going down and factories are closing, do you want to switch to machines?",
    Yes: {
          resources:0,
          money:+2, 
          happiness: -1, 
          pollution: +1,
          message: "Production ramps up due to tech advancements, but pollution increases, a few people lose jobs since machines replace them.",
          next:2
      },
      No: {
          resources:-100,
          money:-100,
          pollution:0 ,
          happiness:0,
          message: "Factories were closed down and the world economy started collapsing due to unstability betweent the working class and factory owners! GAME OVER",
          next:-1
      },
  },


  8:{
    question:"Coal resources are depleting but Petroleum is discovered, Use it?",
    Yes: {
          resources:+3,
          money: +3, 
          pollution:-1, 
          happiness:+2,
          message: "Petroleum in spite of being efficient fuel and cleaner than coal, when used in excess does create pollution, however, relative to initial coal usage, the pollution is less if calculated stoichiometrically",
          next:12
      },
      No: {
          resources:-1, 
          money: -2, 
          pollution:+1,  
          happiness:0,
          message: "Coal resources ran out and world didn't opt for finding better fuels , leaving it in a polluted state! Use polluting resources wisely and try shifting to viable options and possible renewable resources! GAME OVER in the 1870s",
          next:-1
      },
  },



  9:{
    question:"Use petroleum based locomotives?",
    Yes: {
          resources:-1, 
          money: +3, 
          pollution:+3, 
          happiness:+2,
          message: "Locomotives allow fast and easy transport however, it increases the emissions of CO2 and CO. When the petroleum locomotives were introduced in 1850s, people started using them in a huge amount thus increasing pollution levels!",
          next:17
      },
      No: {
          resources:0,  
          money: -1, 
          pollution:-2, 
          happiness:-1, 
          message: "Not using petroleum based locomotives takes a toll on transport and causes losses but it helps keep the emissions of harmful greenhouse gases in control,caused by petroleum.",
          next:17
      },
  },



  10:{
    question:"Metal ores are required to develop more machinery? Explore ways to mine them?",
    Yes: {
          resources:0, 
          money: 0, 
          pollution:0, 
          happiness:0,
          message: "Searching for ways to mine...",
          next:2
      },
      No: {
          resources:-100,  
          money: -100, 
          pollution:0, 
          happiness:0,
          message: "No machinery made the world make no technological advancements and hence you couldn't progress more and were stuck in this time itself! GAME OVER",
          next:-1
      },
  },


  11:{},


  12:{
    question:"Bicycles are invented, Use them?",
    Yes: {
          resources:-1, 
          money:+1,
          pollution:-1, 
          happiness:+2,
          message: "Bicycles are a good way to go around since they help us exercise and also keeps pollution due to steam locomotives, low.",
          next:9
      },
      No: {
          resources:0,  
          money: 0, 
          pollution:0, 
          happiness:0, 
          message: "Bicycles were not used",
          next:9
      },
  },



  13:{
    question:"A war has broken out, increase arms production?",
    Yes: {
          resources:-3,
          money:-3, 
          pollution:+3, 
          happiness:-1, 
          message: "Arms production keeps the country safe but takes a major hit on the economy and pollution.",
          next:16
      },

      No: {
          resources:-100,  
          money: -100, 
          pollution:0, 
          happiness:0,
          message: "Foreign countries captured you, game over in the 1900s.",
          next:-1
      },
  },



  14:{},



  15:{},



  16:{
    question:"Test and develop nuclear weapons?",
    Yes: {
          resources:-3, 
          money:-3, 
          pollution:+5, 
          happiness:-7,	
          message: "Nuclear weapons act as a fearful detterent but their fallout and radiation greatly affects the atmosphere.",
          next:18
      },

      No: {
          resources:0,  
          money: 0, 
          pollution:0, 
          happiness:+2, 
          message: "Choosing to not develop nuclear weapons helps the world to maintain a healthy state.",
          next:18
      },
  },



  17:{
    question:"electricity is invented, create thermal powerplants to generate it?",
    Yes: {
          resources: -1, 
          money: +2, 
          pollution: +2, 
          happiness: +2,
          message: "electricity is another revolutionary idea after steel, but its generation causes pollution in large amounts.",
          next:13
      },

      No: {
          resources: +1, 
          money: -2, 
          pollution:0, 
          happiness:0, 			
          message:"Since electricity wasnt used, technological advancements cannot be made, Game over in the 1900s.",
          next:-1
      },
  },



  18:{
    question:"The war has ended and computers are invented, use them?",
    Yes: {
          resources: -1, 
          money: +5, 
          pollution:+2, 
          happiness:+4,	
          message:"Computers have made life easier but increase in e waste and heat emissions of electric devices causes the climate to get worse.",
          next:19
      },

      No: {
          resources: 0, 
          money: 0, 
          pollution:0, 
          happiness:0, 			
          message:"Since computers werent used, technological advancements cannot be made, Game over.",
          next:-1
      },
  },



  19:{
    question:"Increase settlements due to growth in population, clear land and forests?",
    Yes: {
          resources: -1, 
          money: +2, 
          pollution: +3, 
          happiness: +2,	
          message:"People get more land to occupy and thrive but it creates a rise in global warming.",
          next:20
      },

      No: {
          resources: 0,  
          money: -1, 
          pollution: -1,
          happiness: -2,				
          message:"People did not get enough accomodations which led to a civil war, GAME OVER",
          next:-1
      },
  },



  20:{
    question:"Due to increasing population, demand in goods is increasing, exploit resources to meet the demands?",
    Yes: {
          resources:-4, 
          money: +3, 
          pollution: +3, 
          happiness: +2,
          message:"People's needs are met but at the cost of the resources.",
          next:21
      },

      No: {
          resources:0,  
          money:-1,  
          pollution:-1, 
          happiness:-1,					
          message:"People are dissatisfied by the lack of supply but resources are used aptly.",
          next:21
      },
  },



  21:{
    question:"Increase farming activities using nitrogen fertilizers?",
    Yes: {
          resources: +2, 
          money: +2, 
          pollution: +3, 
          happiness: +2,
          message:"Use of fertilizers increases food production, however nitrogen based fertilizers create nitrous oxide contributing to an increase in global warming.",
          next:22
      },

      No: {
          resources: -1, 
          money: -1, 
          pollution: 0, 
          happiness: -1,		
          message:"Nature remains safe but at the cost of food shortages.",
          next:22
      },
  },



  22:{
    question:"Use solar energy to replace depleting fossil fuels?",
    Yes: {
          resources: +2, 
          money: -4, 
          pollution: -4, 
          happiness: +2,	
          message:"Solar energy being an expensive investment helps the environment and the resources greatly in the long run.",
          next:23
      },

      No: {
          resources: 0, 
          money:0, 
          pollution:+1, 
          happiness:0,
          message:"Continuing to use fossil fuels might deplete them.",
          next:24
      },
  },



  23:{
    question:"There is an excessive rise in computer demands, increase production?",
    Yes: {
          resources: -1, 
          money:+2, 
          pollution: +3, 
          happiness: +2,
          message:"Technological demands are met but disposing the e-waste creates lots of poisonous gases like Co2, PBB, PBDE.",
          next:25
      },

      No: {
          resources: +1, 
          money:-1, 
          pollution: 0,  
          happiness:-1,
          message:"People are dissatisfied due to lack of supply, but global warming is kept in control.",
          next:25
      },
  },



  24:{
    question:"Fossil fuels are depleted, huge rise in pollution is detected. Consider solar energy?",
    Yes: {
          resources: 0, 
          money: 0, 
          pollution: 0, 
          happiness: 0,	
          message:"Setting up solar panels...",
          next:22
      },

      No: {
          resources: 0, 
          money:0, 
          pollution:+1, 
          happiness:0,
          message:"Energy crisis breaks out a war, causing war among nations. Please save energy and finding viable sources of energy instead of putting the world into a state of chaos! GAME OVER",
          next:-1
      },
  },



  25:{
    question:"Replace petroleum based vehicles with electric vehicles?",
    Yes:{
          resources:+1, 
          money: -3, 
          pollution: -4, 
          happiness: -1,  
          message:"Even if using electric cars is a viable solution for the environment, it is an expensive one.",
          next:DONE
      },

      No: {
          resources:-2, 
          money:0, 
          pollution:+1, 
          happiness: 0,
          message:"Keeping up the usage of petroleum vehicles will be a cheap short term solution, but in the long run, fossil fuels will be depleted.",
          next:DONE
      },
  },

  [-10]: {
    question: "As you see, the decisions in this game have depicted greed and selfishness of humans since 1800s which has left me in a polluted and unhealthy state. I am not feeling well. It has made me sick which caused lots of climate changes and irregular weather cycles all over me.",
    
    Yes:{
          resources:+1,
          money: -3,
          pollution: -4,
          happiness: -1,
          message:"Thanks for playing! Please help us save the Earth like you promised us in this game!! We were the reason for all this pollution, now help us revert it back and save the Earth from its demise!",
          next:-1
      },
  }
}