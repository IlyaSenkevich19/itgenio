import { task } from './module_tasks/task1';
import { task2 } from './module_tasks/task2';

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => task());
