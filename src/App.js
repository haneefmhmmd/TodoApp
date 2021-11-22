import './styles/app.scss';

function App() {
  return (
    <main className="container">
      <header className="mb-4">
        <h1 className="title">My Todos</h1>
      </header>
      <section className="add-todo">
        <input type="text" placeholder="Add a todo..." />
        <button> + </button>
      </section>
      <section className="todo-list">
        <ul>
          <li className="todo">
            <button className="radio-button"></button>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              amet.
            </span>
            <button className="delete-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.719 0.436279H7.28148C6.29427 0.436279 5.49398 1.20019 5.49398 2.14253V2.62378H3.84398H1.55231L1.46524 2.62937C1.15204 2.66993 0.910645 2.92619 0.910645 3.23628C0.910645 3.57455 1.19793 3.84878 1.55231 3.84878H3.20231V13.08C3.20231 14.0224 4.0026 14.7863 4.98981 14.7863H13.0106C13.9979 14.7863 14.7981 14.0224 14.7981 13.08V3.84878H16.4481L16.5352 3.84319C16.8484 3.80263 17.0898 3.54636 17.0898 3.23628C17.0898 2.898 16.8025 2.62378 16.4481 2.62378H14.1565H12.5065V2.14253C12.5065 1.20019 11.7062 0.436279 10.719 0.436279ZM6.13484 3.84878C6.13511 3.84878 6.13538 3.84878 6.13564 3.84878H11.8648C11.8651 3.84878 11.8654 3.84878 11.8656 3.84878H13.5148V13.08C13.5148 13.3458 13.2891 13.5613 13.0106 13.5613H4.98981L4.90803 13.555C4.66848 13.5177 4.48564 13.3192 4.48564 13.08V3.84878H6.13484ZM11.2231 2.62378V2.14253C11.2231 1.90332 11.0403 1.70487 10.8008 1.66758L10.719 1.66128H7.28148C7.00303 1.66128 6.77731 1.87674 6.77731 2.14253V2.62378H11.2231ZM6.63981 10.8925V6.51753C6.63981 6.17926 6.9271 5.90503 7.28148 5.90503C7.60633 5.90503 7.8748 6.13546 7.91729 6.43442L7.92314 6.51753V10.8925C7.92314 11.2308 7.63586 11.505 7.28148 11.505C6.95663 11.505 6.68816 11.2746 6.64567 10.9756L6.63981 10.8925ZM11.3606 6.51753L11.3548 6.43442C11.3123 6.13546 11.0438 5.90503 10.719 5.90503C10.3646 5.90503 10.0773 6.17926 10.0773 6.51753V10.8925L10.0832 10.9756C10.1257 11.2746 10.3941 11.505 10.719 11.505C11.0734 11.505 11.3606 11.2308 11.3606 10.8925V6.51753Z"
                  fill="#dd2727"
                />
              </svg>
            </button>
          </li>
        </ul>
      </section>
      <section className="todo-filters">
        <button className="btn-primary selected">All todos</button>
        <button className="btn-primary disabled">Active todos</button>
        <button className="btn-primary disabled">Completed todos</button>
      </section>
    </main>
  );
}

export default App;
