export type Character=[{
    id:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    origin:object;
    location:object;
    image:string;
    episode:Array<string>;
    url:string;
    created:string;
  }]

export type Episode=[{
    id:string;
    name:string;
    air_date:string;
    episode:string;
    characters:Array<string>;
    url:string;
    created:string;
  }];

export type TransitionsType=
  {[human:string]:boolean,
  alien:boolean,
  alive:boolean,
  dead:boolean,
  unknown:boolean,
  sort:boolean,
  sortReverse:boolean,
  sortNew:boolean,
  sortOld:boolean
}
;

export type LinksType=
  {[speciasHuman:string]:string,
   speciasAlien:string,
   mainSpecias:string,
   statusAlive:string,
   statusDead:string,
   statusUnknown:string,
   mainStatus:string
  }

export const Links:LinksType[]=[
  { speciasHuman:"human",
    speciasAlien:"alien",
    mainSpecias:'',
    statusAlive:"alive",
    statusDead:"dead",
    statusUnknown:"unknown",
    mainStatus:''
    }
] ;

export const TransitionsArray:TransitionsType[]=[
   {human:false,
    alien:false,
    alive:false,
    dead:false,
    unknown:false,
    sort:false,
    sortReverse:false,
    sortNew:false,
    sortOld:false,
  }
] ;

export const Options:OptionsType=[
  {name:'Биологический вид',
   firstSelect:false,
   optionHuman:'Human',
   optionAlien:'Alien',
  },
  {name:'Статус жизни',
   secondSelect:false,
   optionAlive:'Alive',
   optionDead:'Dead',
   optionUnknown:'Unknown',
  },
  {name:'',
   thirstSelect:false,
   optionSort:'from A to Z',
   optionSortReverse:'from Z to A',
   optionNew:'По дате создания ⬆',
   optionOld:'По дате создания ⬇',
  }
];
export type OptionsType=[
  {name:string,
   firstSelect:boolean,
   optionHuman:string,
   optionAlien:string,
  },
  {name:string,
   secondSelect:boolean,
   optionAlive:string,
   optionDead:string,
   optionUnknown:string,
  },
  {name:string,
   thirstSelect:boolean,
   optionSort:string,
   optionSortReverse:string,
   optionNew:string,
   optionOld:string,
  }
];

export type ContentContextType = {
  value:string;
  setValue:(value:string)=>void;
  name:string;
  setName:(value:string)=>void;
  links:LinksType[];
  setLinks:(value:LinksType[])=>void;
  transitions:TransitionsType[];
  setTransitions:(value:TransitionsType[])=>void;
  };
