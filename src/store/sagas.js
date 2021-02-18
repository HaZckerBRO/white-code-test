import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_NEWS } from './news/types';
import { setNewsList } from './news/actions';

export function* sagaWatcher() {
  yield takeLatest(FETCH_NEWS, fetchNewsWorker)
}

function* fetchNewsWorker() {
  try {
    const payload = yield call(fetchNews);
    const timer = yield call(() => setTimeout(() => {}, 1500))
    yield put(setNewsList(payload));
  } catch (e) {
    throw new Error(e.message())
  }
}

async function fetchNews() {
  const responsePage1 = await fetch('https://reqres.in/api/users?page=1');
  const responsePage2 = await fetch('https://reqres.in/api/users?page=2');

  const jsonPage1 = await responsePage1.json();
  const jsonPage2 = await responsePage2.json();

  return [...jsonPage1.data, ...jsonPage2.data];
}