import React from "react";
import styles from "./styles.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPlus,
  faTrash,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Help = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className={styles.main}>
        <div className={styles.cover}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              Builder - конструктор одностраничных веб-сайтов
            </h1>
            <Button onClick={() => navigate("/login")}>
              Начать пользоваться
            </Button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.subtitle}>
            Что такое Builder и с чем его едят?
          </h3>
          <p className={styles.paragraph}>
            Builder - конструктор одностраничных веб-сайтов, он позволяет
            создавать простые одностраничные сайты, которые могут быть посвящены
            краткой информации о вашей компании или мероприятии, без знания
            программирования.
          </p>
          <p className={styles.paragraph}>
            Используя готовые шаблоны вы можете создать сайт со всей необходимой
            информацией или ссылками, стилизуя каждый элемент под свой вкус.
          </p>
          <h3 className={styles.subtitle}>С чего начать?</h3>
          <p className={styles.paragraph}>
            Изначально вы должны зарегистрироваться в приложении или войти в уже
            существующий аккаунт, для этого нажмите кнопку "Начать пользоваться"
            выше.
          </p>
          <p className={styles.paragraph}>
            После регистрации вам надо будет перейти в почту, которую вы ввели
            при создании аккаунта и перейти по ссылке, высланной вам на почту,
            что бы активировать аккаунт.
          </p>
          <h3 className={styles.subtitle}>Навигация</h3>
          <p className={styles.paragraph}>
            Для удобного пользования сайтом существует навигационная панель,
            содержащая в себе ссылку на главную страницу приложения - ваши
            проекты, а так же ссылку на ваш профиль, откуда можно выйти из
            аккаунта.
          </p>
          <h3 className={styles.subtitle}>Первая страница</h3>
          <p className={styles.paragraph}>
            После авторизации вы будете перенаправленны на страницу всех ваших
            проектов, что бы создать новый проект - нужно нажать "Создать новый
            проект", где вы сможете ввести название нового проекта и выбрать,
            смогут ли просматривать и скачивать его другие авторизованные
            пользователи. Что бы создать проект с введёнными настройками нажмите
            кнопку "Создать".
          </p>
          <p className={styles.paragraph}>
            После этого снова откроется страница со всеми вашими проектами,
            вклюая новый.
          </p>
          <h3 className={styles.subtitle}>Опечатались ? Не страшно</h3>
          <p className={styles.paragraph}>
            Если вы решили изменить настройки проекта после его создания, или же
            удалить его за ненадобностью - вы можете нажать на кнопку "•••"
            расположенную в конце ссылки на проект. Откроется страница где вы
            сможете изменить нужные вам данные или же удалить проект.
          </p>
          <h3 className={styles.subtitle}>Создаём страницу</h3>
          <p className={styles.paragraph}>
            После открытия проекта вы попадёте на страницу содержащую кнопки
            "Создать блок" и "Скачать". Разберём кнопку "Создать блок", после
            нажатия на неё открывается окно с выбором возможных блоков:
          </p>
          <ul className={styles.list}>
            <li className={styles.list__item}>Обложка</li>
            <li className={styles.list__item}>Заголовок</li>
            <li className={styles.list__item}>Параграф</li>
            <li className={styles.list__item}>Два параграфа</li>
            <li className={styles.list__item}>Изображение</li>
            <li className={styles.list__item}>Параграф-изображение</li>
            <li className={styles.list__item}>Наша команда</li>
            <li className={styles.list__item}>Кнопка</li>
            <li className={styles.list__item}>Социальные сети</li>
          </ul>
          <p className={styles.paragraph}>
            При нажатии на кнопку с выбранным блоком создастся блок, который
            будет иметь в себе начальный контент и стили.
          </p>
          <h3 className={styles.subtitle}>Как изменить содержимое блока ?</h3>
          <p className={styles.paragraph}>
            Каждый блок содержит собственные поля контента и элементы
            стилизации. Что бы изменить содержимое блока нужно навестись на него
            и нажать кнопку "<FontAwesomeIcon icon={faPen} />
            ". После этого откроется окно, содержащее кнопки "Закрыть" и
            "Сохранить и закрыть". А под ними будут располагаться поля блока,
            например у блока "Обложка" это поля "Заголовок", "Подзаголовок" и
            "Описание".
          </p>
          <p className={styles.paragraph}>
            Если вы не хотите, что бы какие-то части контента отображались на
            странице - оставьте их поля пустыми.
          </p>
          <p className={styles.paragraph}>
            Для корректной работы все ссылки далжны начинаться с http:// или
            https://
          </p>
          <h3 className={styles.subtitle}>Как изменить стили блока ?</h3>
          <p className={styles.paragraph}>
            Что бы изменить стили блока нужно навестись на него и нажать кнопку
            "<FontAwesomeIcon icon={faGear} />
            ". После этого откроется окно, содержащее кнопки "Закрыть" и
            "Сохранить и закрыть". А под ними будут располагаться стили блока,
            все блоки содержат общие стили: "Отступ сверху", "Отступ снизу",
            "Цвет фона".
          </p>
          <h3 className={styles.subtitle}>Как удалить блок ?</h3>
          <p className={styles.paragraph}>
            Что бы удалить блок нужно навестись на него и нажать кнопку "
            <FontAwesomeIcon icon={faTrash} />
            ". После этого блок удалиться.
          </p>
          <h3 className={styles.subtitle}>Как добавить блок</h3>
          <p className={styles.paragraph}>
            Что бы добавить нужный блок перед существующим блоком - нужно
            навестись на него и нажать кнопку "<FontAwesomeIcon icon={faPlus} />
            ". Если блок нужно создать в конце сайта - нужно нажать кнопку
            "Создать блок";
          </p>
          <h3 className={styles.subtitle}>Скачивание сайта</h3>
          <p className={styles.paragraph}>
            После нажатия кнопки "Скачать" у вас начнется загрузка zip-файла,
            содержащего в себе уже готовую страницу, распаковав его - вы можете
            залить его на сервер либо сервис позволяющий упрощенно хостить ваши
            проекты.
          </p>
        </div>
      </main>
    </>
  );
};

export default Help;
