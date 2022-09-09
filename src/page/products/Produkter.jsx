import { Meta } from "../../comp/Meta.jsx";
import { CardsList } from "../../comp/cards/Cards.jsx";

export const Produkter = (props) => {
	return (
		<Meta title={props.title}>
			<CardsList></CardsList>
		</Meta>
	)
}