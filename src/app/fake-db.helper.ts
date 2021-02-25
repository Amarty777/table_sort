import { GenderEnum, IDataItemResponse, IDataResponse } from "./common.models";
import * as moment from 'moment';

export const marathon = 42195;
export const marathonAvgSpeed = 20000;

export const maleFirstName = ['Chet', 'Gilberto','Horacio','Newton','Perry','Mariano','Jamar','Lane','Brendon','Nick','Harold','Jerrold','Freeman','Emmanuel','Jay','Anton','Clair','Carol','Reynaldo','Edwin','Malik','Jake','Lamont','German','Elwood','Monty','Marty','Moshe','Gil','Wilton','Kerry','Gale','Maynard','Duane','Anthony','Clarence','Stanford','Harold','Otto','Ray','Tony','Ollie','Lincoln','Vince','Kenneth','Elijah','Santos','Pat','Frankie','Charley','Arthur','Carlo','Mathew','Jeff','Boyce','Darnell','Alex','Damien','Enrique','Oswaldo','Solomon','Salvador','Markus','Keenan','Jay','Clayton','Steven','Shayne','Rueben','Jesse','Darryl','Bryon','Reed','Conrad','Carl','Barry','Gilbert','Anton','Blake','Lamont','Alejandro','Josiah','Craig','Leon','Steven','Wm','Mary','Bennie','Marion','Chester','Oscar','Dylan','Arturo','Wilber','Jay','Bart','Hilario','Jefferson','Jonathan','Burl','Donn','Mohamed','Todd','Emory','Alfredo','Perry','Damien','Brent','Gil','Elliot','Joel','Dustin','Jan','Samuel','Boris','Cary','Lucius','Elias','Mikel','Silas','Terrence','Lou','Nicolas','Keith','Claudio','Allen','Cornell','Rafael','Alan','Dustin','Sol','Trey','Carlton','Jeremiah','Isreal','Marcus','Kieth','Darrell','Korey','Kirby','Levi','Alphonso','Rufus','Bernard','Archie','Arlie','Winston','Antoine','Clifton','Gerardo','Alejandro','Chong','Jerry','Dominic','Charles','Emilio','Vincenzo','Dorsey','Lorenzo','Tommy','Jerrod','Danilo','Erasmo','Theodore','Curtis','Salvatore','Chuck','Tristan','Haywood','Johny', 'Roberto', 'Noel', 'Terrell', 'Stewart', 'Mel', 'Hai', 'Eugenio', 'Granville', 'Francesco', 'Clark', 'Kristopher', 'Thomas', 'Jarvis', 'Mitchell', 'Rufus', 'Johnson', 'Damian', 'Cristobal', 'Rolland', 'Russ', 'Geoffrey', 'Javier', 'Denny', 'Jospeh', 'Boyd', 'Mohamed', 'Brice', 'Teddy', 'Tad', 'Colby'];
export const femaleFirstName = ['Grayce','Britni','Charissa','Hildegarde','Liz','Jacquelin','Meghan','Robyn','Shu','Catrice','Karlene','Nickie','Summer','Cyndi','Mellisa','Latoyia','Jacqualine','Ema','Erline','Elaine','Latasha','Treva','Susanne','Michell','Marguerita','Earline','Kalyn','Sandi','Tiara','Dixie','Shanelle','Nieves','Jeanetta','Ryann','Eunice','Kelsie','Mahalia','Eloise','Scarlett','Aracely','Zandra','Vernie','Angelena','Lynna','Rachele','Trula','Wynell','Delana','Jasmine','Janetta','Cheryle','Cassy','Pia','Devorah','Brenna','Cyndi','Isaura','Cherrie','Catina','Flor','Krista','Doretta','Lorretta','Debby','Clara','Elina','Sherita','Delisa','Lucille','Denyse','Carli','Graciela','Laine','Angele','Tammie','Mimi','Queen','Samella','Romana','Loree','Bettye','Jamila','Shizue','Elda','Dione','Meaghan','Brigette','Marlana','Nicola','Glennis','Shirely','Lindsy','Earleen','Martine','Meg','Maude','Alita','Bryanna','Suzy','Clarisa','Alessandra','Rosana','Paige','Debroah','Cierra','Jayna','Krissy','Jenell','Giovanna','Philomena','Hailey','Irma','Sheron','Zena','Amiee','Velda','Joleen','Regenia','Amada','Sandi','Bibi','Shante','Hanna','Linnea','Charlesetta','Josephina','Sanora','Kittie','Brianne','Tomiko','Lekisha','Emogene','Karyn','Laquanda','Luana','Cecille','Shanon','Matilde','Nora','Jazmin','Judy','Thi','Adina','Myong','Aretha','Honey','Jule','Emerald','Wynell','Iraida','Shela','Macy','Francoise','Marget','Tanja','Lauran','Lavone','Renee','Bonita','Bell','Celestina','Avril','Maurine','Raye','Margene','Eusebia','Marhta','Elia','Mina','Soon','Cathleen','Katina','Kanesha','Elodia','Ena','Kacey','Ranae','Luella','Debroah','Christen','Jessia','Alfredia','Georgene','Sacha','Yessenia','Geri','Louisa','Marielle','Zelda','Elly','Edna','Velda','Darby','Norma','Ewa','Chanell','Joann','Floria','Ana','Soledad'];

