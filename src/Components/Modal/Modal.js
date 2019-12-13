import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

const TableTest = (props) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Availability</th>
					<th>Points</th>
				</tr>
			</thead>
			<tbody>
				<tr><td>Straws</td><td>Yes</td><td>-5</td></tr>
				<tr><td></td><td>Yes - Request Only</td><td>+5</td></tr>
				<tr><td></td><td>Yes - non-plastic material or reusable</td><td>+4</td></tr>
				<tr><td></td><td>Yes - reusable</td><td>+6</td></tr>
				<tr><td></td><td>No</td><td>+5</td></tr>

				<tr><td>Lids for Cups</td><td>Yes</td><td>-2</td></tr>
				<tr><td></td><td>Yes - Request Only</td><td>+2</td></tr>
				<tr><td></td><td>Yes - non-plastic material or reusable</td><td>+1</td></tr>
				<tr><td></td><td>Yes - reusable</td><td>+3</td></tr>
				<tr><td></td><td>No</td><td>+3</td></tr>

				<tr><td>Cutlery/ Utensils (forks, knives, spoons, chopsticks)</td><td>Washable / Reusable</td><td>+5</td></tr>
				<tr><td></td><td>Single Use - Plastic</td><td>-5</td></tr>
				<tr><td></td><td>Single Use - Renewable Material</td><td>+4</td></tr>

				<tr><td>Flatware (plates, bowls)</td><td>Washable / Reusable</td><td>+5</td></tr>
				<tr><td></td><td>Single Use - Plastic</td><td>-3</td></tr>
				<tr><td></td><td>Single Use - Styrofoam</td><td>-5</td></tr>
				<tr><td></td><td>Single Use - Paper / Renewable Material</td><td>+4</td></tr>

				<tr><td>Cups</td><td>Washable / Reusable</td><td>+5</td></tr>
				<tr><td></td><td>Single Use - Plastic</td><td>-3</td></tr>
				<tr><td></td><td>Single Use - Styrofoam</td><td>-5</td></tr>
				<tr><td></td><td>Single Use - Paper / Renewable Material</td><td>+4</td></tr>

				<tr><td>Leftover container (to-go after dining in)</td><td>Washable / Reusable</td><td>+5</td></tr>
				<tr><td></td><td>Single Use - Plastic</td><td>-3</td></tr>
				<tr><td></td><td>Single Use - Styrofoam</td><td>-5</td></tr>
				<tr><td></td><td>Single Use - Paper / Renewable Material</td><td>+4</td></tr>

				<tr><td>Napkins</td><td>Washable/ Reusable</td><td>+5</td></tr>
				<tr><td></td><td>Single Use - Paper / Renewable Material</td><td>+4</td></tr>

			</tbody>
		</Table>
	);
}

function ModalExample(props) {
	const {
		buttonLabel,
		className
	} = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<a href="#" onClick={toggle}>{buttonLabel}</a>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Scoring System</ModalHeader>
				<ModalBody>
					<p>Dine In</p>
					<TableTest />
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>Do Something</Button>{' '}
					<Button color="secondary" onClick={toggle}>Close</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}

export default ModalExample;