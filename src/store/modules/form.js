const state = {
  gender: '',
  birthday: '',
  question1: '',
  question2: '',
  question3: '',
  consultation: '',
};

const getters = {
  gender: (state) => state.gender,
  birthday: (state) => state.birthday,
  question1: (state) => state.question1,
  question2: (state) => state.question2,
  question3: (state) => state.question3,
  consultation: (state) => state.consultation,
};

const mutations = {
  choiceGender(state, genderValue) {
    state.gender = genderValue;
  },
  choiceBirthday(state, birthdayValue) {
    state.birthday = birthdayValue;
  },
  choiceQuestion1(state, question1Value) {
    state.question1 = question1Value;
  },
  choiceQuestion2(state, question2Value) {
    state.question2 = question2Value;
  },
  choiceQuestion3(state, question3Value) {
    state.question3 = question3Value;
  },
  choiceConsultation(state, consultationValue) {
    state.consultation = consultationValue;
  },
};

const actions = {
  choiceGender({ commit }, genderValue) {
    commit('choiceGender', genderValue);
  },
  choiceBirthday({ commit }, birthdayValue) {
    commit('choiceBirthday', birthdayValue);
  },
  choiceQuestion1({ commit }, question1Value) {
    commit('choiceQuestion1', question1Value);
  },
  choiceQuestion2({ commit }, question2Value) {
    commit('choiceQuestion2', question2Value);
  },
  choiceQuestion3({ commit }, question3Value) {
    commit('choiceQuestion3', question3Value);
  },
  choiceConsultation({ commit }, consultationValue) {
    commit('choiceConsultation', consultationValue);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
