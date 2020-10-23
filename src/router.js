import Vue from 'vue';
import Router from 'vue-router';
import UserForm from './views/UserForm';
import QuestionForm from './views/QuestionForm';
import ConsultationForm from './views/ConsultationForm';
import ConfirmForm from './views/ConfirmForm';

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
    {
      path: '/confirm-form',
      component: ConfirmForm,
    },
  ],
});

export default router;
