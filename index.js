const group = [
  'Все',
  'АСУ-23-1б',
  'АСУ-22-1б',
  'АСУ-21-1б',
  'АСУ-20-1б',
  'ПГС-23-1б',
  'ПГС-22-1б',
  'ПГС-21-1б',
  'АТПП-23-1б',
  'АТПП-21-1б',
  'АТПП-20-1б',
  'ЭС-23-1б',
  'ЭС-22-1б',
  'ЭС-20-1б',
];

const teachers = [
  'Все',
  'Морозова А. Р.',
  'Красильников С. Н.',
  'Щербакова Е. В.',
  'Куликов Н. М.',
  'Лабутина Т. В.',
  'Русских Т. И.',
  'Новкова И. В.',
  'Травников А. В.',
  'Адоков С. Б.',
  'Германюк Г. Ю.',
  'Чепикова Т. П.',
  'Копанева Т. В.',
  'Вахрушев Д. А.',
  'Пройдаков И. А.',
  'Сухих И. И.',
  'Святский В. М.',
  'Шергина М. А.',
  'Баженова Т. Р.',
  'Иванова Т. Н',
  'Святский В. М.',
  'Ковязина И. В.',
];

const groupData = [
  {
    name: 'АСУ-23-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'МАТЕМАТИКА',
          auditory: '32',
          teacher: 'Морозова А. Р.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '3',
          discipline: 'ИНЖЕНЕРНАЯ ГЕОМЕТРИЯ и КОМПЬЮТЕРНАЯ ГРАФИКА',
          auditory: '1',
          teacher: 'Красильников С. Н.',
        },
      ],
    },
  },
  {
    name: 'АСУ-22-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '1',
          discipline: 'ФИЗИКА',
          auditory: '47',
          teacher: 'Германюк Г. Ю.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '2',
          discipline: 'ДИСКРЕТНАЯ МАТЕМАТИКА и МАТЕМАТИЧЕСКАЯ ЛОГИКА',
          auditory: '6',
          teacher: 'Морозова А. Р',
        },
      ],
    },
  },
  {
    name: 'АСУ-21-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'СОВРЕМЕННЫЕ ИНСТРУМЕНТЫ МОДЕЛИРОВАНИЯ БИЗНЕС-ПРОЦЕССОВ',
          auditory: '28',
          teacher: 'Русских Т. И.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '3',
          discipline: 'ИССЛЕДОВАНИЕ ОПЕРАЦИЙ',
          auditory: '28',
          teacher: 'Морозова А. Р',
        },
      ],
    },
  },
  {
    name: 'АСУ-20-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '8.30',
          tameOut: '10.00',
          pair: '1',
          discipline: 'АДМИНИСТРИРОВАНИЕ ИНФОРМАЦИОННЫХ СИСТЕМ',
          auditory: '29',
          teacher: 'Сухих И. И.',
        },
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'АДМИНИСТРИРОВАНИЕ ИНФОРМАЦИОННЫХ СИСТЕМ',
          auditory: '29',
          teacher: 'Сухих И. И.',
        },
      ],
    },
  },
  {
    name: 'ПГС-23-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'ФИЛОСОФИЯ',
          auditory: '1',
          teacher: 'Щербакова Е.В.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '3',
          discipline: 'ИНЖЕНЕРНАЯ ГЕОМЕТРИЯ и КОМПЬЮТЕРНАЯ ГРАФИКА',
          auditory: '1',
          teacher: 'Красильников С. Н.',
        },
      ],
    },
  },
  {
    name: 'ПГС-22-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '8.00',
          tameOut: '10.00',
          pair: '1',
          discipline: 'ФИЛОСОФИЯ',
          auditory: '47',
          teacher: 'Германюк Г.Ю.',
        },
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '3',
          discipline: 'ЭКОНОМИКА и БИЗНЕС',
          auditory: '1',
          teacher: 'Копанева Т.В.',
        },
      ],
    },
  },
  {
    name: 'ПГС-21-1б',
    data: {
      dateTime: '22.09.2023',
      pairs: [
        {
          tameIn: '8.00',
          tameOut: '10.00',
          pair: '1',
          discipline: 'ТЕПЛОГАЗОСНАБЖЕНИЕ и ВЕНТИЛЯЦИЯ с ОСНОВАМИ ТЕПЛОТЕХНИКИ',
          auditory: '43',
          teacher: 'Чепикова Т. П.',
        },
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '3',
          discipline: 'ТЕПЛОГАЗОСНАБЖЕНИЕ и ВЕНТИЛЯЦИЯ с ОСНОВАМИ ТЕПЛОТЕХНИКИ',
          auditory: '43',
          teacher: 'Чепикова Т. П.',
        },
      ],
    },
  },
  {
    name: 'АТПП-23-1б',
    data: {
      dateTime: '22.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'ФИЗИКА',
          auditory: '47',
          teacher: 'Германюк Г.Ю.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '2',
          discipline: 'ФИЗИКА',
          auditory: '44',
          teacher: 'Германюк Г.Ю.',
        },
      ],
    },
  },
  {
    name: 'АТПП-21-1б',
    data: {
      dateTime: '22.09.2023',
      pairs: [
        {
          tameIn: '14.00',
          tameOut: '15.30',
          pair: '1',
          discipline: 'ЛЕКТРИЧЕСКИЕ МАШИНЫ',
          auditory: '212',
          teacher: 'Ковязина И. В.',
        },
        {
          tameIn: '15.40',
          tameOut: '17.30',
          pair: '5',
          discipline: 'ЭЛЕКТРИЧЕСКИЕ МАШИНЫ',
          auditory: '212',
          teacher: 'Ковязина И. В.',
        },
      ],
    },
  },
  {
    name: 'АТПП-20-1б',
    data: {
      dateTime: '22.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'ДИАГНОСТИКА и НАДЕЖНОСТЬ АВТОМАТИЗИРОВАННЫХ СИСТЕМ',
          auditory: '43',
          teacher: 'Чепикова Т. П.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '3',
          discipline: 'ЭЛЕКТРОСНАБЖЕНИЕ РЕЛЕЙНАЯ ЗАЩИТА и АВТОМАТИКА',
          auditory: '211',
          teacher: 'Ковязина И. В.',
        },
      ],
    },
  },
  {
    name: 'ЭС-23-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'ФИЗИКА',
          auditory: '47',
          teacher: 'Германюк Г. Ю.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '3',
          discipline: 'МАТЕМАТИКА',
          auditory: '32',
          teacher: 'Морозова А. Р.',
        },
      ],
    },
  },
  {
    name: 'ЭС-22-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '3',
          discipline: 'УЧЕБНО-ИССЛЕДОВАТЕЛЬСКАЯ РАБОТА',
          auditory: '43',
          teacher: 'Германюк Г. Ю.',
        },
        {
          tameIn: '14.00',
          tameOut: '15.30',
          pair: '4',
          discipline: 'МАТЕМАТИКА',
          auditory: '7',
          teacher: 'Морозова А. Р.',
        },
      ],
    },
  },
  {
    name: 'ЭС-20-1б',
    data: {
      dateTime: '21.09.2023',
      pairs: [
        {
          tameIn: '10.10',
          tameOut: '11.40',
          pair: '2',
          discipline: 'МОДЕЛИРОВАНИЕ в ЭЛЕКТРОЭНЕРГЕТИКЕ и ЭЛЕКТРОТЕХНИКЕ',
          auditory: '212',
          teacher: 'Иванова Т. Н.',
        },
        {
          tameIn: '12.10',
          tameOut: '13.40',
          pair: '2',
          discipline: 'МОДЕЛИРОВАНИЕ в ЭЛЕКТРОЭНЕРГЕТИКЕ и ЭЛЕКТРОТЕХНИКЕ',
          auditory: '212',
          teacher: 'Ковязина И. В',
        },
      ],
    },
  },
];

