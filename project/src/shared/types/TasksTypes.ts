export type TodosDTO = {
userId: number,
id: number,
title: string,
completed: boolean,
}

export type FilterValue = 'all' | 'true' | 'false';