<div class="footer-column">	
	<h3><?php echo($content->contact[0]->communication[0]->title); ?></h3>
	<ul>
		<li id="val-contact-email"><span class="font-icon">m</span> <a href="mailto:<?php echo($content->contact[0]->communication[0]->email); ?>"><?php echo($content->contact[0]->communication[0]->email); ?></a></li>
		<li id="val-contact-phone"><?php echo($content->contact[0]->communication[0]->phonelabel); ?> <strong><?php echo($content->contact[0]->communication[0]->phone); ?></strong></li>
	</ul>
</div>
<div class="footer-column">	
	<h3><?php echo($content->contact[0]->location[0]->title); ?></h3>
	<ul>
		<li id="val-contact-address"><?php echo($content->contact[0]->location[0]->address); ?></li>
		<li id="val-contact-schedule"><?php echo($content->contact[0]->location[0]->hours); ?></li>
	</ul>	
</div>
<div class="footer-column">	
	<h3><?php echo($content->contact[0]->social[0]->title); ?></h3>
	<ul>
		<li id="val-contact-facebook"><span class="font-icon">g</span> <a href="<?php echo($content->contact[0]->social[0]->facebook); ?>"><?php echo($content->contact[0]->social[0]->facebook); ?></a></li>
		<li id="val-contact-twitter"><span class="font-icon">t</span> <a href="<?php echo($content->contact[0]->social[0]->twitter); ?>"><?php echo($content->contact[0]->social[0]->twitter); ?></a></li>
	</ul>
</div>