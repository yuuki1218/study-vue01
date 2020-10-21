import Vue from 'vue';
import Router from 'vue-router';
import UserForm from './views/UserForm';
import QuestionForm from './views/QuestionForm';
import ConsultationForm from './views/ConsultationForm';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UserForm,
    },
    {
      path: '/question-form',
      component: QuestionForm,
    },
    {
      path: '/consultation-form',
      component: ConsultationForm,
    },
  ],
});

export default router;
