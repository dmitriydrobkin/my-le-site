export type LocalizedString = {
  uk: string;
  ru: string;
};

export type CityData = {
  slug: string;
  name: LocalizedString;
  namePrepositional: LocalizedString;
  nameGenitive: LocalizedString;
};

export const CITIES: CityData[] = [
  { slug: 'kyiv', name: { uk: 'Київ', ru: 'Киев' }, namePrepositional: { uk: 'в Києві', ru: 'в Киеве' }, nameGenitive: { uk: 'Києва', ru: 'Киева' } },
  { slug: 'kharkiv', name: { uk: 'Харків', ru: 'Харьков' }, namePrepositional: { uk: 'у Харкові', ru: 'в Харькове' }, nameGenitive: { uk: 'Харкова', ru: 'Харькова' } },
  { slug: 'dnipro', name: { uk: 'Дніпро', ru: 'Днепр' }, namePrepositional: { uk: 'у Дніпрі', ru: 'в Днепре' }, nameGenitive: { uk: 'Дніпра', ru: 'Днепра' } },
  { slug: 'odesa', name: { uk: 'Одеса', ru: 'Одесса' }, namePrepositional: { uk: 'в Одесі', ru: 'в Одессе' }, nameGenitive: { uk: 'Одеси', ru: 'Одессы' } },
  { slug: 'lviv', name: { uk: 'Львів', ru: 'Львов' }, namePrepositional: { uk: 'у Львові', ru: 'во Львове' }, nameGenitive: { uk: 'Львова', ru: 'Львова' } },
  { slug: 'zaporizhzhia', name: { uk: 'Запоріжжя', ru: 'Запорожье' }, namePrepositional: { uk: 'у Запоріжжі', ru: 'в Запорожье' }, nameGenitive: { uk: 'Запоріжжя', ru: 'Запорожья' } },
  { slug: 'kryvyi-rih', name: { uk: 'Кривий Ріг', ru: 'Кривой Рог' }, namePrepositional: { uk: 'у Кривому Розі', ru: 'в Кривом Роге' }, nameGenitive: { uk: 'Кривого Рогу', ru: 'Кривого Рога' } },
  { slug: 'mykolaiv', name: { uk: 'Миколаїв', ru: 'Николаев' }, namePrepositional: { uk: 'у Миколаєві', ru: 'в Николаеве' }, nameGenitive: { uk: 'Миколаєва', ru: 'Николаева' } },
  { slug: 'mariupol', name: { uk: 'Маріуполь', ru: 'Мариуполь' }, namePrepositional: { uk: 'у Маріуполі', ru: 'в Мариуполе' }, nameGenitive: { uk: 'Маріуполя', ru: 'Мариуполя' } },
  { slug: 'vinnytsia', name: { uk: 'Вінниця', ru: 'Винница' }, namePrepositional: { uk: 'у Вінниці', ru: 'в Виннице' }, nameGenitive: { uk: 'Вінниці', ru: 'Винницы' } },
  { slug: 'kherson', name: { uk: 'Херсон', ru: 'Херсон' }, namePrepositional: { uk: 'у Херсоні', ru: 'в Херсоне' }, nameGenitive: { uk: 'Херсона', ru: 'Херсона' } },
  { slug: 'poltava', name: { uk: 'Полтава', ru: 'Полтава' }, namePrepositional: { uk: 'у Полтаві', ru: 'в Полтаве' }, nameGenitive: { uk: 'Полтави', ru: 'Полтавы' } },
  { slug: 'chernihiv', name: { uk: 'Чернігів', ru: 'Чернигов' }, namePrepositional: { uk: 'у Чернігові', ru: 'в Чернигове' }, nameGenitive: { uk: 'Чернігова', ru: 'Чернигова' } },
  { slug: 'cherkasy', name: { uk: 'Черкаси', ru: 'Черкассы' }, namePrepositional: { uk: 'у Черкасах', ru: 'в Черкассах' }, nameGenitive: { uk: 'Черкас', ru: 'Черкасс' } },
  { slug: 'zhytomyr', name: { uk: 'Житомир', ru: 'Житомир' }, namePrepositional: { uk: 'у Житомирі', ru: 'в Житомире' }, nameGenitive: { uk: 'Житомира', ru: 'Житомира' } },
  { slug: 'sumy', name: { uk: 'Суми', ru: 'Сумы' }, namePrepositional: { uk: 'у Сумах', ru: 'в Сумах' }, nameGenitive: { uk: 'Сум', ru: 'Сум' } },
  { slug: 'khmelnytskyi', name: { uk: 'Хмельницький', ru: 'Хмельницкий' }, namePrepositional: { uk: 'у Хмельницькому', ru: 'в Хмельницком' }, nameGenitive: { uk: 'Хмельницького', ru: 'Хмельницкого' } },
  { slug: 'chernivtsi', name: { uk: 'Чернівці', ru: 'Черновцы' }, namePrepositional: { uk: 'у Чернівцях', ru: 'в Черновцах' }, nameGenitive: { uk: 'Чернівців', ru: 'Черновцов' } },
  { slug: 'rivne', name: { uk: 'Рівне', ru: 'Ровно' }, namePrepositional: { uk: 'у Рівному', ru: 'в Ровно' }, nameGenitive: { uk: 'Рівного', ru: 'Ровно' } },
  { slug: 'kamianske', name: { uk: 'Кам\'янське', ru: 'Каменское' }, namePrepositional: { uk: 'у Кам\'янському', ru: 'в Каменском' }, nameGenitive: { uk: 'Кам\'янського', ru: 'Каменского' } },
  { slug: 'kropyvnytskyi', name: { uk: 'Кропивницький', ru: 'Кропивницкий' }, namePrepositional: { uk: 'у Кропивницькому', ru: 'в Кропивницком' }, nameGenitive: { uk: 'Кропивницького', ru: 'Кропивницкого' } },
  { slug: 'ivano-frankivsk', name: { uk: 'Івано-Франківськ', ru: 'Ивано-Франковск' }, namePrepositional: { uk: 'в Івано-Франківську', ru: 'в Ивано-Франковске' }, nameGenitive: { uk: 'Івано-Франківська', ru: 'Ивано-Франковска' } },
  { slug: 'kremenchuk', name: { uk: 'Кременчук', ru: 'Кременчуг' }, namePrepositional: { uk: 'у Кременчуці', ru: 'в Кременчуге' }, nameGenitive: { uk: 'Кременчука', ru: 'Кременчуга' } },
  { slug: 'ternopil', name: { uk: 'Тернопіль', ru: 'Тернополь' }, namePrepositional: { uk: 'у Тернополі', ru: 'в Тернополе' }, nameGenitive: { uk: 'Тернополя', ru: 'Тернополя' } },
  { slug: 'lutsk', name: { uk: 'Луцьк', ru: 'Луцк' }, namePrepositional: { uk: 'у Луцьку', ru: 'в Луцке' }, nameGenitive: { uk: 'Луцька', ru: 'Луцка' } },
  { slug: 'bila-tserkva', name: { uk: 'Біла Церква', ru: 'Белая Церковь' }, namePrepositional: { uk: 'у Білій Церкві', ru: 'в Белой Церкви' }, nameGenitive: { uk: 'Білої Церкви', ru: 'Белой Церкви' } },
  { slug: 'uzhhorod', name: { uk: 'Ужгород', ru: 'Ужгород' }, namePrepositional: { uk: 'в Ужгороді', ru: 'в Ужгороде' }, nameGenitive: { uk: 'Ужгорода', ru: 'Ужгорода' } },
  { slug: 'boryspil', name: { uk: 'Бориспіль', ru: 'Борисполь' }, namePrepositional: { uk: 'у Борисполі', ru: 'в Борисполе' }, nameGenitive: { uk: 'Борисполя', ru: 'Борисполя' } },
  { slug: 'bucha', name: { uk: 'Буча', ru: 'Буча' }, namePrepositional: { uk: 'у Бучі', ru: 'в Буче' }, nameGenitive: { uk: 'Бучі', ru: 'Бучи' } },
  { slug: 'irpin', name: { uk: 'Ірпінь', ru: 'Ирпень' }, namePrepositional: { uk: 'в Ірпені', ru: 'в Ирпене' }, nameGenitive: { uk: 'Ірпеня', ru: 'Ирпеня' } },
  { slug: 'brovary', name: { uk: 'Бровари', ru: 'Бровары' }, namePrepositional: { uk: 'у Броварах', ru: 'в Броварах' }, nameGenitive: { uk: 'Броварів', ru: 'Броваров' } },
  { slug: 'vasylkiv', name: { uk: 'Васильків', ru: 'Васильков' }, namePrepositional: { uk: 'у Василькові', ru: 'в Василькове' }, nameGenitive: { uk: 'Василькова', ru: 'Василькова' } },
  { slug: 'fastiv', name: { uk: 'Фастів', ru: 'Фастов' }, namePrepositional: { uk: 'у Фастові', ru: 'в Фастове' }, nameGenitive: { uk: 'Фастова', ru: 'Фастова' } },
  { slug: 'mukachevo', name: { uk: 'Мукачево', ru: 'Мукачево' }, namePrepositional: { uk: 'у Мукачеві', ru: 'в Мукачево' }, nameGenitive: { uk: 'Мукачева', ru: 'Мукачева' } },
  { slug: 'pavlohrad', name: { uk: 'Павлоград', ru: 'Павлоград' }, namePrepositional: { uk: 'у Павлограді', ru: 'в Павлограде' }, nameGenitive: { uk: 'Павлограда', ru: 'Павлограда' } },
  { slug: 'uman', name: { uk: 'Умань', ru: 'Умань' }, namePrepositional: { uk: 'в Умані', ru: 'в Умани' }, nameGenitive: { uk: 'Умані', ru: 'Умани' } },
  { slug: 'kovel', name: { uk: 'Ковель', ru: 'Ковель' }, namePrepositional: { uk: 'у Ковелі', ru: 'в Ковеле' }, nameGenitive: { uk: 'Ковеля', ru: 'Ковеля' } },
  { slug: 'kalush', name: { uk: 'Калуш', ru: 'Калуш' }, namePrepositional: { uk: 'у Калуші', ru: 'в Калуше' }, nameGenitive: { uk: 'Калуша', ru: 'Калуша' } },
  { slug: 'izmail', name: { uk: 'Ізмаїл', ru: 'Измаил' }, namePrepositional: { uk: 'в Ізмаїлі', ru: 'в Измаиле' }, nameGenitive: { uk: 'Ізмаїла', ru: 'Измаила' } },
  { slug: 'chornomorsk', name: { uk: 'Чорноморськ', ru: 'Черноморск' }, namePrepositional: { uk: 'у Чорноморську', ru: 'в Черноморске' }, nameGenitive: { uk: 'Чорноморська', ru: 'Черноморска' } },
  { slug: 'drohobych', name: { uk: 'Дрогобич', ru: 'Дрогобыч' }, namePrepositional: { uk: 'у Дрогобичі', ru: 'в Дрогобыче' }, nameGenitive: { uk: 'Дрогобича', ru: 'Дрогобыча' } },
  { slug: 'stryi', name: { uk: 'Стрий', ru: 'Стрый' }, namePrepositional: { uk: 'у Стрию', ru: 'в Стрыю' }, nameGenitive: { uk: 'Стрия', ru: 'Стрыя' } },
  { slug: 'berdychiv', name: { uk: 'Бердичів', ru: 'Бердичев' }, namePrepositional: { uk: 'у Бердичеві', ru: 'в Бердичеве' }, nameGenitive: { uk: 'Бердичева', ru: 'Бердичева' } },
  { slug: 'korosten', name: { uk: 'Коростень', ru: 'Коростень' }, namePrepositional: { uk: 'у Коростені', ru: 'в Коростене' }, nameGenitive: { uk: 'Коростеня', ru: 'Коростеня' } },
  { slug: 'oleksandriya', name: { uk: 'Олександрія', ru: 'Александрия' }, namePrepositional: { uk: 'в Олександрії', ru: 'в Александрии' }, nameGenitive: { uk: 'Олександрії', ru: 'Александрии' } },
  { slug: 'shostka', name: { uk: 'Шостка', ru: 'Шостка' }, namePrepositional: { uk: 'у Шостці', ru: 'в Шостке' }, nameGenitive: { uk: 'Шостки', ru: 'Шостки' } },
  { slug: 'kolomyia', name: { uk: 'Коломия', ru: 'Коломыя' }, namePrepositional: { uk: 'у Коломиї', ru: 'в Коломые' }, nameGenitive: { uk: 'Коломиї', ru: 'Коломыи' } },
  { slug: 'smila', name: { uk: 'Сміла', ru: 'Смела' }, namePrepositional: { uk: 'у Смілі', ru: 'в Смеле' }, nameGenitive: { uk: 'Сміли', ru: 'Смелы' } },
  { slug: 'novomoskovsk', name: { uk: 'Новомосковськ', ru: 'Новомосковск' }, namePrepositional: { uk: 'у Новомосковську', ru: 'в Новомосковске' }, nameGenitive: { uk: 'Новомосковська', ru: 'Новомосковска' } },
  { slug: 'pryluky', name: { uk: 'Прилуки', ru: 'Прилуки' }, namePrepositional: { uk: 'у Прилуках', ru: 'в Прилуках' }, nameGenitive: { uk: 'Прилук', ru: 'Прилук' } }
];