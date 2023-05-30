interface IulArray {
	name: string;
	state: string;
	id: number;
}

export const ulArray: IulArray[] = [
	{
		name: "Все",
		state: "active",
		id: 0,
	},
	{
		name: "Мясные",
		state: "default",
		id: 1,
	},
	{
		name: "Вегетарианская",
		state: "default",
		id: 2,
	},
	{
		name: "Гриль",
		state: "default",
		id: 3,
	},
	{
		name: "Острые",
		state: "default",
		id: 4,
	},
	{
		name: "Закрытые",
		state: "default",
		id: 5,
	},
];