export const lastName = ['Looby', 'Napoles', 'King', 'Brain', 'Steely', 'Marotta', 'Loadholt', 'Ouk', 'Hammes', 'Vassar', 'Bremer', 'Kellough', 'Blakney', 'Mccraw', 'Ray', 'Dublin', 'Casavant', 'Stimage', 'Deines', 'Trahan', 'Burgan', 'Marlow', 'Eisele', 'Proehl', 'Wever', 'Conlon', 'Hadden', 'Peppers', 'Day', 'Mcdonagh', 'Jolley', 'Bucholz', 'Empson', 'Ferreira', 'Mangano', 'Coffee', 'Capehart', 'Brock', 'Matzen', 'Sabella', 'Vesely', 'Oney', 'Leddy', 'Croslin', 'Bish', 'Ettinger', 'Marshell', 'Boise', 'Brent', 'Fulk', 'Mcentee', 'Magallan', 'Sieg', 'Menges', 'Hoppes', 'Jaquez', 'Giron', 'Ritchie', 'Bresett', 'Groce'];

export const speedHelper = [
  { start: 18, end: 25, min: 95, max: 120 },
  { start: 26, end: 35, min: 90, max: 115 },
  { start: 36, end: 45, min: 85, max: 110 },
  { start: 46, end: 55, min: 60, max: 75 },
  { start: 56, end: 65, min: 45, max: 65 },
  { start: 66, end: 75, min: 35, max: 50 },
  { start: 76, end: 85, min: 25, max: 40 },
  { start: 86, end: 95, min: 15, max: 30 },
  { start: 96, end: 106, min: 10, max: 20 },
];

export function getAvgSpeed(birthDate: Date): number {
  const now = new Date();
  const years = now.getUTCFullYear() - birthDate.getUTCFullYear()
  const index = speedHelper.findIndex(x => x.start >= years && years <= x.end);
  const result = marathonAvgSpeed * (index > -1 ? (rnd(speedHelper[index].min * 100, speedHelper[index].max * 100) / 10000) : (rnd(5000, 10000) / 10000));
  return result;
}



export function getTestTableData(totalCount: number, page = 1, take = 10): IDataResponse {
  const result: IDataResponse = {
    items: [],
    displayed: [],
    paginator: {
      page,
      take,
      totalCount
    }
  };

  for (let i = 1; i <= totalCount; i++) {
    const item: IDataItemResponse = {
      id: i,
      firstName: '',
      lastName: '',
      gender: null,
      speed: 0,
      distance: marathon,
      result: 0,
      birthDate: rndBirthDate(),
      isFinished: rnd(0, 10) > 2
    };
    if (!item.isFinished) {
      item.distance = rnd(0, marathon);
    }
    item.speed = getAvgSpeed(item.birthDate);
    item.result = (item.distance / item.speed) * 60 * 60 * 1000;
    const isMale = rndBool();
    item.gender = isMale ? GenderEnum.Male : GenderEnum.Female;
    item.firstName = getRndFirstName(isMale);
    item.lastName = getRndLastName();
    result.items.push(item);
  }

  return result;
}

export function rndBirthDate(): Date {
  const start = new Date(1920, 0, 1);
  const temp = new Date();
  const end = new Date(temp.getFullYear() - 18, temp.getMonth(), temp.getDate());
  const result = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return result;
}

export function rnd(min, max): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function rndBool(): boolean {
  return Math.random() < 0.5;;
}

export function getRndFirstName(isMale = true): string {
  return isMale ?
    maleFirstName[Math.floor(Math.random() * maleFirstName.length)] :
    femaleFirstName[Math.floor(Math.random() * femaleFirstName.length)];
}

export function getRndLastName(): string {
  return lastName[Math.floor(Math.random() * lastName.length)];
}
