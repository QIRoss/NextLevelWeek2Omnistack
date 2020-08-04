import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/63605898?s=400&u=2c32900c24931f0d7c798ad1bcaeab48aaafd7b8&v=4" alt="Lucas de Queiroz" />
                        <div>
                            <strong>Lucas de Queiroz</strong>
                            <span>Filosofia</span>
                        </div>
                    </header>

                    <p>
                        Estudando para não trabalhar para gente retardada
                        <br /><br />
                        A minha falta de vontade de sociabilizar com pessoas que não estão comprometidas com sistemas aos quais elas alegam amar me impede de querer colaborar com os outros.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;