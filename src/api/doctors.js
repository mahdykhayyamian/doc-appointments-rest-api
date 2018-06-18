import resource from 'resource-router-middleware';
import doctors from '../models/doctors';

export default ({ config, db }) => resource({

	index({ params }, res) {
		res.json(doctors);
	},
});