const listOptionGroup = group.map((item) => `<option>${item}</option>`).join('');
const listOptionTeacher = teachers.map((item) => `<option>${item}</option>`).join('');

document.querySelector('.table-body').innerHTML = getCurrentData(groupData);
document.getElementById('listGroup').innerHTML = listOptionGroup;
document.getElementById('listTeacher').innerHTML = listOptionTeacher;

document.querySelector('.burger').addEventListener('click', function (e) {
  this.classList.toggle('activebg');
  document.querySelector('.menu').classList.toggle('activemenu');
});

document.querySelector('input[list=listTeacher]').addEventListener('change', function (e) {
  const value = e.target.value;
  this.value = '';
  this.setAttribute('placeholder', value);
});

document.querySelector('input[list=listGroup]').addEventListener('change', function (e) {
  const value = e.target.value;
  this.value = '';
  this.setAttribute('placeholder', value);
});

document.querySelector('.menu__btn').addEventListener('click', function (e) {
  const dateIn = document.querySelector('.menu__dateIn').value;
  const dateOut = document.querySelector('.menu__dateOut').value;
  let teacher = document.querySelector('input[list=listTeacher]').getAttribute('placeholder') ?? '';
  let group = document.querySelector('input[list=listGroup]').getAttribute('placeholder') ?? '';

  if (teacher === 'Все') {
    teacher = '';
  }
  if (group === 'Все') {
    group = '';
  }

  const emptyRow = document.getElementById('emptyRow');
  if (emptyRow) {
    document.querySelector('.table-body').removeChild(emptyRow);
  }

  let params = [];

  params.push(new QueryParam('dateIn', dateIn));
  params.push(new QueryParam('dateOut', dateOut));
  params.push(new QueryParam('teacher', encodeURI(teacher)));
  params.push(new QueryParam('group', encodeURI(group)));

  setParamsInUrl(params);

  filterCurrentTables(dateIn, dateOut, teacher, group);

  const isEmpty = Array.from(document.querySelectorAll('#mainRow')).every(
    (row) => row.style.display === 'none',
  );

  if (isEmpty) {
    const td = document.createElement('td');
    td.setAttribute('colSpan', 8);
    td.innerHTML = 'Пусто &#129300;';
    td.style.textAlign = 'center';

    const tr = document.createElement('tr');
    tr.setAttribute('id', 'emptyRow');
    tr.appendChild(td);

    document.querySelector('.table-body').appendChild(tr);
  }
});

