import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

import TeacherItem from '../../components/TeacherItem';

import Input from '../../components/Input';

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da semana"/>
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;