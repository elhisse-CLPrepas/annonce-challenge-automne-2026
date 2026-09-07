import campaign from '../config/campaign.json';
import { applyCampaignLinks } from './page-links.js';

applyCampaignLinks(document, campaign, window.location.search);