function formatDate(inputDate) {
  const parts = inputDate.split('.');
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    const year = parts[2];
    return new Date(`${year}-${month}-${day}`);
  } else {
    alert('Некорректный формат даты');
  }
}

function getCurrentData(data) {
  return data
    .map((item) => {
      return item.data.pairs
        .map(
          (pair) =>
            `
            <tr id="mainRow">
              <td dateTime="${item.data.dateTime}">${item.data.dateTime}</td>
              <td>${pair.tameIn}</td>
              <td>${pair.tameOut}</td>
              <td>${pair.pair}</td>
              <td group="${item.name}">${item.name}</td>
              <td>${pair.discipline}</td>
              <td>${pair.auditory}</td>
              <td teacher="${pair.teacher}">${pair.teacher}</td>
            </tr>
          `,
        )
        .join('');
    })
    .join('');
}

function DefaultTable() {
  const params = new URLSearchParams(window.location.search);

  let dateIn = params.get('dateIn');
  let dateOut = params.get('dateOut');
  let teacher = params.get('teacher') ? decodeURI(params.get('teacher')) : '';
  let group = params.get('group') ? decodeURI(params.get('group')) : '';

  if (!dateIn && !dateOut && !teacher && !group) {
    group = 'АСУ-20-1б';
  }

  document.querySelector('.menu__dateIn').value = dateIn;
  document.querySelector('.menu__dateOut').value = dateOut;
  document.querySelector('input[list=listTeacher]').setAttribute('placeholder', teacher);
  document.querySelector('input[list=listGroup]').setAttribute('placeholder', group);

  filterCurrentTables(dateIn, dateOut, teacher, group);
}

DefaultTable();

class QueryParam {
  constructor(Name, Value) {
    this.Name = Name;
    this.Value = Value;
  }
}

function setParamsInUrl(params) {
  const url = new URL(window.location);

  params.forEach((item) => url.searchParams.set(item.Name, item.Value));

  history.pushState(null, null, url);
}

function filterCurrentTables(dateIn, dateOut, teacher, group) {
  document.querySelectorAll('#mainRow').forEach((tr) => {
    const tdDate = formatDate(tr.querySelector('td[dateTime]').getAttribute('dateTime'));
    const tdTeacher = tr.querySelector('td[teacher]').getAttribute('teacher');
    const tdGroup = tr.querySelector('td[group]').getAttribute('group');

    const isDateIn = !dateIn || tdDate >= new Date(dateIn);
    const isDateOut = !dateOut || tdDate <= new Date(dateOut);
    const isTeacherMatch = !teacher || tdTeacher === teacher;
    const isGroupMatch = !group || tdGroup === group;

    if (isDateIn && isDateOut && isTeacherMatch && isGroupMatch) {
      tr.style.display = 'table-row';
    } else {
      tr.style.display = 'none';
    }
  });
}
