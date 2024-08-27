import { z } from "zod";

const war_in_darfur_tool = {
  name: "war_in_darfur",
  description: `Conflict name: War in Darfur
Start date: 2003
End date (if applicable): 2020

Description: Page: War in Darfur
Summary: The War in Darfur, also nicknamed the Land Cruiser War, was a major armed conflict in the Darfur region of Sudan that began in February 2003 when the Sudan Liberation Movement (SLM) and the Justice and Equality Movement (JEM) rebel groups began fighting against the government of Sudan, which they accused of oppressing Darfur's non-Arab population. The government responded to attacks by carrying out a campaign of ethnic cleansing against Darfur's non-Arabs. This resulted in the death of hundreds of thousands of civilians and the indictment of Sudan's president, Omar al-Bashir, for genocide, war crimes, and crimes against humanity by the International Criminal Court.
One side of the conflict is mainly composed of the Sudanese military, police, and the Janjaweed, a Sudanese militia group whose members are mostly recruited among Arabized indigenous Africans and a small number of Bedouin of the northern Rizeigat; the majority of other Arab groups in Darfur remained uninvolved.
The other side is made up of rebel groups, notably the SLM/A and the JEM, recruited primarily from the non-Arab Muslim Fur, Zaghawa, and Masalit ethnic groups. The African Union and the United Nations also have a joint peacekeeping mission in the region, named UNAMID. Although the Sudanese government publicly denies that it supported the Janjaweed, evidence supports claims that it provided financial assistance and weapons and coordinated joint attacks, many against civilians. Estimates of the number of human casualties range up to several hundred thousand dead, from either combat or starvation and disease. Mass displacements and coercive migrations forced millions into refugee camps or across the border, creating a humanitarian crisis. U.S. Secretary of State Colin Powell described the situation as a genocide or acts of genocide.
The Sudanese government and the JEM signed a ceasefire agreement in February 2010, with a tentative agreement to pursue peace. The JEM has the most to gain from the talks and could see semi-autonomy much like South Sudan. However, talks were disrupted by accusations that the Sudanese army launched raids and air strikes against a village, violating the Tolu agreement. The JEM, the largest rebel group in Darfur, vowed to boycott negotiations.
The August 2019 Draft Constitutional Declaration, signed by military and civilian representatives during the Sudanese Revolution, requires that a peace process leading to a peace agreement be made in Darfur and other regions of armed conflict in Sudan within the first six months of the 39-month transition period to democratic civilian government.
A comprehensive peace agreement was signed on 31 August 2020 between the Sudanese authorities and several rebel factions to end armed hostilities.


== Origins of the conflict ==

Darfur, Arabic for "the home of the Fur", was not a traditional part of the states organized along the upper Nile valley but instead organized as an independent sultanate in the 14th century. Owing to the migration of the Banu Hilal tribe in the 11th century AD, the peoples of the Nile valley became heavily Arabicized while the hinterlands remained closer to native Sudanese cultures. It was first annexed to Egyptian Sudan in 1875 and then surrendered by its governor Slatin Pasha to the Mahdist State in 1883. Following the Anglo-Egyptian victory in the Mahdist War, Sultan Ali Dinar was reinstated as a British client before being deposed by a 1916 expedition after he began supporting the Ottoman Empire amid the First World War. Subsequently, Darfur remained a part of the Anglo-Egyptian Sudan and the independent Republic of the Sudan.
There are several different explanations for the origins of the conflict that started in 2003. One explanation involves the land disputes between semi-nomadic livestock herders and those who practice sedentary agriculture. Water access has also been identified as a major source of the conflict. The Darfur crisis is also re`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the War in Darfur conflict.`
      ),
  }),
};
const iraq_war_tool = {
  name: "iraq_war",
  description: `Conflict name: Iraq War

*Part of the Iraqi conflict*
Start date: 2003
End date (if applicable): 2011

Description: Page: Iraq War
Summary: The Iraq War (Arabic: حرب العراق, romanized: ḥarb al-ʿirāq), sometimes called the Second Gulf War was a protracted armed conflict in Iraq from 2003 to 2011. It began with the invasion of Iraq by the United States-led coalition that overthrew the Ba'athist government of Saddam Hussein. The conflict continued for much of the next decade as an insurgency emerged to oppose the coalition forces and the post-invasion Iraqi government. US troops were officially withdrawn in 2011. 
The United States became re-involved in 2014 at the head of a new coalition. The insurgency and many dimensions of the armed conflict are ongoing. The invasion occurred as part of the George W. Bush administration's war on terror following the September 11 attacks in 2001 in the United States.
In October 2002, the United States Congress passed a joint resolution that granted Bush the power to use military force against the Iraqi government. The Iraq War officially began on 20 March 2003, when the US, joined by the United Kingdom, Australia, and Poland, launched a "shock and awe" bombing campaign. Shortly following the bombing campaign, US-led forces launched a ground invasion of Iraq. Iraqi forces were quickly overwhelmed as coalition forces swept through the country. The invasion led to the collapse of the Ba'athist government; Saddam Hussein was captured during Operation Red Dawn in December of that same year and executed three years later. 
The power vacuum following Saddam's demise, and mismanagement by the Coalition Provisional Authority, led to widespread civil war between Shias and Sunnis, as well as a lengthy insurgency against coalition forces. The United States responded with a build-up of 170,000 troops in 2007. This build-up gave greater control to Iraq's government and military while also giving the United States a greater say in the postwar reconstruction of Iraq. In 2008, President Bush agreed to a withdrawal of all US combat troops from Iraq. The withdrawal was completed under Barack Obama in December 2011.
The United States based most of its rationale for the invasion on claims that Iraq had a weapons of mass destruction (WMD) program and that Saddam Hussein was supporting al-Qaeda. The US government had also alleged that Al-Qaeda was secretly co-operating with Iraq to build weapons of mass destruction and argued that Iraq posed a threat to the United States and its allies. However, in 2004, the 9/11 Commission concluded that there was no evidence of any relationship between Saddam's regime and al-Qaeda. No stockpiles of WMDs or active WMD program were ever found in Iraq. Bush administration officials had also made numerous claims about a purported Saddam–al-Qaeda relationship and WMDs that were based on insufficient evidence rejected by intelligence officials. The rationale for the Iraq war faced heavy criticism both domestically and internationally. Kofi Annan, then the Secretary-General of the United Nations, called the invasion illegal under international law, as it had violated the UN Charter. The 2016 Chilcot Report, a British inquiry into the United Kingdom's decision to go to war, concluded that not every peaceful alternative had been examined, that the UK and US had undermined the United Nations Security Council in the process of declaring war, that the process of identification for a legal basis of war was "far from satisfactory", and that, these conclusions taken together, the war was unnecessary. When interrogated by the FBI, Saddam Hussein confirmed that Iraq did not have weapons of mass destruction prior to the US invasion, although the Iraq Survey Group did find that Saddam had the aim of WMD proliferation and maintained the laboratories and scientists necessary for WMD development.
In 2005, Iraq held multi-party elections. Nouri al-Maliki became Prime Minister in 2006 and remained in office until 2014. The al-Maliki government enacted policies that alienated the country's previously dominant Sunni min`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Iraq War

*Part of the Iraqi conflict* conflict.`
    ),
  }),
};
const sinaloa_cartelgulf_cartel_conflict_tool = {
  name: "sinaloa_cartelgulf_cartel_conflict",
  description: `Conflict name: Sinaloa Cartel–Gulf Cartel conflict

*Part of the Mexican drug war*
Start date: 2004
End date (if applicable): 2010

Description: Page: Gulf Cartel
Summary: The Gulf Cartel (Spanish: Cártel del Golfo, Golfos, or CDG) is a criminal syndicate and drug trafficking organization in Mexico, and perhaps one of the oldest organized crime groups in the country. It is currently based in Matamoros, Tamaulipas, directly across the U.S. border from Brownsville, Texas.
Their network is international, and is believed to have dealings with crime groups in Europe, West Africa, Asia, Central America, South America, and the United States. Besides drug trafficking, the Gulf Cartel operates through protection rackets, assassinations, extortions, kidnappings, and other criminal activities. The members of the Gulf Cartel are known for intimidating the population and for being particularly violent.
Although its founder Juan Nepomuceno Guerra smuggled alcohol in large quantities to the United States during the Prohibition era, and heroin for over 40 years, it was not until the 1980s that the cartel was shifted to trafficking cocaine, methamphetamine and marijuana under the command of Juan Nepomuceno Guerra and Juan García Ábrego.


== History ==


=== Foundation: 1930s ===
The Gulf Cartel, a drug cartel based in Matamoros, Tamaulipas, Mexico, was founded in the 1930s by Juan Nepomuceno Guerra. Originally known as the Matamoros Cartel (Spanish: Cártel de Matamoros), the Gulf Cartel initially smuggled alcohol and other illegal goods into the U.S. Once the Prohibition era ended, the criminal group controlled gambling houses, prostitution rings, a car theft network, and other illegal smuggling. It grew significantly in the 1970s under the leadership of kingpin Juan García Ábrego.


=== García Ábrego era (1980s–1990s) ===
By the 1980s, García Ábrego began incorporating cocaine into the drug trafficking operations and started to have the upper hand on what was now considered the Gulf Cartel, the greatest criminal dynasty in the US-Mexico border. By negotiating with the Cali Cartel, García Ábrego was able to secure 50% of the shipment out of Colombia as payment for delivery, instead of the US$1,500 per kilogram they were previously receiving. This renegotiation, however, forced Garcia Ábrego to guarantee the product's arrival from Colombia to its destination. Instead, he created warehouses along the Mexican's northern border to preserve hundreds of tons of cocaine; this allowed him to create a new distribution network and increase his political influence. In addition to trafficking drugs, García Ábrego would ship cash to be laundered, in the millions. Around 1994, it was estimated that the Gulf Cartel handled as much as "one-third of all cocaine shipments" into the United States from the Cali Cartel suppliers. During the 1990s, the PGR (Procuraduría General de la República), the Mexican attorney general's office, estimated that the Gulf Cartel was "worth over US$10 billion."


==== Corruption in the United States ====
García Ábrego's ties extended beyond the Mexican government corruption and into the United States. With the arrest of one of García Ábrego's traffickers, Juan Antonio Ortiz, it became known the cartel would ship tons of cocaine in the United States Immigration and Naturalization Service (INS) buses between the years of 1986 to 1990. The buses made great transportation, as Antonio Ortiz noted since they were never stopped at the border.
It also became known that, in addition to the INS bus scam, García Ábrego had a "special deal" with members of the Texas National Guard who would truck tons of cocaine and marijuana from South Texas to Houston for the cartel.
Garcia Abrego's reach became known when a United States Federal Bureau of Investigation (FBI) agent named Claude de la O, in 1986, stated in testimony against García Ábrego that he received over US$100,000 in bribes and had leaked information that could have endangered an FBI informant as well as Mexican journalists. In 1989 Claude was removed from the case for unknown reasons, retiring a year later. García Ábrego brib`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Sinaloa Cartel–Gulf Cartel conflict

*Part of the Mexican drug war* conflict.`
    ),
  }),
};
const south_thailand_insurgency_tool = {
  name: "south_thailand_insurgency",
  description: `Conflict name: South Thailand insurgency
Start date: 2004
End date (if applicable): Ongoing

Description: Page: South Thailand insurgency
Summary: The South Thailand insurgency (Thai: ความไม่สงบในชายแดนภาคใต้ของประเทศไทย; Malay: Pemberontakan di Selatan Thailand) is an ongoing conflict centered in southern Thailand. It originated in 1948 as an ethnic and religious separatist insurgency in the historical Malay Patani Region, made up of the three southernmost provinces of Thailand and parts of a fourth, but has become more complex and increasingly violent since the early 2000s from drug cartels, oil smuggling networks, and sometimes pirate raids.
The former Sultanate of Pattani, which included the southern Thai provinces of Pattani (Patani), Yala (Jala), Narathiwat (Menara)—also known as the three Southern Border Provinces (SBP)—as well as neighbouring parts of Songkhla Province (Singgora), and the northeastern part of Malaysia (Kelantan), was conquered by the Kingdom of Siam in 1785 and, except for Kelantan, has been governed by Thailand ever since.
Although low-level separatist violence had occurred in the region for decades, the campaign escalated after 2001, with a recrudescence in 2004, and has occasionally spilled over into other provinces. Incidents blamed on southern insurgents have occurred in Bangkok and Phuket.
In July 2005, Prime Minister Thaksin Shinawatra assumed wide-ranging emergency powers to deal with the southern violence, but the insurgency escalated further. On 19 September 2006, a military junta ousted Thaksin Shinawatra in a coup. The junta implemented a major policy shift by replacing Thaksin's earlier approach with a campaign to win over the "hearts and minds" of the insurgents. Despite little progress in curbing the violence, the junta declared that security was improving and that peace would come to the region by 2008. By March 2008, however, the death toll surpassed 3,000.
During the Democrat-led government of Abhisit Vejjajiva, Foreign Minister Kasit Piromya noted a "sense of optimism" and said that he was confident of bringing peace to the region in 2010. But by the end of 2010 insurgency-related violence had increased, confounding the government's optimism. Finally in March 2011, the government conceded that violence was increasing and could not be solved in a few months.
Local leaders have persistently demanded at least a level of autonomy from Thailand for the Patani region and some of the separatist insurgent movements have made a series of prior demands before engaging in peace talks and negotiations. However, these groups have been largely sidelined by the Barisan Revolusi Nasional-Koordinasi (BRN-C), the group currently spearheading the insurgency. It sees no reason for negotiations and is against talks with other insurgent groups. The BRN-C has as its immediate aim to make southern Thailand ungovernable and it has largely been successful.
Estimates of the strength of the insurgency vary greatly. In 2004, General Pallop Pinmanee claimed that there were only 500 hardcore jihadists. Other estimates say there as many as 15,000 armed insurgents. Around 2004, some Thai analysts believed that foreign Islamic terrorist groups were infiltrating the area, and that foreign funds and arms were being brought in, though again, such claims were balanced by an equally large body of opinion suggesting this remains a distinctly local conflict.
Over 6,500 people died and almost 12,000 were injured between 2004 and 2015 in a formerly ethnic separatist insurgency, which has currently been taken over by hard-line jihadis and pitted them against both the Thai-speaking Buddhist minority and local Muslims who have a moderate approach or who support the Thai government.


== Background of the insurgency ==


=== Historical background ===
Despite the ethnic affinity of the people of the Patani region with their Malay neighbours to the south, the old Patani Kingdom was led by sultans who historically preferred to pay tribute to the distant Siamese kings in Bangkok. For many centuries the King of Siam restricted himself to `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the South Thailand insurgency conflict.`
      ),
  }),
};
const insurgency_in_khyber_pakhtunkhwa_tool = {
  name: "insurgency_in_khyber_pakhtunkhwa",
  description: `Conflict name: Insurgency in Khyber Pakhtunkhwa
Start date: 2004
End date (if applicable): Ongoing

Description: Page: Insurgency in Khyber Pakhtunkhwa
Summary: The insurgency in Khyber Pakhtunkhwa, also known as the War in North-West Pakistan or Pakistan's war on terror, is an ongoing armed conflict involving Pakistan and Islamist militant groups such as the Tehrik-i-Taliban Pakistan (TTP), Jundallah, Lashkar-e-Islam (LeI), TNSM, al-Qaeda, and their Central Asian allies such as the ISIL–Khorasan (ISIL), Islamic Movement of Uzbekistan, East Turkistan Movement, Emirate of Caucasus, and elements of organized crime. Formerly a war, it is now a low-level insurgency as of 2017.
The armed conflict began in 2004 when tensions rooted in the Pakistan Army's search for al-Qaeda fighters in Pakistan's mountainous Waziristan area (in the Federally Administered Tribal Areas) escalated into armed resistance. Pakistan's actions were presented as its contribution to the U.S. War on terror. The al-Qaeda terrorists fled Afghanistan seek refuge in the bordering Federally Administered Tribal Areas. Pakistan had already joined US led War on terror after 9/11 attacks under the Mussharaf administration. However, after the US invasion of Afghanistan in 2001–2002, Al-Qaeda and its Taliban patrons crossed over Pakistan-Afghanistan border to seek refuge in the Federally Administered Tribal Areas, Pakistan. Resultantly, militants established control over seven tribal agencies of FATA.
Pakistan Army under the Pervez Musharraf administration launched operations with Battle of Wanna to hunt down al-Qaeda fighters. However, Pakistan security forces did not target Afghan Taliban as Taliban were not responsible for the twin-tower attacks. Subsequently, Pakistan Army failed to achieve its desired results. Pakistan Army's failure resulted in the Waziristan Accord which is considered to be failure on the part of army and Pervez Musharraf as the accord ceded FATA territories to the militants.
The situation in FATA further complicated with the emergence of Tehreek-Taliban Pakistan (TTP). Local Pakistani jihadi fighters that have previously fought Soviets, with support from Central Asian militant groups,  Arab fighters of al-Qaeda, in 2007 formed TTP. The foreign militants were joined by Pakistani non-military veterans of the Afghan War to the west, which subsequently established the TTP and other militant umbrella organisations, such as Lashkar-e-Islam.
The TTP, beside FATA, managed to capture four settle districts of North-Western Frontier Province (modern day Khyber-Pakhtunkhwa). The districts such as Buner, Dir, Shangla and Swat fell out of writ of Government of Pakistan by 2007 as militants flashed into mainland of Khyber-Pakhtunkhwa further expanding their influence beyond peripheries of FATA.
The TTP emerged as one of the most lethal group aiming to overthrow Government of Pakistan in Islamabad and replace it with a Taliban-style government as it denounced Pakistan alliance with US against the principals of Islam. TTP declared its jihad was legitimate as Pakistan was siding with US to attack a Muslim nation Afghanistan.
The insurgency turned into a critical issue for Pakistan when the Pakistan Army held a siege on the mosque of Lal-Masjid Islamabad to free foreigners taken hostage by the militants. Naming this operation as an attack on the "House of Allah", TTP declared Pakistan Army as an agent of Western powers and started a bloody campaigns of suicide bombings throughout the country. Due to the Lal-Masjid Operation number of suicide attacks jumped from 10 in 2006 to 61 in 2007. Pakistan Armed Forces also bore the burnt of number of terrorist attacks such as PNS Mehran attack, Kamra Airbase attack, and GHQ Rawalpindi attack.
The deteriorated law and order situation saw assassination of former prime minister Benazir Bhutto in 2007 which was also claimed by the TTP. The assassination of Benazir Bhutto led to the demise of President Pervez Musharraf regime.
Pakistan with the exit of Pervez Musharraf got a fresh civil-military setup under the President Asif Zardari-led go`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Insurgency in Khyber Pakhtunkhwa conflict.`
      ),
  }),
};
const iranpjak_conflict_tool = {
  name: "iranpjak_conflict",
  description: `Conflict name: Iran–PJAK conflict

*Part of the Kurdish separatism in Iran*
Start date: 2004
End date (if applicable): Ongoing

Description: Page: Iran–PJAK conflict
Summary: The Iran–PJAK conflict is an armed conflict between the Islamic Republic of Iran and Kurdish rebels of the Kurdistan Free Life Party (PJAK), which began in 2004. The group has carried out numerous attacks in the Kurdistan Province of Iran and provinces of Western Iran. PJAK is closely affiliated with the militant Kurdistan Workers' Party (PKK), the primary opponent of the Republic of Turkey in the Kurdish–Turkish conflict. PJAK has been designated as a terrorist organization by Iran, Japan, Turkey, and the United States.
Following massive clashes in summer 2011, a cease-fire was declared between the parties, with Iran claiming victory and PJAK allegedly ending all armed operations as of 29 September 2011. Since then, several violent incidents have occurred, including the December 2011 Baneh clash and another clash in April 2012. In 2013, the confrontations became more frequent, including clashes in May, the August 2013 Sardasht clash and more events in October. The heavy 2016 West Iran clashes took place on 19 April.
As with the PKK, PJAK leaders say their long-term goals are to establish an autonomous Kurdish region within the Iranian state. It is mainly focused on replacing Iran's current form of government with a democratic and federal government.


== Background ==

Since the Iranian Revolution, there has been an ongoing conflict between Iran's central government and Kurdish political movements rooted in the predominantly Kurdish region of western Iran. The level of violence has ebbed and flowed with peaks of serious conflict in 1979, the early eighties and the early nineties.
Kurdish casualties are estimated by the Kurdish Democratic Party of Iran (KDPI) at more than 30,000 civilian dead in addition to 4,000 Kurdish fighters. Along with the dead, there have been tens of thousands of people imprisoned; hundreds of villages destroyed and hundreds of thousands of people displaced. The local economy of an already under-developed region has been severely damaged by the conflict, as of course has the Iranian economy as a whole.


=== Founding of PJAK ===

The exact history of PJAK is widely disputed. Turkey and Iran claim that PJAK is no more than an offshoot of the Kurdistan Workers' Party (PKK). According to some sources, members of the PKK founded the PJAK in 2004 as an Iranian equivalent to their leftist-nationalist insurgency against the Turkish government.
According to founding members of PJAK, however, the group began in Iran around 1997 as an entirely peaceful student-based human rights movement. The group was inspired by the success of Iraq's Kurdish autonomous region and by the PKK's struggle in Turkey. Discouraged by the failure of previous Kurdish revolts, however, PJAK's leaders initially worked only to maintain and build a Kurdish national identity. After a series of government crackdowns against Kurdish activists and intellectuals, the group's leadership moved to the safety of Iraqi Kurdistan in 1999. There they settled in the area controlled by the PKK on the slopes of Mount Qandil—less than 16 kilometres (10 mi) from the Iranian border. Once established at Qandil and operating under the PKK's security umbrella, PJAK adopted many of the political ideas and military strategies of jailed PKK leader Abdullah Ocalan, whose theories had initially inspired PJAK's founders while still in Iran. The PKK's ideological influence also transformed PJAK from a civil rights movement to a more ambitious and multi-directional independence movement, aided by the transfer of many seasoned PKK fighters of Iranian origin into PJAK.


=== Abductions of Iranian security forces ===
PJAK's leaders have twice kidnapped groups of Iranian soldiers in 2003 and 2004. In both instances Iranian soldiers were released unharmed after being tried and acquitted for crimes against the Kurdish people by ad hoc PJAK courts in Iranian Kurdistan.


== Timeline ==


=== 2004 ===
The PJAK group's first armed attack took `,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Iran–PJAK conflict

*Part of the Kurdish separatism in Iran* conflict.`
    ),
  }),
};
const conflict_in_the_niger_delta_tool = {
  name: "conflict_in_the_niger_delta",
  description: `Conflict name: Conflict in the Niger Delta
Start date: 2004
End date (if applicable): Ongoing

Description: Page: Conflict in the Niger Delta
Summary: The current conflict in the Niger Delta first arose in the early 1990s over tensions between foreign oil corporations and a number of the Niger Delta's minority ethnic groups who feel they are being exploited, particularly the Ogoni and the Ijaw. Ethnic and political unrest continued throughout the 1990s despite the return to democracy and the election of the Obasanjo government in 1999. Struggle for oil wealth and environmental harm over its impacts has fueled violence between ethnic groups, causing the militarization of nearly the entire region by ethnic militia groups, Nigerian military and police forces, notably the Nigerian Mobile Police. The violence has contributed to Nigeria's ongoing energy supply crisis by discouraging foreign investment in new power generation plants in the region.
From 2004 on, violence also hit the oil industry with piracy and kidnappings. In 2009, a presidential amnesty program accompanied with support and training of ex-militants proved to be a success. Thus until 2011, victims of crimes were fearful of seeking justice for crimes committed against them because of a failure to prosecute those responsible for human rights abuses.


== Background ==

Nigeria, after nearly four decades of oil production, had by the early 1980s become almost completely economically dependent on petroleum extraction, which at the time generated 25% of its GDP. This portion has since risen to 60%, as of 2008. Despite the vast wealth created by petroleum, the benefits have been slow to trickle down to the majority of the population, who since the 1960s have increasingly been forced to abandon their traditional agricultural practices. Annual production of both cash and food crops dropped significantly in the later decades of the 20th century. Cocoa production dropped by 43% for example; Nigeria was the world's largest cocoa exporter in 1960. Rubber production dropped by 29%, cotton by 65%, and groundnuts by 64%. While many skilled, well-paid Nigerians have been employed by oil corporations, the majority of Nigerians and most especially the people of the Niger Delta states and the far north have become poorer since the 1960s.
The Delta region has a steadily growing population estimated at more than 30 million people in 2005, and accounts for more than 23% of Nigeria's total population. The population density is also among the highest in the world, with 265 people per square kilometre, according to the Niger Delta Development Commission. This population is expanding at a rapid 3% per year and the oil capital, Port Harcourt, and other large towns are also growing quickly. Poverty and urbanization in Nigeria are growing, and official corruption is considered a fact of life. The resulting scenario is one in which urbanization does not bring accompanying economic growth to provide jobs.
Some Nigerian scholars state that the Niger Delta conflict has roots in a long history of exploitation and dispossession of the region beginning during the British imperial era: first for slaves during the 17th and 18th century, later for palm oil during the 19th century, and finally for petroleum after Nigerian independence. Conflict has also resulted from artificial political borders drawn during British rule that resulted in nearly 300 ethnic groups being arbitrarily consolidated into a single nation-state.


=== Ogoni crisis ===

Ogoniland is a 1,050-square-kilometre (404-square-mile) region in the southeast of the Niger Delta basin. Economically viable petroleum was discovered in Ogoniland in 1957, just one year after the discovery of Nigeria's first commercial petroleum deposit. Royal Dutch Shell and Chevron Corporation set up shop there throughout the next two decades. The Ogoni people, a minority ethnic group of about half a million people who call Ogoniland home, and other ethnic groups in the region attest that during this time, the government began forcing them to abandon their land to oil c`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Conflict in the Niger Delta conflict.`
      ),
  }),
};
const kivu_conflict_tool = {
  name: "kivu_conflict",
  description: `Conflict name: Kivu conflict
Start date: 2004
End date (if applicable): Ongoing

Description: Page: Kivu conflict
Summary: The Kivu conflict is an umbrella term for a series of protracted armed conflicts in the North Kivu and South Kivu provinces in the eastern Democratic Republic of the Congo which have occurred since the end of the Second Congo War. Including neighboring Ituri province, there are more than 120 different armed groups active in the eastern Democratic Republic of Congo. Currently, some of the most active rebel groups include the Allied Democratic Forces, the Cooperative for the Development of the Congo, the March 23 Movement, and many local Mai Mai militias. In addition to rebel groups and the governmental FARDC troops, a number of national and international organizations have intervened militarily in the conflict, including the United Nations force known as MONUSCO, and an East African Community regional force.
Conflict began in 2004 in the eastern Congo as an armed conflict between the military of the Democratic Republic of the Congo (FARDC) and the Hutu Power group Democratic Forces for the Liberation of Rwanda (FDLR) in the Democratic Republic of the Congo. It has broadly consisted of three phases, the third of which is an ongoing conflict. Prior to March 2009, the main combatant group against the FARDC was the National Congress for the Defence of the People (CNDP). Following the cessation of hostilities between these two forces, rebel Tutsi forces, formerly under the command of Laurent Nkunda, became the dominant opposition to the government forces.
The United Nations Mission in the Democratic Republic of Congo (MONUSCO) has played a large role in the conflict. With 21,000 soldiers in the force, the Kivu conflict constitutes the largest peacekeeping mission currently in operation. In total, 93 peacekeepers have died in the region, with 15 dying in a large-scale attack by the Allied Democratic Forces, in North Kivu in December 2017. The peacekeeping force seeks to prevent escalation of force in the conflict, and minimise human rights abuses like sexual assault and the use of child soldiers in the conflict.
CNDP was sympathetic to the Banyamulenge in Eastern Congo, an ethnic Tutsi group, and to the Tutsi-dominated government of neighboring Rwanda. It was opposed by the FDLR, by the FARDC, and by United Nations forces.
In July 2024, an United Nations report pointed to Uganda's links with the M23 and accused the Democratic Republic of Congo of arming these groups, which are engaged in a wide range of abuses in the region: recruitment of child soldiers, violences against the civilian population, looting, illegal mining and corruption. 


== Background ==

Laurent Nkunda was an officer in the rebel Rally for Congolese Democracy (RCD), Goma faction in the Second Congo War (1998–2002). The rebel group, backed by Rwanda, was seeking to overthrow then Congolese president Laurent-Désiré Kabila. In 2003, when that war officially ended, Nkunda joined the new integrated national army of the transitional government of Congo as a colonel and was promoted to general in 2004. He soon rejected the authority of the government and retreated with some of RCD-Goma troops to the Masisi forests in Nord Kivu.
Global Witness says that Western companies sourcing minerals were buying them from traders who finance both rebel and government troops. Minerals such as cassiterite, gold, or coltan, which is used for electronic equipment and cell phones, are an important export for the Congo. A UN resolution stated that anyone supporting illegal Congolese armed groups through illicit trade of natural resources should be subjected to sanctions including travel restrictions and an assets freeze. The extent of the problem is not known.


== History ==


=== FDLR insurgency ===
The FDLR counts among its number the original members of the Interahamwe that led the 1994 Rwandan genocide. It received extensive backing from, and cooperation from, the government of Congolese President Laurent-Désiré Kabila, who used the FDLR as a proxy force a`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Kivu conflict conflict.`
      ),
  }),
};
const houthi_insurgency_in_yemen_tool = {
  name: "houthi_insurgency_in_yemen",
  description: `Conflict name: Houthi insurgency in Yemen
Start date: 2004
End date (if applicable): 2014

Description: Page: Houthi insurgency
Summary: The Houthi insurgency, also known as the Houthi rebellion, the Sa'dah War, or the Sa'dah conflict, was a military rebellion pitting Zaidi Shia Houthis (though the movement also includes Sunnis) against the Yemeni military that began in Northern Yemen and has since escalated into a full-scale civil war. The conflict was sparked in 2004 by the government's attempt to arrest Hussein Badreddin al-Houthi, a Zaidi religious leader of the Houthis and a former parliamentarian on whose head the government had placed a $55,000 bounty.
Initially, most of the fighting took place in Sa'dah Governorate in northwestern Yemen, but some of the fighting spread to neighbouring governorates Hajjah, 'Amran, al-Jawf and the Saudi province of Jizan. After the Houthi takeover of the capital city Sanaa in late 2014, the insurgency became a full-blown civil war with a major Saudi-led intervention in Yemen beginning in March 2015.


== Background ==
In 1962, a revolution in North Yemen ended over 1,000 years of rule by Zaidi Imams, who claimed descent from the Hashemites. Sa'dah, in the north, was their main stronghold and since their fall from power the region was largely ignored economically and remains underdeveloped. The Yemeni government has little authority in Sa'dah.
During Yemen's 1994 civil war, the Wahhabis, an Islamic group adhering to a strict version of Sunni Islam found in neighboring Saudi Arabia, helped the government in its fight against the secessionist south. Zaidis complain the government has subsequently allowed the Wahhabis too strong a voice in Yemen. Saudi Arabia, for its part, worries that strife instigated by the Zaidi sect so close to Yemen's border with Saudi Arabia could stir up groups in Saudi Arabia itself.
The conflict was sparked in 2004 by the government's attempt to arrest Hussein Badreddin al-Houthi, a Zaidi religious leader of the Houthis and a former parliamentarian on whose head the government had placed a $55,000 bounty.
Hussein Badreddin al-Houthi movement accused Ali Abdullah Saleh of massive financial corruption and criticized him for being backed by Saudi Arabia and United States at the expense of the Yemeni people and Yemen's sovereignty.


== Motives and objectives ==
When armed conflict erupted between the Yemeni government and Houthis for the first time in 2004, the then Yemeni president accused Houthis and other Islamic opposition parties of trying to overthrow the government and the republican system. As such, the Yemeni government alleged that the Houthis were seeking to overthrow it and to implement Zaidi religious law.
Houthi leaders for their part rejected the accusation, stating that they had never rejected the president or the republican system but were only defending themselves against government attacks on their community. The Houthis said that they were "defending their community against discrimination" and government aggression. The Yemeni government has accused Iran of directing and financing the insurgency.
According to a February 2015 Newsweek report, Houthis are fighting "for things that all Yemenis crave: government accountability, the end to corruption, regular utilities, fair fuel prices, job opportunities for ordinary Yemenis and the end of Western influence."
In an interview with the Yemen Times, Hussein Al-Bukhari, a Houthi insider, said that the Houthis' preferred political system is a republic with a system of elections where women can also hold political positions and furthering that they do not seek to form a cleric-led government after the model of the Islamic Republic of Iran for "we cannot apply this system in Yemen because the followers of the Shafi doctrine are bigger in number than the Zaydis."


== Timeline ==


=== Phase 1: June–September 2004 ===
From June to August 2004, government troops battled supporters of al-Houthi in the north. Estimates of the dead range from 500 to 1,000. On 10 September, Yemeni forces killed al-Houthi. Since then`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Houthi insurgency in Yemen conflict.`
      ),
  }),
};
const central_african_republic_bush_war_tool = {
  name: "central_african_republic_bush_war",
  description: `Conflict name: Central African Republic Bush War
Start date: 2004
End date (if applicable): 2007

Description: Page: Central African Republic Bush War
Summary: The Central African Republic Bush War was a civil war in the Central African Republic which lasted from 2004 to 2007 between Union of Democratic Forces for Unity (UFDR) rebels and government forces.  The rebellion began after François Bozizé seized the nation's presidency in 2003. Actual fighting began in 2004. Around 10,000 people were displaced because of the civil unrest.
The rebellion consisted of multiple rebel groups, several of which were of very small size and founded only towards the end of the conflict. Apart from the UFDR, the conflict included the People's Army for the Restoration of Democracy (CAR) (APRD), Groupe d'action patriotique pour la liberation de Centrafrique (GAPLC), the Movement of Central African Liberators for Justice (MLCJ), the Front démocratique Centrafricain (FDC), and Union of Republican Forces (UFR).
A number of peace agreements have been signed to resolve the conflict between 2007 and 2012. The most important agreement, the Global Peace Accord (signed in Libreville, Gabon, on 21 June 2008), was first signed by the ARPD, UFDR, and FDPC groups. The agreement granted amnesty for any acts perpetrated against the state prior to the agreement, and called for a disarmament and demobilization process to integrate former rebels into society and the regular CAR armed forces.
Other rebel groups signed on to the agreement later, or signed similar agreements with the government (e.g. UFR on 15 December 2008). The only major group not to sign an agreement at the time was the CPJP, which continued its activities and signed a peace agreement with the government on 25 August 2012.


== Timeline ==


=== 2004 ===
In November 2004, at least 20 people were killed in a raid on the remote town of Birao in the north-east of the Central African Republic.


=== 2006 ===

Thousands of people marched into the capital of the CAR, Bangui, on November 8, and pleaded for the government's troops to confront the UFDR. Twenty members of the government were killed, and only three of the rebels died in this attack.
It was also confirmed that the UFDR had gained access to several armored vehicles, including a plane that landed in Birao earlier to bring supplies.
On November 13, 2006, a third town in northern CAR, Sam Ouandja, was seized by the UFDR. Just three days later, claims stated that a fourth town, Ouadda, had been captured by the rebels. When the 20,000 residents of the city heard that the UFDR was going to capture the town, between 5,000 and 10,000 of those people fled, mostly to the neighboring cities of Bambari and Bangui.
The UFDR were reportedly planning to take over the city of Bria, though rumours also supported that an additional attack may occur in Ndele. In December 2006, Chadian troops in three army trucks attacked Bémal, located next to Bétoko, firing randomly at the population and taking 32 cows from the village, as well as farming implements and sacks of peanuts.


=== 2007 ===
The FDPC's Abdoulaye Miskine signed a peace agreement with the government on 2 February 2007 in Syrte. The agreement called for a cessation of hostilities, the billeting of FDPC fighters and their integration with FACA, the liberation of political prisoners, and the integration of FDPC into government.
After French Mirage jets bombed the UFDR headquarters in Birao, the UFDR and the CAR government signed the Birao Peace Agreement on 1 April 2007. This agreement provides for an amnesty for the UFDR, its recognition as a political party, and the integration of its fighters into the national army. The remaining rebel groups continued fighting the government.
In August 2007 Miskine was appointed as a presidential adviser. Miskine rejected the appointment, saying that the government had violated the Syrte agreement, in particular that it would fail to protect him from prosecution by the International Criminal Court. The Court had started investigating numerous war crimes that allegedly occurre`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Central African Republic Bush War conflict.`
      ),
  }),
};
const sistan_and_baluchestan_insurgency_tool = {
  name: "sistan_and_baluchestan_insurgency",
  description: `Conflict name: Sistan and Baluchestan insurgency

*Part of the Balochistan conflict*
Start date: 2004
End date (if applicable): Ongoing

Description: Page: Sistan and Baluchestan insurgency
Summary: The Sistan and Baluchestan insurgency is an ongoing low-intensity asymmetric conflict in Sistan and Baluchestan Province between Iran and several Baloch Sunni militant organizations designated as terrorist organizations by the Iranian government. It began in 2004 and is part of the wider Balochistan conflict.


== Background ==


=== Motivations of the insurgent groups ===
Analysts believe that the aim of insurgents may differ from separatism to religious motivations, but they are not entirely clear. The leaders of the groups have maintained different positions: from Baloch nationalism to Salafi jihadism.


=== Belligerents ===


==== Iran ====
Islamic Republic of Iran Army and Islamic Revolutionary Guard Corps, responsible for both military and security actions
Ministry of Intelligence, doing intelligence operations
Border Guard Command, engaging border conflicts with insurgent groups


==== Baloch rebels ====
Jundallah: founded in 2002, was active since 2005, carrying out armed assaults against Iranian armed forces as well as civilians. Since arrest and execution of its leader Abdolmalek Rigi in 2010, they were responsible for a few bombings in 2011 under command of Muhammad Dhahir Baluch.
Jaish ul-Adl: founded in 2012 by former Jundallah members, there is very little known about the group. They are led by Salahuddin Farooqui who has opposed Iranian support for Syria in the Syrian Civil War. They have claimed responsibility for dozens of operations since 2013.
Ansar Al-Furqan: founded by December 2013 merger of Harakat Ansar and Pashton group Hizb Al-Furqan. They are linked to Al-Nusra Front and are led by Sheikh Abu-Hafs al-Baloochi.


== Timeline ==


=== 2005 ===
December- A bomb exploded near a car carrying then president Mahmoud Ahmadinejad during an ambush in the province, resulting in the death of one of his bodyguards and another individual.


=== 2007 ===
14 February – A car bomb detonated in front of a bus transporting members of Iran's revolutionary guard corps in Zehedan reportedly resulting in the death of 11 and injury of 34 others.


=== 2019 ===
29 January – A double-bombing lightly wounded three police officers in Zahedan, the capital of Sistan and Balochistan province. Jaysh al-Adl claimed responsibility.
2 February – An IRGC soldier was killed and five others wounded in an insurgent attack on a Basij base in Nik Shahr city. Jaysh al-Adl claimed responsibility for the attack. According to Arab news, the attack was carried out by two people who climbed the walls of the Basij paramilitary base and started shooting.
13 February – A suicide car bomb attack targeting a bus carrying IRGC personnel on the Khash-Zahedan road killed at least 27 soldiers and wounded 13 more. Jaysh al-Adl claimed responsibility for the attack. According to Haaretz, the head of IRGC Maj. Mohammad Ali Jafari stated, without providing proof, that Israel gave the Emirates and Saudi Arabia the go ahead to conduct the attack.
21 March – Pakistan announced that it had rescued four Iranian soldiers kidnapped by the Jaysh al-Adl group last year. It did not announce any other details. Jaysh al-Adl had kidnapped 12 Iranian soldiers in October and later released five. Following the announcement, there were still three Iranian soldiers held by the group.
20 July – Two members of the IRGC were killed and another two wounded late at night during a confrontation with gunmen near the border with Pakistan. The confrontation occurred in Keshtegan area of Saravan County, province of Sistan and Baluchestan.


=== 2020 ===
30 June – Jaysh al-Adl claimed responsibility for a roadside IED blast that injured an IRGC commander on a road in Sistan and Balochistan Province.
5 August – Four police officers were injured when a sound bomb exploded next to their vehicle in Zahedan, capital of Sistan and Balochistan Province, Iran.
29 September – Three Basij members were killed and another was wounded in a drive-by sho`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Sistan and Baluchestan insurgency

*Part of the Balochistan conflict* conflict.`
    ),
  }),
};
const _2005_bangladesh_india_border_clash_tool = {
  name: "_2005_bangladesh_india_border_clash",
  description: `Conflict name: 2005 Bangladesh India border clash
Start date: 2005
End date (if applicable): 2005

Description: Page: 2005 Bangladesh-India border clash
Summary: The 2005 Bangladesh-India Border Clash was an armed skirmish between Bangladesh and India in April 2005. The clash took place between troops of the Bangladesh Rifles (BDR) and the Border Security Force (BSF) in Akhaura.
The clash began on 16 April 2005, when a platoon of Indian Border Security Force infiltrated into Hirapur village and 100 Indian villagers including who plundered the village, and killed 2 Bangladeshi civilians including a child, which made the Bangladesh Rifles to retaliate.


== Conflict ==
The Bangladesh Rifles responded by opening fire at the BSF Unit, killing 2 BSF soldiers including Assistant Commandant Jiwan Kumar and 2 Indian paramilitary troops were critically wounded according to top BDR officials.
Meanwhile, Indian top military officials claim, that the Bangladesh Rifles opened fire on the BSF unit who was looking for an abducted Indian villager, and requested a flag meeting, where instead BDR killed Jiwan Kumar.


== References ==`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2005 Bangladesh India border clash conflict.`
      ),
  }),
};
const insurgency_in_paraguay_tool = {
  name: "insurgency_in_paraguay",
  description: `Conflict name: Insurgency in Paraguay
Start date: 2005
End date (if applicable): Ongoing

Description: Page: Insurgency in Paraguay
Summary: The insurgency in Paraguay, also known as the Paraguayan People's Army insurgency and the EPP rebellion (from the group's name in Spanish: Ejército del Pueblo Paraguayo), is an ongoing low-level armed conflict in northeastern Paraguay. Between 2005 and the summer of 2014, the EPP campaign resulted in at least 50 deaths, the majority of them local ranchers, private security guards, and police officers, along with several insurgents. During that same period the group perpetrated 28 kidnappings for ransom and a total of 85 "violent acts".
The insurgency began in 2005, after several members of the Patria Libre party formed the Paraguayan People's Army (EPP). The Government of Paraguay suspects the EPP has ties to the Colombian rebel group FARC. Two splinter groups of the EPP, the Armed Peasant Association (ACA) and the Army of Marshal López (EML), have also launched separate armed campaigns against the government.


== History ==


=== Background ===
The 1989 fall of the Stroessner dictatorship in Paraguay fueled the rapid development of previously banned, left-wing political groups. In 1990 current EPP leader Oviedo Britez enrolled in the theology faculty of the Catholic University of Asuncion.


=== Formation of the EPP ===
In 1992 Britez was expelled from the theology study course, becoming increasingly interested in political change through revolutionary armed struggle. Britez, Juan Arrom Suhurt and Britez's fiancée Carmen Villalba soon created the core of Partido Patria Libre, Paraguayan People's Army's precursor. Between 1995 and 1996 Britez and Villalba allegedly received military training from Chile's Manuel Rodríguez Patriotic Front.
In 1997 MPL carried its first act of expropriation by unsuccessfully attempting a bank robbery in the town of Choré. All six robbers were detained by a local police unit, and later received a three-year sentence. Following the release of its members in early 2000, MPL launched a recruiting campaign and adopted kidnapping as its main source of funds.
Its first significant action was the 2001 kidnapping of María Edith Bordón de Debernardi. Her husband, businessman Antonio Debernardi, paid $1 million for her release. On 2 July 2004, police captured Oviedo Britez and Carmen Villalba in Ñemby, on the outskirts of Asunción. A search of the couple's house in the city of San Lorenzo followed the arrest; intelligence materials and operating manuals were seized. Following Britez's and Villalba's detention, Osmar Martínez and Osvaldo Villalba became EPP's new field commanders.


=== Major actions ===
In 2004, the group kidnapped Cecilia Cubas, the daughter of former president of Paraguay Raúl Cubas. Despite receiving a ransom of $300,000, the kidnappers killed her. After the PPL was taken apart by security forces in 2005, several members decided to form a new group with which to continue the armed struggle, adopting its current name in 2008.
EPP's ideology was first outlined in a book called "Francist 21st Century Revolution", written by Britez in prison. The book is named after Jose Gaspar Rodriguez de Francia, a dictator who ruled over Paraguay between 1814 and 1841, and incorporates elements of Bolivarianism and Marxism–Leninism.
The majority of EPP's members reportedly belong to eight families. Despite its limited size, EPP enjoys the support of the local population in the areas that it controls.


=== Later developments ===
Apart from the use of abductions EPP also engaged in cattle raiding, extortion, robberies and drug trade operations. The latter was facilitated with the aid of FARC; although EPP initially only extorted drug producers, reports indicate the presence of EPP's own marijuana plantations. An EPP communique denied any involvement in the drug trade, accusing the government of propaganda.
In August 2014 EPP agents Albino Larrea and Alfredo Jara Larrea formed a splinter faction known as ACA. ACA's initial strength amounted to 13 fighters, but as many`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Insurgency in Paraguay conflict.`
      ),
  }),
};
const chadian_civil_war_20052010_tool = {
  name: "chadian_civil_war_20052010",
  description: `Conflict name: Chadian Civil War (2005–2010)
Start date: 2005
End date (if applicable): 2010

Description: Page: Chadian Civil War (2005–2010)
Summary: The Chadian Civil War of 2005–2010 began on December 18, 2005. Since its independence from France in 1960, Chad has been swamped by civil wars between the Arab-Muslims of the north and the Sub-Saharan-Christians of the south. As a result, leadership and presidency in Chad drifted back and forth between the Christian southerners and Muslim northerners. When one side was in power, the other side usually started a revolutionary war to counter it.
France, the former colonial power, and Chad's northern neighbour Libya both became involved at various times throughout the civil war. By the mid-1990s the civil war had somewhat stabilised, and in 1996 Idriss Déby, a northerner, was confirmed president in Chad's first democratic election. In 1998 an armed rebellion began in the north, led by President Déby's former defence chief, Youssouf Togoimi. A Libyan peace deal in 2002 failed to put an end to the fighting. In 2003, conflict in the neighbouring Darfur region in Sudan leaked across the border into Chad. Refugees from Sudan were joined by Chadian civilians who were trying to escape rebel violence and eventually filled the camps. It was clear that Chad's rebels received weapons and assistance from the government of Sudan. At the same time, Sudanese rebels got help from the Chadian government. In February 2008, three rebel groups joined forces and launched an attack on Chad's capital, N'Djamena. After launching an assault that failed to seize the presidential palace, the attack was decisively repulsed. France sent in troops to shore up the government. Many of the rebels were former allies of President Idriss Déby. They accused him of corruption towards members of his own tribe.


== Causes ==
Many rebel leaders were former allies of Déby, who turned against him after he decided to change the constitution. The change in constitution allowed Déby to run for re-election in 2006, as well as gave power of changing the constitution to the president, this move caused several of Déby's allies to start a rebellion against him.
The battle at the start of December 2005 in the Chadian capital N'Djamena came as no surprise. For the years prior to the eruption, the Sudanese government was trying to overthrow the Chadian president, Idriss Déby, using Chadian rebels as middle men.   The three armed groups involved in attacks in 2008 were armed by Sudanese security forces intent on cutting off the support that Déby was giving to the rebels in Darfur, especially the Justice and Equality Movement (JEM), which had been on the offensive in Darfur. The war in Chad was a result of four distinct forces.
For one, the war appeared to be a continuation of the conflicts of Darfur and Chad, which include the competition for power and land. Secondly, there was an internal Chadian conflict. Déby reverted to a one-man military rule after a hopeful broadening of the base of his regime in the late 1990s which was coupled by the growth of civil politics in N'Djamena. Déby relied heavily on a close-knit group of kinsmen and on claiming the allotted government finances for his own agenda, distributing aid in return for civilian loyalty. Third is the Sudanese government's strategy for managing security within its border, which include treating the weak surrounding states as merely extensions of its internal limits. The Sudanese security helped bring Déby to power in 1990 as part of their responsibility that also saw it engage militarily in Eritrea, Ethiopia, Uganda, Democratic Republic of Congo (DRC), and the Central African Republic (CAR) over the military decade. In the same way that Khartoum used a combination of extortion and retribution to control its provincial elites in Darfur, it used the same tools to influence its trans-border limits. Furthermore, the regional competition for dominance through an immense area of central Africa has rarely been governed by state authority. This isolated area includes Chad, the CAR, and n`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Chadian Civil War (2005–2010) conflict.`
      ),
  }),
};
const mount_elgon_insurgency_tool = {
  name: "mount_elgon_insurgency",
  description: `Conflict name: Mount Elgon insurgency
Start date: 2005
End date (if applicable): 2008

Description: Page: Mount Elgon insurgency
Summary: The Mount Elgon insurgency was a conflict that started in 2005 when the Sabaot Land Defence Force militia revolted in the Mount Elgon area, Western Kenya.


== Background ==
In the 1920s and the 1930s, British Kenya had displaced many native Sabaots in the modern-day Trans-Nzoia County. Most of their arable  lands were given to new settlers, who became farmers in the area.
The Kenyan Government gave later in the 1960s a 7,700-hectare (19,000-acre) amount of land to landless families after its independence in 1963 from the UK. The SLDF was formed in 2005 to resist government eviction of squatters in Mount Elgon District. There were claims of corruption and land grabbing in the settlement process and it was viewed as an outfit formed and equipped by local politicians to prevent the resettlement process. The group would claim nationwide notoriety in the months leading to the December 2007 election when militia members launched a terror campaign targeting opponents of the Orange Democratic Movement which was the main opposition party at the time.


== Operation Okoa Maisha ==
The Kenyan government at first did not take the activities of the Sabaot Land Defence Force seriously and chose to initially deploy police and paramilitary units to Mount Elgon District. It was only after violence persisted with increasing casualties inflicted on civilians and security forces that the government came to the realization that the group had morphed from a criminal group to a rebel outfit.
A large scale military operation by the Kenya Army dubbed 'Operation Okoa Maisha' (Operation Save Lives) was launched in March 2008 with it being the first deployment of Kenya's nascent  special forces units drawn from the 20th Parachute Battalion along with regular infantry units. The SLDF who had enjoyed freedom of movement particularly at night quickly retreated to the forests. The operation was bedeviled with gross human rights violations by both sides with civilians caught in the middle. Civilians reported arbitrary detentions and torture of young males from the Sabaot community by the army. The SLDF was notorious for its level of violence meted out on the civilian populace with the cutting off of ears being a well known tactic.
The military operation led to intense fighting in the forests and caves around Mount Elgon notably at night but within a month the fighting had taken its toll on the rebels. On 16 May 2008 the leader of SLDF Wycliffe Matakwei was cornered along with a band of fighters and eventually killed in the assault by army units. His death and those of two other commanders marked the start of a rapid de-escalation of fighting with numerous rebels choosing to surrender marking a decisive victory for the Kenyan military.


== Arrests and charges ==
Reportedly, local church elders knew of 200 people who have gone missing since being arrested; about 1,500 have been formally charged. The Kenyan military has been criticized for the manner in which the operation was conducted particularly in the Chebyuk settlement area with dozens of people arrested allegedly having been executed with many more missing. The SLDF abducted many children who remain unaccounted for with many of the young men forcibly recruited being killed in fighting during the operation.


== References ==


== External links ==
“All the Men Have Gone”: War Crimes in Kenya’s Mt. Elgon Conflict (Human Rights Watch)
Kenya: Army and Rebel Militia Commit War Crimes in Mt. Elgon (Human Rights Watch)
Mount Elgon, Kenya: A terrorised population in desperate need of assistance (MSF)`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Mount Elgon insurgency conflict.`
      ),
  }),
};
const fatahhamas_conflict_tool = {
  name: "fatahhamas_conflict",
  description: `Conflict name: Fatah–Hamas conflict
Start date: 2006
End date (if applicable): Ongoing

Description: Page: Fatah–Hamas conflict
Summary: The Fatah–Hamas conflict (Arabic: النزاع بين فتح وحماس, romanized: an-Nizāʿ bayna Fataḥ wa-Ḥamās) is an ongoing political and strategic conflict between Fatah and Hamas, the two main Palestinian political parties in the Palestinian territories, leading to the Hamas takeover of the Gaza Strip in June 2007. The reconciliation process and unification of Hamas and Fatah administrations remains unfinalized and the situation is deemed a frozen conflict.
The Palestinian Independent Commission for Citizens' Rights has found that over 600 Palestinians were killed in the fighting from January 2006 to May 2007. Dozens more were killed or executed in the following years as part of the conflict.


== Overview ==
Hamas was founded in 1987, soon after the First Intifada broke out, as an offshoot of the Egyptian Muslim Brotherhood. It is a Palestinian Sunni-Islamist fundamentalist organization, which is regarded, either in whole or in part, as a terrorist organization by several countries and international organizations, including by Australia, Canada, the European Union, Israel, Japan, Paraguay, the United Kingdom, and the United States.
Tensions between Fatah and Hamas began to rise in 2005 after the death of Yasser Arafat in November 2004. After the legislative election on 25 January 2006, which resulted in a Hamas victory, relations were marked by sporadic factional fighting. This became more intense after the two parties repeatedly failed to reach a deal to share government power, escalating in June 2007 and resulting in Hamas' takeover of Gaza. A major issue was control over the border crossings, especially the Rafah Border Crossing.
Hamas leader Ismail Haniyeh formed a new PA government on 29 March 2006 comprising mostly Hamas members. Fatah and other factions had refused to join, especially as Hamas refused to accept the Quartet's conditions, such as recognition of Israel and earlier agreements. As a result, a substantial part of the international community, especially Israel, the United States and European Union countries, refused to deal with the Hamas government and imposed sanctions. Following the abduction by Hamas militants of Gilad Shalit on 25 June 2006 in a cross-border raid via a tunnel out of Gaza, Israel detained nearly a quarter of PLC members and ministers on the West Bank during August 2006, intensified the boycott of Gaza and took other punitive measures.
Calls for the implementation of the Cairo Declaration, including the formation of a unity government and the cessation of violence between Fatah and Hamas, were made in the Fatah–Hamas Mecca Agreement of 8 February 2007. The Hamas government was replaced on 17 March 2007 by a national unity government headed by Haniyeh comprising Hamas and Fatah ministers. In June 2007, Hamas fighters took control of the Gaza Strip and removed all Fatah officials. President Abbas, on 14 June, declared a state of emergency, dismissed Haniyeh's national unity government and appointed an emergency government, and suspended articles of the Basic Law to circumvent the needed PNC approval.
Hamas has been the de facto governing authority of the Gaza Strip since its takeover in June 2007. Since then, it has fought several wars with Israel, and the Palestinian Authority has been split into two polities, each seeing itself as the true representative of the Palestinian people – the Fatah-ruled Palestinian National Authority and the Hamas Government in Gaza.


== Preceding events ==


=== Involvement of Britain ===
Documents published in the Palestine Papers reveal that in 2004 the British intelligence MI6 helped draw up a security plan for a Fatah-led Palestinian Authority. The plan mentioned as an objective, "encourage and enable the Palestinian Authority (PA) to fully meet its security obligations under Phase 1 of the Roadmap". It proposed a number of ways of "degrading the capabilities of rejectionists", naming Hamas, PIJ (Palestinian Islamic Jihad) and the`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Fatah–Hamas conflict conflict.`
      ),
  }),
};
const iraqi_civil_war_tool = {
  name: "iraqi_civil_war",
  description: `Conflict name: Iraqi Civil War

*Part of the Iraq War*
Start date: 2006
End date (if applicable): 2008

Description: Page: Iraqi civil war (2006–2008)
Summary: The Iraqi civil war was an armed conflict from 2006 to 2008 between various sectarian Shia and Sunni armed groups, such as the Islamic State of Iraq and the Mahdi Army, in addition to the Iraqi government alongside American-led coalition forces. In February 2006, the insurgency against the coalition and government escalated into a sectarian civil war after the bombing of Al-Askari Shrine, considered a holy site in Twelver Shi'ism. US President George W. Bush and Iraqi officials accused Al-Qaeda in Iraq (AQI) of orchestrating the bombing. AQI publicly denied any links. The incident set off a wave of attacks on Sunni civilians by Shia militants, followed by attacks on Shia civilians by Sunni militants. 
The UN Secretary General stated in September 2006 that if patterns of discord and violence continued, the Iraqi state was in danger of breaking up. On 10 January 2007, Bush said that "80% of Iraq's sectarian violence occurs within 30 miles (48 km) of the capital. This violence is splitting Baghdad into sectarian enclaves, and shakes the confidence of all Iraqis." By late 2007, the National Intelligence Estimate described the conflict as having elements of a civil war. In 2008, during the Sunni Awakening and the U.S. troop surge, violence declined dramatically. However, an insurgency by ISI continued to plague Iraq following the U.S. withdrawal in late 2011. In June 2014, the Islamic State of Iraq and the Levant, the successor to Islamic State of Iraq, launched a major military offensive against the Iraq government and declared a self-proclaimed worldwide Islamic caliphate. This led to another full-scale war from 2013 to 2017, in which the government declared victory.
In October 2006, the Office of the United Nations High Commissioner for Refugees (UNHCR) and the Iraqi government estimated that more than 370,000 Iraqis had been displaced since 2006, bringing the total number of Iraqi refugees to more than 1.6 million. By 2008, the UNHCR raised the estimate to about 4.7 million (~16% of the population). The number estimated abroad was 2 million (a number close to CIA projections) and the number of internally displaced people was 2.7 million. The Red Cross stated in 2008 that Iraq's humanitarian situation was among the most critical in the world, with millions of Iraqis forced to rely on insufficient and poor-quality water sources.
According to the Failed States Index, produced by Foreign Policy and the Fund for Peace, Iraq was one of the world's top 5 unstable states from 2005 to 2008.


== Participants ==

A multitude of groups formed the Iraqi insurgency, which arose in a piecemeal fashion as a reaction to local events, notably the realisation of the U.S. military's inability to control Iraq. Beginning in 2005 the insurgent forces coalesced around several main factions, including the Islamic Army in Iraq and Ansar al-Sunna. Religious justification was used to support the political actions of these groups, as well as a marked adherence to Salafism, branding those against the jihad as non-believers. This approach played a role in the rise of sectarian violence. The U.S. military also believed that between 5 and 10% of insurgent forces were non-Iraqi Arabs.
Al-Qaeda in Iraq (AQI) and groups associated with it steadily became a brutal and wasteful foreign occupation force, engaging Yemeni, Saudi, Moroccan, Palestinian, Syrian and Lebanese foreign fighters. Independent Shi'a militias identified themselves around sectarian ideology and possessed various levels of influence and power. Some militias were founded in exile and returned to Iraq only after the toppling of Saddam Hussein, such as the Badr Organization. Others were created since the state collapse, the largest and most uniform of which was the Mahdi Army established by Muqtada al-Sadr and believed to have around 50,000 fighters.


== Conflict and tactics ==


=== Non-military targets ===
Attacks on non-military and civilian targets be`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Iraqi Civil War

*Part of the Iraq War* conflict.`
    ),
  }),
};
const operation_astute_tool = {
  name: "operation_astute",
  description: `Conflict name: Operation Astute
Start date: 2006
End date (if applicable): 2013

Description: Page: Operation Astute
Summary: Operation Astute was an Australian-led military deployment to East Timor to quell unrest and return stability in the 2006 East Timor crisis. It was headed by Brigadier Bill Sowry, and commenced on 25 May 2006 under the command of Brigadier Michael Slater. The operation was established at the request of East Timor's government, and continued under an understanding reached between Australia, East Timor, and the United Nations, with the United Nations Integrated Mission in East Timor supporting and helping to develop East Timor's police force. Other countries deploying soldiers to East Timor include Malaysia, New Zealand and East Timor's former colonial power Portugal, operating under independent command.


== Initial tasks ==
The initial tasks of the operation were to:

Allow for the evacuation of foreigners.
Restore stability and confine conflict to secured areas.
Assess and locate the weapons possessed by conflicting groups.
Establish a safe environment for dialogue to resolve the crisis.


== Deployment ==

A forward deployment of approximately 200, including a commando company from the 4th Battalion of the Royal Australian Regiment & C Coy, 2nd Battalion of the Royal Australian Regiment, secured an entry point for follow-on forces centred on Dili Airport. The full deployment consisted of a battalion group of about 1,800 personnel drawn from the 2nd Battalion of the Royal Australian Regiment & 3rd Battalion of the Royal Australian Regiment and other Australian and New Zealand Army units. Evacuations were carried out by C-130 Hercules aircraft from the Royal Australian Air Force, using RAAF Base Darwin as a Forward Operating Base.

Initial assets deployed included the guided-missile frigate HMAS Adelaide, the replenishment vessel HMAS Success and the amphibious landing/hospital ship HMAS Kanimbla. Landing ships HMAS Tobruk and HMAS Manoora were also sent to East Timor with follow-on forces.Operation Astute was established at the request of East Timor's government. Troops from former INTERFET nations including mostly from Malaysia, New Zealand and Portugal have augmented the Australian force. Prior to sending troops, each participating government negotiated a Status of Forces Agreement (SOFA) with the government of East Timor.
Besides Australia, New Zealand and, for a time, the Malaysian Army forces began arriving on 26 May by air and Portugal had also sent troops to East Timor. Initially, over 3,000 soldiers were deployed, but after the United Nations sent an international police mission (UNMIT) at the end of August 2006 and the situation calmed down, troop numbers were reduced. The ISF and UNMIT now jointly maintained law and order and helped rebuild the East Timorese security forces. An important task of both was also to ensure that the presidential and parliamentary elections in 2007 proceeded reasonably peacefully. Australia, however, insisted that the ISF remain under its leadership and not under UN leadership.
The ISF's attempt to capture the fugitive leader of the 2006 rebel soldiers, Alfredo Reinado, was unsuccessful. An attempted seizure in Same failed despite the deployment of an Australian special force and helicopters. Reinado was later killed in an assassination attempt on the East Timorese leadership on 11 February 2008.
In February 2008, following the attack, Australia initially increased its troops from 800 to 1000. By the end of October 2008, the ISF still consisted of a total of about 1000 men. Australia provided soldiers from the ANZAC Battle Group of the 1st Battalion of the Royal Australian Regiment from Townsville. In addition, there were units from the Army Aviation, Logistics, Military Police and Pioneers. In October 2009, the Australian contingent was down to 650 men. New Zealand still provided 155 soldiers in December 2009. These included an Infantry Rifle Company attached to the ANZAC Battle Group and two Iroquois helicopters with 32 members of No 3 Squadron of the Roy`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Operation Astute conflict.`
      ),
  }),
};
const bakassi_conflict_tool = {
  name: "bakassi_conflict",
  description: `Conflict name: Bakassi conflict
Start date: 2006
End date (if applicable): 2009

Description: Page: Bakassi conflict
Summary: The Bakassi conflict is an ongoing armed dispute over the Bakassi Peninsula of Cameroon. Originally subject to a border conflict between Cameroon and Nigeria, Bakassi later became affected by insurgencies waged by local separatists against Cameroonian government forces.
After the independence of Cameroon and Nigeria the border between them was not settled and there were other disputes. The Nigerian government claimed the border was that prior to the British–German agreements in 1913, and Cameroon claimed the border laid down by the British–German agreements. The border dispute worsened in the 1980s and 1990s after some border incidents occurred, which almost caused a war between the two countries. In 1994 Cameroon went to the International Court of Justice (ICJ) to avoid war with Nigeria after many armed clashes occurred in the disputed regions. Eight years later the ICJ ruled in Cameroon's favour and confirmed the 1913 border made by the British and Germans as the international border between the two countries. Nigeria confirmed it would transfer Bakassi to Cameroon.
In June 2006 Nigeria signed the Greentree Agreement, which marked the formal transfer of authority in the region, and the Nigerian Army partly withdrew from Bakassi. The move was opposed by many Bakassians who considered themselves Nigerians and they started to arm themselves on 2 July 2006. Two years later the Nigerian Army fully withdrew from the peninsula and it transitioned to Cameroonian control. More than 50 people were killed between the start of the conflict and the full withdrawal of the Nigerians. The conflict largely ended on 25 September 2009 with an amnesty deal, while some militias continued the fight for a few years. In 2021, the Biafra Nations League launched its own insurgency against Cameroonian authorities in Bakassi.


== Cameroonian-Nigerian border conflict ==


=== Early years of disputes (1960s–1981) ===

After the independence of both Nigeria and Cameroon in 1960, the status of British Cameroons was unclear. A United Nations-sponsored and supervised plebiscite took place the following February resulting in the northern part of the territory voting to remain part of Nigeria, while the southern part voted for reunification with Cameroon. The northern part of British Cameroons was transferred to Nigeria the following June, while the southern part joined Cameroon in October. However, the land and maritime boundaries between Nigeria and Cameroon were not clearly demarcated. One of the resultant disputes was in the Bakassi Peninsula, an area with large oil and gas reserves, which had been de facto administered by Nigeria. In the early 1960s, Nigeria recognised that the peninsula was not a historical part of Nigeria. Nigeria claimed that the British had made an agreement with the local chiefs for protection, and that the resultant border of 1884 should be the official border. Cameroon claimed that the British–German border agreements in 1913 should demarcate the border between the two countries. The dispute was not a major issue between the two countries until the Nigerian President, Yakubu Gowon, was overthrown by General Murtala Mohammed in July 1975. Mohammed claimed that Gowon had agreed to transfer Bakassi to Cameroon when he signed the Maroua Declaration in June. Mohammed's government never ratified the agreement, while Cameroon regarded it as being in force.


=== Armed clashes (1981–2005) ===
In the 1980s tensions rose at the border; with the two countries nearly going to war on 16 May 1981, when five Nigerian soldiers
were killed during border clashes. Nigeria claimed that Cameroonian soldiers fired first on the Nigerian patrol. Cameroon claimed Nigerian soldiers opened fire against a Cameroonian vessel close to Bakassi and that Nigeria violated international law in Cameroon's territory. The situation almost led to a full-scale war, but President Shehu Shagari's diplomacy played a crucial role in preventin`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Bakassi conflict conflict.`
      ),
  }),
};
const _2006_lebanon_war_tool = {
  name: "_2006_lebanon_war",
  description: `Conflict name: 2006 Lebanon War

*Part of the Israeli–Lebanese conflict*
Start date: 2006
End date (if applicable): 2006

Description: Page: 2006 Lebanon War
Summary: The 2006 Lebanon War, also called the 2006 Israel–Hezbollah War and known in Lebanon as the July War (Arabic: حرب تموز, Ḥarb Tammūz) and in Israel as the Second Lebanon War (Hebrew: מלחמת לבנון השנייה, Milhemet Levanon HaShniya), was a 34-day armed conflict in Lebanon, northern Israel and the Golan Heights. The principal parties were Hezbollah paramilitary forces and the Israel Defense Forces (IDF). The conflict started on 12 July 2006, and continued until a United Nations-brokered ceasefire went into effect in the morning on 14 August 2006, though it formally ended on 8 September 2006 when Israel lifted its naval blockade of Lebanon. Due to unprecedented Iranian military support to Hezbollah before and during the war, some consider it the first round of the Iran–Israel proxy conflict, rather than a continuation of the Arab–Israeli conflict.
The conflict was precipitated by the 2006 Hezbollah cross-border raid. On 12 July 2006, Hezbollah fighters fired rockets at Israeli border towns as a diversion for an anti-tank missile attack on two armored Humvees patrolling the Israeli side of the border fence. The ambush left three soldiers dead. Two Israeli soldiers were captured and taken by Hezbollah to Lebanon. Five more were killed in Lebanon, in a failed rescue attempt. Hezbollah demanded the release of Lebanese prisoners held by Israel in exchange for the release of the abducted soldiers. Israel refused and responded with airstrikes and artillery fire on targets in Lebanon. Israel attacked both Hezbollah military targets and Lebanese civilian infrastructure, including Beirut's Rafic Hariri International Airport. The IDF launched a ground invasion of Southern Lebanon. Israel also imposed an air-and-naval blockade. Hezbollah then launched more rockets into northern Israel and engaged the IDF in guerrilla warfare from hardened positions.
The conflict is believed to have killed between 1,191 and 1,300 Lebanese people, and 165 Israelis. It severely damaged Lebanese civil infrastructure, and displaced approximately one million Lebanese and 300,000–500,000 Israelis.
On 11 August 2006, the United Nations Security Council unanimously approved United Nations Security Council Resolution 1701 (UNSCR 1701) in an effort to end the hostilities. The resolution, which was approved by both the Lebanese and Israeli governments the following days, called for disarmament of Hezbollah, for withdrawal of the IDF from Lebanon, and for the deployment of the Lebanese Armed Forces and an enlarged United Nations Interim Force in Lebanon (UNIFIL) in the south. No Lebanese government has ever attempted to disarm, prevent, or punish Hezbollah or similar armed groups for launching such attacks on Israel. UNIFIL was given an expanded mandate, including the ability to use force to ensure that their area of operations was not used for hostile activities, and to resist attempts by force to prevent them from discharging their duties. As a result, neither the United Nations nor UNIFIL have ever attempted to either disarm Hezbollah nor attempted to prevent them from attacking Israel. UNIFIL’s mandate requires the request of the Lebanese government in order to attempt to disarm or suppress Hezbollah; the Lebanese government has never made such a request.
The Lebanese Army began deploying in Southern Lebanon on 17 August 2006. The blockade was lifted on 8 September 2006. On 1 October 2006, most Israeli troops withdrew from Lebanon, although the last of the troops continued to occupy the border-straddling village of Ghajar. In the time since the enactment of UNSCR 1701 both the Lebanese government and UNIFIL have stated that they will not disarm Hezbollah. The remains of the two captured soldiers, whose fates were unknown, were returned to Israel on 16 July 2008 as part of a prisoner exchange. Both Hezbollah and the Israeli government claimed victory, while the Winograd Commission deemed the war a missed opportunity for Israel.


== Backgr`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2006 Lebanon War

*Part of the Israeli–Lebanese conflict* conflict.`
    ),
  }),
};
const eelam_war_iv_tool = {
  name: "eelam_war_iv",
  description: `Conflict name: Eelam War IV

*Part of the Sri Lankan Civil War*
Start date: 2006
End date (if applicable): 2009

Description: Page: Eelam War IV
Summary: Eelam War IV is the name given to the fourth phase of armed conflict between the Sri Lankan military and the separatist Liberation Tigers of Tamil Eelam (LTTE). Renewed hostilities began on the 26 July 2006, when Sri Lanka Air Force fighter jets bombed several LTTE camps around Mavil Aru anicut. The government's casus belli was that the LTTE had cut off the water supply to surrounding paddy fields in the area. Shutting down the sluice gates of the Mavil Aru on July 21 depriving the water to over 15,000 people - Sinhalese and Muslim settlers under Sri Lankan state-sponsored colonisation schemes  in Trincomalee district. They were denied of water for drinking and also cultivating over 30,000 acres of paddy and other crops. The fighting resumed after a four-year ceasefire between the Government of Sri Lanka (GoSL) and LTTE. Continued fighting led to several territorial gains for the Sri Lankan Army, including the capture of Sampur, Vakarai and other parts of the east. The war took on an added dimension when the LTTE Air Tigers bombed Katunayake airbase on March 26, 2007, the first rebel air attack without external assistance in history.
Eelam War IV ended on 18 May 2009 with the Sri Lanka Army gaining control of the last bit of territory held by the LTTE and with the death of the LTTE leader Velupillai Prabhakaran. The final few days of the war near Nandikadal Lagoon in the north east of the island saw very heavy fighting and led to Sri Lankan forces being accused of war crimes, which were denied by the government. Some 300,000 Tamil civilians who were trapped inside the war zone and prevented from escaping by the LTTE were caught in the crossfire during the final phase of the war.


== Peace process 2002 ==
The elections held on 5 December 2001 saw a sweeping victory for the United National Front, led by Ranil Wickremasinghe, who campaigned on a pro-peace platform and pledged to find a negotiated settlement to the conflict.
On 19 December, amidst efforts by Norway to bring the government and the Tamil Tigers to the negotiating table, the LTTE announced a 30-day ceasefire with the Sri Lankan government and pledged to halt all attacks against government forces.  The new government welcomed the move, and reciprocated it 2 days later, announcing a month-long ceasefire and agreeing to lift a long-standing economic embargo on rebel-held territory.


=== Signing of MoU ===
The two sides formalized a Memorandum of Understanding (MoU) on February 22, 2002 and signed a permanent ceasefire agreement (CFA). Norway was named mediator, and it was decided that they, together with the other Nordic countries, monitor the ceasefire through a committee of experts named the Sri Lanka Monitoring Mission. In August, the government agreed to lift the ban on the LTTE and paved the way for the resumption of direct negotiations with the LTTE.

Following the signing of the ceasefire agreement, commercial air flights to Jaffna began and the LTTE opened the key A9 highway, which linked government controlled area in the south with Jaffna and ran through LTTE territory, allowing civilian traffic through the Vanni region for the first time in many years. Many foreign countries also offered substantial financial support if peace was achieved and optimism grew that an end to the decades long conflict was in sight.
The much anticipated peace talks began in Sattahip Naval Base, Chonburi Province, Thailand on the September 16 and 5 further rounds followed in Rose Garden, Nakhorn Pathom Province,  Norway and Berlin, Germany. During the talks, both sides agreed to the principle of a federal solution and the Tigers dropped their long standing demand for separate state. This was a key compromise from the LTTE, which had always insisted on an independent Tamil state and it also represented a compromise from the government, which had seldom agreed to more than minimal devolution. Both sides also exchanged prisoners of war for first time.


== `,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Eelam War IV

*Part of the Sri Lankan Civil War* conflict.`
    ),
  }),
};
const mexican_drug_war_tool = {
  name: "mexican_drug_war",
  description: `Conflict name: Mexican drug war
Start date: 2006
End date (if applicable): Ongoing

Description: Page: Mexican drug war
Summary: The Mexican drug war (also known as the Mexican war on drugs; Spanish: Guerra contra el narcotráfico en México, shortened to and commonly known inside Mexico as the war against the narco; Spanish: Guerra contra el narco) is an ongoing asymmetric armed conflict between the Mexican government and various drug trafficking syndicates. When the Mexican military intervened in 2006, the government's main objective was to reduce drug-related violence. The Mexican government has asserted that their primary focus is dismantling the cartels and preventing drug trafficking. The conflict has been described as the Mexican theater of the global war on drugs, as led by the United States federal government.
Violence escalated after the arrest of Miguel Ángel Félix Gallardo in 1989. He was the leader and the co-founder of the first major Mexican drug cartel; the Guadalajara Cartel, an alliance of the current existing cartels (which included the Sinaloa Cartel, the Juarez Cartel, the Tijuana Cartel, and the Sonora Cartel with Aldair Mariano as the leader). After his arrest, the alliance broke and high-ranking members formed their own cartels, fighting for control of territory and trafficking routes.
Although Mexican drug trafficking organizations have existed for several decades, their influence increased after the demise of the Colombian Cali and Medellín cartels in the 1990s. By 2007, Mexican drug cartels controlled 90% of the cocaine entering the United States. Arrests of key cartel leaders, particularly in the Tijuana and Gulf cartels, have led to increasing drug violence as cartels fight for control of the trafficking routes into the United States.
Federal law enforcement has been reorganized at least five times since 1982 in various attempts to control corruption and reduce cartel violence. During the same period, there have been at least four elite special forces created as new, corruption-free soldiers who could do battle with Mexico's endemic bribery system. Analysts estimate that wholesale earnings from illicit drug sales range from $13.6 to $49.4 billion annually. The U.S. Congress passed legislation in late June 2008 to provide Mexico with US$1.6 billion for the Mérida Initiative as well as technical advice to strengthen the national justice systems. By the end of President Felipe Calderón's administration (December 1, 2006 – November 30, 2012), the official death toll of the Mexican drug war was at least 60,000. Estimates set the death toll above 120,000 killed by 2013, not including 27,000 missing. Since taking office in 2018, President Andrés Manuel López Obrador declared that the war was over. His comment was criticized, as the homicide rate remains high.


== Background ==

Due to its location, Mexico has long been used as a staging and transshipment point for narcotics and contraband between Latin America and U.S. markets. Mexican bootleggers supplied alcohol to the United States' gangsters throughout Prohibition in the United States, and the onset of the illegal drug trade with the U.S. began when prohibition came to an end in 1933. Near the end of the 1960s, Mexicans started to smuggle drugs on a major scale.
In the 1960s and 1970s, Mexico was part of both Operation Intercept and Operation Condor, developed between 1975 and 1978, with the pretext to fight against the cultivation of opium and marijuana in the "Golden Triangle", particularly in Sinaloa.
The operation, commanded by General José Hernández Toledo, was a flop with no major drug lord captures, and reported abuse and repression in rural zones.
During the 1970s and early 1980s, Colombia's Pablo Escobar was the main exporter of cocaine and dealt with organized criminal networks all over the world. While Escobar's Medellin Cartel and the Cali Cartel would manufacture the products, Miguel Ángel Félix Gallardo's Guadalajara Cartel would oversee distribution. When enforcement efforts intensified in South Florida and the Caribbean, the Colomb`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Mexican drug war conflict.`
      ),
  }),
};
const war_in_somalia_200609_tool = {
  name: "war_in_somalia_200609",
  description: `Conflict name: War in Somalia (2006–09)

*Part of the Somali Civil War*
Start date: 2006
End date (if applicable): 2009

Description: Page: War in Somalia (2006–2009)
Summary: The Ethiopian invasion of Somalia, also known as the Ethiopian occupation of Somalia  or the Ethiopian intervention in the Somali Civil War, was an armed conflict that lasted from late 2006 to early 2009. It began when military forces from Ethiopia, supported by the United States, invaded Somalia to depose the Islamic Courts Union (ICU) and install the Transitional Federal Government (TFG). The conflict continued after the invasion when an anti-Ethiopian insurgency emerged and rapidly escalated. During 2007 and 2008, the insurgency recaptured the majority of territory lost by the ICU.
Ethiopian military involvement began in response to the rising power of the Islamic Courts Union, which operated as the de facto government in the majority of southern Somalia by late 2006. In order to reinforce the weak Ethiopian backed TFG, troops from the Ethiopian National Defence Force (ENDF) began deploying into Somalia during June 2006. Six months later during December 2006 the combined ENDF/TFG coalition, alongside a covert US military contingent, launched a full-scale invasion to topple the Islamic Courts. The ICU's organizational structure disintegrated, ENDF/TFG forces entered Mogadishu in the last days of December. In early 2007 an insurgency began, centered on a loose coalition of Islamic Courts loyalists, volunteers, clan militias, and various Islamist factions, of which Al-Shabaab eventually assumed a pivotal role. In the same period, the African Union (AU) established the AMISOM peacekeeping operation, sending thousands of troops to Somalia to bolster the besieged TFG and ENDF. The Alliance for the Re-liberation of Somalia (ARS), the successor to the ICU, further incited Islamist rebels and participated in the fighting.
Over the following two years, the ENDF, the TFG and AMISOM, became entrenched in a protracted struggle against an escalating insurgency, leading to the displacement of nearly one million inhabitants from Mogadishu. Piracy of the coast of Somalia, which had been previously suppressed by the ICU, greatly proliferated. By the end of 2007, ENDF troops were bogged down and facing a multi front war with no prospect of victory. While Mogadishu witnessed fierce fighting, insurgents launched offensives across southern and central Somalia in late 2007 and 2008, regaining territory previously lost by the ICU. During 2008, Al-Shabaab started taking control of significant tracts of southern Somalia and began governing territory for the first time. The Ethiopian military occupation faltered, and by Autumn 2008, more than 80% of the territory the ICU lost during the invasion was recaptured by the insurgency. By November, the insurgency had effectively won. By December 2008, the TFG only had control over parts of Mogadishu and the city of Baidoa. That month TFG President Abdullahi Yusuf resigned after stating that he had lost control of Somalia to the insurgency. The Ethiopian backed government remained weak and highly fragmented, as its fragility remained unchanged from its state prior to the invasion.
At the end of 2008, the ARS was assimilated into the TFG in an attempt to halt the growing insurgency and form a representative democratic government. During January 2009, former head of the Islamic Courts Union Sharif Sheikh Ahmed was elected president of Somalia. That same month, declaring victory and claiming to have eradicated the 'Islamist threat', ENDF forces withdrew from Mogadishu and Somalia, ending the two year occupation. By the time of the withdrawal, effectively all territory lost by the ICU during the full scale December 2006 and January 2007 invasion had been recovered by Islamist insurgents, including much of Mogadishu. Years into the present phase of the civil war, Ethiopia became re-involved and joined AMISOM in 2014 in order to counter the growth of Al-Shabaab.


== Background ==


=== Historic background ===

Disputes between Somalia and Ethiopia over the Ogaden region d`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the War in Somalia (2006–09)

*Part of the Somali Civil War* conflict.`
    ),
  }),
};
const operation_juniper_shield_tool = {
  name: "operation_juniper_shield",
  description: `Conflict name: Operation Juniper Shield
Start date: 2007
End date (if applicable): Ongoing

Description: Page: Operation Juniper Shield
Summary: Operation Juniper Shield, formerly known as Operation Enduring Freedom – Trans Sahara (OEF-TS), is the military operation conducted by the United States and partner nations in the  Saharan and Sahel regions of Africa, consisting of counterterrorism efforts and policing of arms and drug trafficking across central Africa. It is part of the Global War on Terrorism (GWOT). The other OEF mission in Africa is Operation Enduring Freedom – Horn of Africa (OEF-HOA).
Congress approved $500 million for the Trans-Saharan Counterterrorism Initiative (TSCTI) over six years to support countries involved in counterterrorism against alleged threats of al-Qaeda operating in African countries, primarily Algeria, Chad, Mali, Mauritania, Niger, Senegal, Nigeria, and Morocco. This program builds upon the former Pan Sahel Initiative (PSI), which concluded in December 2004 and focused on weapon and drug trafficking, as well as counterterrorism. TSCTI has both military and non-military components to it. OEF-TS is the military component of the program. Civil affairs elements include USAID educational efforts, airport security, Department of the Treasury, and State Department efforts.
Canada deployed teams of less than 15 CSOR members to Mali throughout 2011 to help combat militants in the Sahara. Although the special forces will not engage in combat, they will train the Malian military in basic soldiering. Areas include communications, planning, first aid, and providing aid to the general populace.


== Mission ==
Operation Enduring Freedom Trans Sahara is primarily a training mission meant to equip 10 nations to combat insurgents in the region. Africa Command states:

OEF-TS is the USG's 3rd priority counter terror effort conducting activities that support TSCTP but are not exclusive to TSCTP. OEF-TS supports TSCTP by forming relationships of peace, security, and cooperation among all Trans Sahara Nations. OEF-TS fosters collaboration and communication among participating countries. Furthermore, OEF-TS strengthens counterterrorism and border security, promotes democratic governance, reinforces bilateral military ties, and enhances development and institution building. U.S. Africa Command, through OEF-TS, provides training, equipment, assistance and advice to partner nation armed forces. This increases their capacity and capability to deny safe haven to terrorists and ultimately defeat extremist and terrorist activities in the region.
At some point in 2013, OEF-TS was redesignated as Operation Juniper Shield. Operation Juniper Shield encompasses American operations across Algeria, Burkina Faso, Cameroon, Chad, Mali, Mauritania, Morocco,
Niger, Nigeria, Senegal, and Tunisia.


== Training programs ==


=== Flintlock ===

Twice a year, the Joint Combined Exchange Training (JCET) program holds a multinational training exercise. Called Flintlocks, these exercises are meant to strengthen special forces from the United States as well as multiple other nations. Participants include troops from the Sahel and those from NATO members. Flintlock started in 1988 and continued through Operation Enduring Freedom, and is now held in Africa. The exercises teach medical operations, infantry and peacekeeping training, airborne operations, humanitarian relief, and leadership skills. The amount each category is stressed depends on the host nation's needs. In addition, participants are put through different scenarios involving skills instructed during the exercise.
Mali was supposed to host the 2012 exercise, but the United States decided to postpone the exercise. Officials say Flintlock was postponed because Mali is facing a renewed Tuareg insurgency.


=== The Atlas Accord ===
Although the Flintlock Exercise was postponed, another training program in Mali was not. The Atlas Accord was created in 2012 to train African military personnel in a number of skills while focusing on logistics. The exercise includes classroom instruction an`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Operation Juniper Shield conflict.`
      ),
  }),
};
const tuareg_rebellion_200709_tool = {
  name: "tuareg_rebellion_200709",
  description: `Conflict name: Tuareg rebellion (2007–09)

*Part of the Tuareg rebellions*
Start date: 2007
End date (if applicable): 2009

Description: Page: Tuareg rebellion (2007–2009)
Summary: The 2007-2009 Tuareg rebellion was an insurgency that began in February 2007 amongst elements of the Tuareg people living in the Sahara desert regions of northern Mali and Niger. It is one of a series of insurgencies by formerly nomadic Tuareg populations, which had last appeared in the mid-1990s, and date back at least to 1916. Populations dispersed to Algeria and Libya, as well as to the south of Niger and Mali in the 1990s returned only in the late 1990s. Former fighters were to be integrated into national militaries, but the process has been slow and caused increased resentment. Malian Tuaregs had conducted some raids in 2005–2006, which ended in a renewed peace agreement. Fighting in both nations was carried on largely in parallel, but not in concert. While fighting was mostly confined to guerrilla attacks and army counterattacks, large portions of the desert north of each nation were no-go zones for the military and civilians fled to regional capitals like Kidal, Mali and Agadez, Niger. Fighting was largely contained within Mali's Kidal Region and Niger's Agadez Region. Algeria helped negotiate an August 2008 Malian peace deal, which was broken by a rebel faction in December, crushed by the Malian military and wholescale defections of rebels to the government. Niger saw heavy fighting and disruption of uranium production in the mountainous north, before a Libyan backed peace deal, aided by a factional split among the rebels, brought a negotiated ceasefire and amnesty in May 2009.


== Timeline ==
Attacks beginning in February 2007 by the Niger Movement for Justice (MNJ) targeted outposts of the Nigerien Armed Forces and foreign economic interests. The group said they were fighting for greater economic development and a share in the region's mineral wealth, an end to alleged pollution caused by and poverty surrounding the mining operations at Arlit. The area of Niger affected is home to some of the world's largest uranium deposits, and the French operated uranium mines of the desert town of Arlit account for a fifth of the world's uranium deposits and most of Niger's foreign exchange income.
In September 2007, fighting shifted to Mali, with a portion of the Tuareg groups which had come under a 2006 ceasefire returning to combat. A swift Malian military response, coupled with the diplomatic intervention of other Malian Tuaregs, led to a new, unofficial ceasefire in December 2007. In April 2008, with the help of Libya, a formal ceasefire was declared, though it was quickly followed by new, retributive attacks from both sides. Resumed diplomatic and military pressure, with the intervention of Algerian diplomacy, brought what appeared to be a final reintegration of the Malian rebel factions in July 2008, along much the same lines of the 2006 peace plan. After both Libyan and Algerian sponsored peace talks, Malian rebel leader Ibrahim Ag Bahanga relocated to Libya and the remaining Malian rebels and government concluded a settlement to the conflict. In December 2008, Ag Bahanga's faction of the ADC (Alliance Touareg Nord Mali pour le Changement, ATNMC) returned to conflict in a series of attacks and counterattacks in the far north. This splinter group, despite a series of daring raids deep into populated areas, were decisively defeated by the Malian Army during January 2009, supported by an increasing number of former rebels. In February 2009, elements surrounding Ag Bahanga again fled Mali for Libya, while both Libya and Algeria pledged support to end rebel attacks and support negotiations. ADC fighters negotiated a return to the disarmament agreed in 2008, and began being processed for integration into the Malian Armed Forces in camps near Kidal.
Both conflicts were brought under increased international attention following the kidnapping in late 2008 in Niger of two Canadian diplomats and four European tourists by groups associated with Al-Qaeda Organization in the Islamic Maghreb,`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Tuareg rebellion (2007–09)

*Part of the Tuareg rebellions* conflict.`
    ),
  }),
};
const _2007_lebanon_conflict_tool = {
  name: "_2007_lebanon_conflict",
  description: `Conflict name: 2007 Lebanon conflict
Start date: 2007
End date (if applicable): 2007

Description: Page: 2007 Lebanon conflict
Summary: The 2007 Lebanon conflict began when fighting broke out between Fatah al-Islam, an Islamist militant organization, and the Lebanese Armed Forces (LAF) on May 20, 2007 in Nahr al-Bared, a UNRWA Palestinian refugee camp near Tripoli.
It was the most severe internal fighting since Lebanon's 1975–90 civil war. The conflict revolved mostly around the siege of Nahr el-Bared, in addition to clashes that occurred in the Ain al-Hilweh refugee camp in southern Lebanon and other bombings that took place in and around the Lebanese capital, Beirut. Fighting ended in September 2007.


== Background ==


=== Nahr al-Bared refugee camp ===

Lebanon hosts more than 400,000 Palestinian refugees, some 215,000 of whom live in camps, including the descendants of those who fled from Palestine during the 1948 Arab-Israeli War. In 1962, Palestinians were categorized as foreigners in Lebanon, regardless of how long they had lived there. Non-Lebanese, which included the refugees, were restricted from working in over 70 skilled professions until 2005, when new legislation officially opened 50 such jobs to them. The Lebanese Civil War left the government and general populace deeply suspicious of Palestinian refugees because of their involvement in the war. The main problem was the Cairo Agreement, signed by the Lebanese government and the Palestinian Movement, which was rejected by the Christian Movements who considered the agreement against the sovereignty of Lebanon because it rendered the Palestinian guerillas uncontrolled freedom. Yet, under the 1969 Arab accord, which was annulled by the Lebanese Parliament in the mid-1980s, the government has been reluctant to enter the camps.
The current residents of the camps are denied access to their homeland or neighboring Arab nations.
The Nahr al-Bared Palestinian refugee camp is situated 16 km north of Tripoli near the coastal road and had been under scrutiny since February, when two buses were bombed in Ain Alak, a predominantly Christian village near Bikfaya. Fatah al-Islam militants based in the camp were blamed. About 30,000 displaced Palestinians live in the camp.


== Timeline ==


=== May 20: Start of the fighting in Tripoli and Nahr al-Bared ===
Fighting began early in the morning after a police raid on a house in Tripoli which was apparently being used by militants from Fatah al-Islam. The militant group subsequently began shooting at the Lebanese security forces, who returned fire, triggering clashes in the vicinity of the Nahr al-Bared Palestinian refugee camp near Tripoli. The men reportedly resisted arrest and the violence spread to neighbouring streets.  Militants then attacked a Lebanese military post at the gate of the camp, slaughtering 27 soldiers during their sleep, seizing several vehicles and also killing an undetermined number of civilians that came to the rescue of the Lebanese army.


=== May 21–31: Nahr al-Bared under siege ===
Despite talks of a cease-fire, Fatah al-Islam militants continued battling the Lebanese army at the outskirts of the refugee camp, while Lebanese tanks and artillery continued shelling militant positions in the camp. By now the camp was totally surrounded by the Lebanese Army and more troops were coming in with tanks and APC's. Beirut's airport was the scene of several military aid shipments, mainly from the United States.


=== June 1–2: First Lebanese Army attack ===
Tanks massed outside the Nahr al-Bared camp and started a ground offensive. The fighting was concentrated in the southern and northern entrances of the camp. At least 19 people were killed, including three army soldiers. Among the dead was also a senior leader of Fatah al-Islam, Abu Riyadh, who was killed by a Lebanese army sniper. After 48 hours of fighting the battle was over and the Army was repelled.


=== June 9–12: Second Lebanese Army attack ===
After mediators failed to convince the Islamists to surrender, the Lebanese Army attacked Nahr el-Bared onc`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2007 Lebanon conflict conflict.`
      ),
  }),
};
const hamas_takeover_of_gaza_tool = {
  name: "hamas_takeover_of_gaza",
  description: `Conflict name: Hamas' takeover of Gaza

*Part of the Fatah–Hamas conflict*
Start date: 2007
End date (if applicable): 2007

Description: Page: Battle of Gaza (2007)
Summary: The Battle of Gaza or the Gaza civil war was a brief civil war between Fatah and Hamas that took place in the Gaza Strip from 10 to 15 June 2007. It was a prominent event in the Fatah–Hamas conflict, centered on the struggle for power after Fatah lost the 2006 Palestinian legislative election. The battle resulted in the dissolution of the unity government and the de facto division of the Palestinian territories into two entities: the West Bank governed by the Palestinian National Authority (PNA), and the Gaza Strip governed by Hamas. Hamas fighters took control of the Gaza Strip, while Fatah officials were either taken as prisoners, executed, or expelled. The Palestinian Centre for Human Rights reported that at least 161 people were killed and more than 700 were wounded during the fighting.


== Background ==


=== Events leading up to the 2006 Palestinian legislative election ===
In 2003, the Palestinian Basic Law of the PNA was amended and a semi-presidential form of government was established, whereby a constitution creates a directly elected fixed-term president, plus a prime minister and cabinet collectively responsible to the legislature.
Documents published in the Palestine Papers reveal that in 2004, the British Secret Intelligence Service helped to draw up a security plan for the Fatah-led PNA. The plan proposed a number of ways to degrade the capabilities of opposition groups such as Hamas, Palestinian Islamic Jihad (PIJ), and the al-Aqsa Brigades. The strategy would involve disruption of command, control and communications capabilities, detention of key officials, and confiscation of their weapons and financial resources. This plan was passed to Jibril Rajoub, a senior Fatah official of the PNA, and most of the stated objectives were achieved by the West Bank-based PNA security apparatus.
Yasser Arafat, the President of the Palestinian National Authority, died on 11 November 2004. A Palestinian presidential election to fill the position took place on 9 January 2005 in both the West Bank and Gaza. This election—which was boycotted by both Hamas and PIJ—resulted in Palestine Liberation Organization (PLO) and Fatah chairman Mahmoud Abbas being elected president for a four-year term.
On 8 February 2005, Palestinian President Mahmoud Abbas and Israeli Prime Minister Ariel Sharon announced a ceasefire, which Hamas endorsed on 17 March 2005. On 19 March 2005, twelve Palestinian factions, including Fatah, Hamas, PIJ, Popular Front for the Liberation of Palestine (PFLP) and Democratic Front for the Liberation of Palestine (DFLP) signed the Palestinian Cairo Declaration, which reaffirmed the status of the PLO as the sole legitimate representative of the Palestinian people, and implied a reform of the PLO by its inclusion of Hamas and PIJ.
Israel completed its unilateral disengagement from the Gaza Strip on 12 September 2005, removing all Israeli residents and security personnel, and demolishing all of the associated residential buildings.
On 26 September 2005, Israeli forces arrested or detained 450 members of the Hamas party for violating the ban on rallies, public meetings and election campaigns inside Jerusalem. Most of those detained were either running for elected office or actively campaigning for candidates in the 2006 Palestinian legislative election.


=== 2006 Palestinian legislative election ===

The Palestinian legislative election took place on 25 January 2006 and was judged to be free and fair by international observers. It resulted in a Hamas victory, surprising Israel and the United States, which had expected their favoured partner, Fatah, to retain power. On 27 January, US President George Bush said "the landslide victory of the militant Islamic group Hamas was a rejection of the "status quo" and a repudiation of the "old guard" that had failed to provide honest government and services".
On 30 January 2006, the Quartet on the Middle East (United States, Russia, United Nati`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Hamas' takeover of Gaza

*Part of the Fatah–Hamas conflict* conflict.`
    ),
  }),
};
const war_in_ingushetia_tool = {
  name: "war_in_ingushetia",
  description: `Conflict name: War in Ingushetia

*Part of the Second Chechen War and the Insurgency in the North Caucasus*
Start date: 2007
End date (if applicable): 2015

Description: Page: Insurgency in Ingushetia
Summary: The Insurgency in Ingushetia (Russian: Война в Ингушетии, romanized: Voyna v Ingushetii) began in 2007 as an escalation of an insurgency in Ingushetia connected to the separatist conflict in Chechnya. The conflict has been described as a civil war by local human rights activists and opposition politicians; others have referred to it as an uprising. By mid-2009 Ingushetia had surpassed Chechnya as the most violent of the North Caucasus republics. However, by 2015 the insurgency in the Republic had greatly weakened, and the casualty toll declined substantially in the intervening years.


== History ==
On 26 July 2007, a massive security operation was launched in Ingushetia, sparked by a series of attacks including an assassination attempt on President Murat Zyazikov five days earlier. Moscow sent in an additional 2,500 MVD troops, almost tripling the number of special forces in Ingushetia. In the next few days, hundreds of men were rounded up in the sweeps, while several security officers were killed and wounded in the continued attacks. By October 2007, police and security forces in Ingushetia were issued orders to stop informing the media of any "incidents of a terrorist nature."
In 2008, Magomed Yevloyev, owner of the highly critical opposition website Ingushetia.ru, was killed while in police custody. The aftermath of the killing was marked by an upsurge in separatist activity and animosity towards Russia and Russians among the Ingush population. At the center of this controversy was the deeply unpopular President Murat Zyazikov, a former KGB general who was criticized both by human rights groups and by some in the Russian government. The Ingush Interior Minister Musa Medov was targeted by a suicide bomber in October 2008. Eventually, Zyazikov was asked to resign. On 30 October 2008, Russian president Dmitry Medvedev signed a decree to remove Zyazikov from office and replace him with Lieutenant Colonel Yunus-bek Yevkurov. This was hailed by the Ingush opposition as a victory.
However, the violence did not end. According to police sources, nearly 50 people (including 27 rebels, 18 policemen and two civilians) died in the almost daily clashes in this small republic (less than 500,000 inhabitants) in the first three months of 2009. Assassinations and attempted assassinations of high-profile figures continued. On 10 June 2009 Aza Gazgireeva, the Deputy Chief Justice of the Supreme Court of Ingushetia, was gunned down, and on 13 June former Deputy Prime Minister Bashir Aushev was shot dead outside his home. Ingush President Yevkurov was seriously wounded in a suicide bomb attack on 22 June, and Construction Minister Ruslan Amerkhanov was shot dead in his office in August. In October 2010, the Ingush branch of the Islamist Caucasus Emirate group announced a moratorium on killing police officers; according to President Yevkurov, 400 police officers had been killed in Ingushetia in the five years to 2 October 2010.
After 2010, the levels of violence in Ingushetia began to decline, this trend continued, with total casualties in the Republic falling by over 60 percent from 2013 to 2014. In 2014, the insurgency's leader Arthur Getagazhev was killed by security forces. In mid-2015, Yevkurov stated that the insurgency in the Republic had been 'defeated'. He said that 80 fighters from the group had turned themselves in and been given amnesty and that the remaining active insurgents were greatly reduced in numbers. Reasons suggested for this decline, which was reflected more broadly throughout the Insurgency in the North Caucasus, included the deaths of high-ranking insurgency commanders, the increased targeting by security forces of the support infrastructure relied on by the insurgents, and an exodus of insurgents to other conflict zones.
There was fighting in March 2024 in Karabulak between Russian security forces and alleged militants. Six alleged militants were killed.


== See also ==
2004 Nazr`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the War in Ingushetia

*Part of the Second Chechen War and the Insurgency in the North Caucasus* conflict.`
    ),
  }),
};
const _2008_invasion_of_anjouan_tool = {
  name: "_2008_invasion_of_anjouan",
  description: `Conflict name: 2008 invasion of Anjouan
Start date: 2008
End date (if applicable): 2008

Description: Page: 2008 invasion of Anjouan
Summary: The invasion of Anjouan (code-named Operation Democracy in Comoros), on March 25, 2008, was an amphibious assault led by the Comoros, backed by African Union (AU) forces, including troops from Sudan, Tanzania, Senegal, along with logistical support from Libya and France. The objective of the invasion was to topple Colonel Mohamed Bacar's leadership in Anjouan, an island in the Union of Comoros, when he refused to step down after a disputed 2007 election, in defiance of the federal government and the AU. The Comoros archipelago in the Indian Ocean has had a fractious history since its independence from France in 1975, experiencing more than 20 coups or attempted coups.
The invasion occurred in the early morning of March 25, 2008. The main towns were quickly overrun and the island was declared under the control of the invading forces the same day. Mohamed Bacar managed to escape to Mayotte on March 26 and requested political asylum. He was subsequently held in custody there by the French administration and brought to the island of Réunion. On May 15, France rejected Bacar's request for asylum, but the French refugee office ruled that the ousted leader could not be extradited to the Comoros because of the risk of persecution.


== Background ==


=== Tensions rise ===
The Comoran federal Government delayed the holding of an election on Anjouan due to alleged irregularities and intimidation, but Bacar nevertheless printed ballots and held an election in June, claiming a landslide victory of 90 per cent. In July 2007, Bacar declared Anjouan to be independent of the Comoros.


=== Military build-up ===
In March 2008, hundreds of the Comoran Government troops began assembling on Mohéli, which is closer to Anjouan than the larger island, Grande Comore. Sudan and Senegal provided a total of 750 troops, while Libya offered logistical support for the operation. In addition, 500 Tanzanian troops were due to arrive soon after. France, the former colonial power, also assisted the operation by airlifting AU troops to the area.
Vows of resistance from the self-declared President of Anjouan were met with stern words from the AU envoy, saying "He will be overwhelmed...I am afraid to say that if he tries to do that, it will be the end of him physically, if necessary." In an interview with IRIN, Bacar said: "[National President Ahmed Abdallah Mohamed] Sambi does not know anything concerning the military, but if I had to advise him I would say that it's not the solution. The first time [1997] the army came we kicked them out. The second time [May 2007] the army came we kicked them out. That means that if they try to come a third time we will kick them out."
Anjouan promised to hold new elections in May 2008, which South African President Thabo Mbeki supported as a way to resolve the crisis. Mbeki once more tried to stop the invasion on March 14 but the AU disregarded his proposal and the invasion went ahead.


=== Pre-invasion incidents ===
On March 3, 2008, a fuel ship supplying the Comoros Army caught fire in the port of Comoros' capital, Moroni. The cause of the fire was unknown. On March 11 an armed incursion occurred on the islands where three members of the Anjouan Militia loyal to President Bacar were captured and taken to Mohéli for interrogation.  Diplomacy continued with an intervention by South African President Mbeki who attempted to delay the planned AU invasion to the distinct displeasure of the Comorian Government.
It is understood that Mbeki spoke to the head of the AU, Tanzanian President Jakaya Kikwete, by phone on March 14 to stall the attempt to depose Bacar.

Despite Mbeki's attempts to stop the invasion, a fishing boat with soldiers left Moheli for Anjouan on March 14. There were conflicting statements from both sides, with Comoran and AU military sources reporting that a fishing boat carrying around fifty soldiers from the Government of Comoros landed in southern Anjouan and attempted `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2008 invasion of Anjouan conflict.`
      ),
  }),
};
const _2008_lebanon_conflict_tool = {
  name: "_2008_lebanon_conflict",
  description: `Conflict name: 2008 Lebanon conflict
Start date: 2008
End date (if applicable): 2008

Description: Page: 2008 Lebanon conflict
Summary: The 2008 Lebanon conflict (or the 7 May 2008 clashes; Arabic: أحداث 7 أيار) was a brief intrastate military conflict in May 2008 in Lebanon between opposition militias (mainly Shiite Hezbollah) and pro-government Sunnis, after the 18-month-long political crisis spiralled out of control, when the government's decision to dismantle Hezbollah's telecommunication system, which led to Hezbollah seizing control of majority Sunni neighbourhoods in west Beirut, and ended with the adoption of the Doha Accord in 2008.
The fighting between pro-government and opposition militias affiliated to respectively the Future Movement and PSP political parties on one side and Hezbollah, Amal, SSNP, LDP and the Arab Democratic Party on the other side, was sparked by a government move to shut down Hezbollah's telecommunication network and remove Beirut Airport's head of security after the discovery of a hidden remote-controlled camera monitoring one of the airport's runway and his alleged ties to Hezbollah. Clashes first occurred on May 7 after a general strike called for by the country's union federation to demand higher wages and decry high consumer prices became overshadowed by the government's decisions and escalated into low-level violence between pro-government and opposition protesters. Violence severely escalated the next morning on May 8 after a televised speech by Hezbollah leader Hassan Nasrallah. In his speech, Nasrallah responded to the government's decision to declare the organization's telecommunication network illegal by calling it a declaration of war on the organization, shortly after which fighting between pro-government and opposition militias broke out in Beirut. Within two days, Hezbollah-led opposition fighters had seized control of several West Beirut majority Sunni neighbourhoods from pro-government Future Movement militiamen. In the following days, fighting between pro-government and opposition militias spread to other parts of the country with major clashes in the Aley District and Tripoli. On May 15, an intervention by the Arab League brokered an immediate end to hostilities and a pledge from warring parties to send emissaries to Doha for a mediation process. The resulting Doha Agreement, reached on May 21, 2008, brought an end to the 18-month political feud that exploded into fighting and nearly drove the country to a new civil war.


== Background ==

On December 1, 2006, a series of protests and sit-ins began in Lebanon, led by the March 8 political coalition which opposed the government of Prime Minister Fouad Siniora. Formed after the Cedar Revolution in 2005, the March 8 coalition was up of the Shiite Hezbollah and Amal, the Christian Free Patriotic Movement and a number of smaller parties such as the SSNP, LDP and the Arab Democratic Party. On the other side of the political divide stood the March 14 coalition, at the time holding the majority of cabinet and parliamentary seats. The March 14 coalition was made up of the primarily Sunni Future Movement and a number of smaller parties including the Druze Progressive Socialist Party and the Christian Lebanese Forces.
At the core of commencement of the protests was the unhappiness of Hezbollah with the division of power under the current status quo and the pro-Western course of the Lebanese government. It argued that too much executive power was in the hands of the Future Movement, the primary political party of March 14, which it in their view misused by too closely aligned with Western states, most notably the United States, thereby compromising Lebanon's sovereignty and security. In addition, the period was marked by political strife between the March 8 and March 14 coalitions over the international investigation on the assassination of former prime minister Rafic Hariri, the creation of the future Lebanon Tribunal to prosecute the perpetrators this assassination and the question of Hezbollah's armed status. Hezbollah was the only`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2008 Lebanon conflict conflict.`
      ),
  }),
};
const djiboutianeritrean_border_conflict_tool = {
  name: "djiboutianeritrean_border_conflict",
  description: `Conflict name: Djiboutian–Eritrean border conflict
Start date: 2008
End date (if applicable): 2008

Description: Page: Djiboutian–Eritrean border conflict
Summary: The Djiboutian–Eritrean border conflict between the forces of Djibouti and Eritrea occurred between June 10 and June 13, 2008. It was triggered by tension which began on April 16, 2008, when Djibouti reported that Eritrean armed forces had penetrated into Djibouti and dug trenches on both sides of the border. The crisis deepened when armed clashes broke out between the two armed forces in the border area on June 10, 2008. During the conflict, France provided logistical, medical and intelligence support to Djibouti, but did not participate in direct combat.


== Background ==

The currently in force 1900 boundary agreement specifies that the international boundary starts at Cape Doumeira (Ras Doumeira) at the Red Sea and runs for 1.5 km along the watershed divide of the peninsula. Furthermore, the 1900 protocol specified that Île Doumeira (Doumeira Island) immediately offshore and its adjacent smaller islets would not be assigned sovereignty and would remain demilitarized.
Djibouti and Eritrea had twice previously clashed over the border area. In January 1935, Italy and France signed the Franco-Italian Agreement wherein parts of French Somaliland (Djibouti) were given to Italy (Eritrea). The actual border at Ras Doumeira (a hill) though was never fully demarcated save for a broad agreement that the northern slopes of hill were Italian and the southern slopes were French and this arrangement sufficed whilst France and Italy remained in control of the area. However, the question of ratification has brought this agreement, and its provision of substantial parts of Djibouti to Eritrea into question. In April 1996 the Djiboutian government accused Eritrean forces of having made a 7 km incursion into its territory following a clash at the Djiboutian border post of Ras Doumeira. Within two days these claims had grown into accusations that the Eritrean government harbours a territorial claim to part of Djibouti's northern coastline. The allegations were then made by the foreign affairs, Mohamed Moussa Chehem, to his perplexed Eritrean counterpart, Petros Solomon, who was on an official visit to Djibouti the following day. Mr Solomon subsequently met with the Djiboutian president, who also raised the alleged incursion. In a series of contradictory accounts, the Djiboutian authorities said that they had dispatched 600 troops to the area. On April 18, Mr Solomon stated categorically in a press statement that "there has never been any clash or incident in Doumeira", adding that the Eritrean government was "surprised and saddened" by the allegations.


== Eritrean movements in Ras Doumeira region ==
In January Eritrea reportedly requested to cross the border in order to get sand for a road, but instead occupied a hilltop in the region. On April 16, Eritrea is reported by Djibouti to have set up fortifications and dug trenches on both sides of the Djiboutian border near Ras Doumeira. Djibouti, in a letter to the UN calling for intervention, claimed new maps put out by Eritrea showed Ras Doumeira as Eritrean territory. Eritrea denied it had any problems with Djibouti.
Ethiopia's Prime Minister Meles Zenawi said on May 15 that the row was a "threat to the peace and security of the whole Horn of Africa" and said Ethiopia would secure their trade corridor through Djibouti in the event of a conflict. Ethiopia has relied on Djibouti for access to the Red Sea since Eritrea's independence. Eritrea's President Isaias Afwerki denied sending troops into the area and added they do not have any problem with Djibouti.


== Armed clashes ==

On June 10, 2008, according to Djibouti, several Eritrean troops deserted their positions, fleeing to the Djiboutian side. Djiboutian forces then came under fire from Eritrean forces demanding the return of the deserters. Djibouti called up soldiers and police who had retired since 2004 in response to the fighting. Eritrea dismissed accounts from Djibouti as "anti-Erit`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Djiboutian–Eritrean border conflict conflict.`
      ),
  }),
};
const cambodianthai_border_dispute_tool = {
  name: "cambodianthai_border_dispute",
  description: `Conflict name: Cambodian–Thai border dispute
Start date: 2008
End date (if applicable): 2011

Description: Page: Cambodian–Thai border dispute
Summary: The Cambodian–Thai border dispute (Khmer–Thai border dispute) began in June 2008 as part of a century-long dispute between the Kingdom of Cambodia and the Kingdom of Thailand involving the area surrounding the 11th-century Preah Vihear Temple, in the Dângrêk Mountains between Choam Khsant District, Preah Vihear Province of northern Cambodia and the Kantharalak District, Sisaket Province of northeastern Thailand.
According to the Cambodian ambassador to the United Nations, the most recent dispute began on 15 July 2008 when about 50 Thai soldiers moved into the Keo Sikhakirisvara Pagoda vicinity which he claimed was located in Cambodia's territory about 300 metres (980 ft) from the Temple of Preah Vihear. Thailand claimed the demarcation had not yet been completed for the external parts of the area adjacent to the temple, which was adjudged to be Cambodian by a nine to three decision of the International Court of Justice (ICJ) in 1962.
By August 2008, the dispute had expanded to the 13th century Ta Moan temple complex 153 kilometres (95 mi) west of Preah Vihear (14°20′57″N 103°15′59″E), where Cambodia has accused Thai troops of occupying a temple complex it claims is on Cambodian land. The Thai foreign ministry denied that any troops had moved into that area until several were killed in an encounter in April 2011. An agreement was reached in December 2011 to withdraw troops from the disputed area.
On 11 November 2013, the ICJ declared in a unanimous decision that the 1962 ICJ judgment had awarded all of the promontory of Preah Vihear to Cambodia and that Thailand had an obligation to withdraw any Thai military, police, or guard forces stationed in that area. However, it rejected Cambodia's argument that the judgment had also awarded the hill of Phnom Trap (three kilometers northwest of the temple) to Cambodia, finding that it had made no ruling on sovereignty over the hill.


== Background ==
The Preah Vihear temple area has been the subject of debate within Cambodia and Thailand since the late 19th century.
The temple complex was built during the 9th and 10th centuries AD under the auspices of the Khmer Empire. As the empire reached its zenith and began a slow decline, the Ayutthaya Kingdom began to grow into the modern state of Thailand. Siam and Vietnam expanded into Cambodian territory in turn during the Ayutthaya, Thonburi, and Rattanakosin eras.
The Franco-Siamese treaty of 1867 forced Siam to renounce suzerainty over Cambodia, with the exception of Battambang, Siem Reap, Banteay Meanchey, and Oddar Meancheay Provinces, which had been officially incorporated into the Kingdom of Siam. During the 1904 state visit of King Rama V to France, Siam agreed to cede the four provinces to France in exchange for regaining Thai sovereignty over Trat Province and Amphoe Dan Sai of Loei Province, which had been occupied by France.
In 1907, the Thai-Cambodian border was mapped by the French on behalf of a bilateral border commission. According to the 1904 agreement, the border would follow the natural watershed between the countries. However, the resulting map deviated by showing Preah Vihear Temple as being in Cambodia, even though it is on the Thai side of the watershed. Thailand accepted the map for official use. The Thais discovered the error when they made their own survey in the 1930s, but the ICJ ruled that they had waited too long to protest and lost the temple by "acquiescence".
Immediately prior to World War II, the Thai government attempted to negotiate an adjustment of the border with French Indochina. However, this came to an end with the French surrender in 1940 to Nazi Germany. The government of Field Marshal Plaek Phibunsongkhram then pressed the colonial government of French Indochina for the return of territory Thailand had lost in the 1904 and 1907 exchanges: Battambang Province of Thailand (modern day Battambang Province and Pailin municipality, Cambodia), Phibunsongkhram Pr`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Cambodian–Thai border dispute conflict.`
      ),
  }),
};
const _2008_bangladesh_india_border_clash_tool = {
  name: "_2008_bangladesh_india_border_clash",
  description: `Conflict name: 2008 Bangladesh India border clash
Start date: 2008
End date (if applicable): 2008

Description: Page: 2001 Bangladesh–India border clashes
Summary: The 2001 Bangladesh–India border clashes were a series of armed skirmishes between India and Bangladesh in April 2001. The clashes took place between troops of the Bangladesh Rifles (BDR) and the Indian Border Security Force (BSF) on the poorly-marked international border between the two countries.
The clashes began on 16 April 2001, when a force of around 800 to a 1000 Bangladeshi Paramilitary soldiers attacked and captured Padua/Pyrdiwah village, breaking the status quo and forcing the civilians there to flee. Bangladesh claimed that the village had been illegaly occupied by India since Bangladesh's War of Independence in 1971. The Indian Border Security Force (BSF) post in Padua/Pyrdiwah village was encircled, trapping 31 BSF troops within. However, both sides held their fire and began negotiations. Over the course of the following days, about three BSF companies proceeded to reinforce the outpost. This incident was resolved later without any bloodshed.
Following this standoff, Indian BSF paramilitary troops along the Bangladesh–India border were put on high alert and ordered to begin intensive patrolling. A few days later, a small contingent of 300 BSF troops entered Bangladeshi territory near the village of Boraibari, more than 200 km to the west of Padua/Pyrdiwah, The intrusion was used as a "counter-attack" by India to retaliate after the earlier incident in Padua. 
Immediately upon entering Bangladeshi territory, the Indian BSF paramilitary company were ambushed by Bangladeshi border guards, at 18 April 2001 and the attack on BDR outposts were repulsed. who were assisted by hundreds of villagers. Following their capture, The bodies of the Indian soldiers were returned to India on 20 April.
The clashes finally ended on 21 April 2001, after both sides agreed to a ceasefire. The clashes left a total of 21 people dead, including 16 Indian soldiers and three Bangladeshi border guards.
The clashes were a major setback to the improving relations between India and Bangladesh. The two countries had signed a number of agreements in the years leading up to the clashes including the 2015 Land Boundary Agreement which served an important role in advancing the exchange of 111 enclaves (17,160.63 acres) from India to Bangladesh and reciprocatively, the latter transferred 51 enclaves (7,110.02 acres) to India.


== Background ==

The Partition of Bengal in 1947 left a poorly demarcated international border between the states of India and Bangladesh (erstwhile East Pakistan). Ownership of several villages on both sides of the de facto border were disputed and claimed by both countries. The dispute over the demarcation of the India–Bangladesh border worsened due to the existence of over 190 enclaves.


== Cause ==
One of the disputed areas was a small sliver of land near the village of Padua (also known as Pyrdiwah), on the border between Bangladesh and the Indian state of Meghalaya, which was used by Indian security forces during the 1971 Bangladesh Liberation War to train ethnic Bengali guerrillas known as the Mukti Bahini, who were fighting the Pakistan Army and pro-Pakistan loyalist militias. Following its independence, Bangladesh staked its claim to the area in which India's Border Security Force (BSF) had established a post in since 1971. The village is one of the Indian exclaves on the border between Bangladesh and Meghalaya. There are 111 Indian enclaves in Bangladeshi-claimed territory and 50 Bangladeshi enclaves in Indian-claimed territory. Padua village is an adverse possession—a village inhabited by Indians that is legally owned by Bangladesh (until the border agreement is ratified and the populations exchanged). The people of this village are ethnic Khasis.
In an interview published much later, the then-director of the Bangladesh Rifles (BDR), Major-General Fazlur Rahman, who was later dismissed from service by the rival government following an election, claimed that the I`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2008 Bangladesh India border clash conflict.`
      ),
  }),
};
const russogeorgian_war_tool = {
  name: "russogeorgian_war",
  description: `Conflict name: Russo-Georgian War
Start date: 2008
End date (if applicable): 2008

Description: Page: Russo-Georgian War
Summary: The August 2008 Russo-Georgian War, also known as the Russian invasion of Georgia, was a war waged against Georgia by the Russian Federation and the Russian-backed separatist regions of South Ossetia and Abkhazia. The fighting took place in the strategically important South Caucasus region. It is regarded as the first European war of the 21st century.
Georgia declared its independence from the Soviet Union in April 1991, following a referendum during the dissolution of the Soviet Union. However, fighting between Georgia and separatists resulted in parts of the former South Ossetian Autonomous Oblast under the de facto control of Russian-backed but internationally unrecognised separatists. In 1992, a joint peacekeeping force of Georgian, Russian, and Ossetian troops was stationed in the territory. A similar stalemate developed in the region of Abkhazia, where the separatists had waged a war in 1992–1993. Following the election of Vladimir Putin in Russia in 2000 and a pro-Western change of power in Georgia in 2003, relations between Russia and Georgia began to severely deteriorate, reaching a full diplomatic crisis by April 2008.
On 1 August 2008, the Russian-backed South Ossetian forces started shelling Georgian villages, with a sporadic response from Georgian peacekeepers in the area. Intensifying artillery attacks by the South Ossetian separatists broke a 1992 ceasefire agreement. To put an end to these attacks, Georgian army units were sent into the South Ossetian conflict zone on 7 August and took control of most of Tskhinvali, a separatist stronghold, within hours. Some Russian troops had illicitly crossed the Georgia–Russia border through the Roki Tunnel and advanced into the South Ossetian conflict zone by 7 August before the Georgian military response. Russia falsely accused Georgia of committing "genocide" and "aggression against South Ossetia"—and launched a full-scale land, air and sea invasion of Georgia, including its undisputed territory, on 8 August, referring to it as a "peace enforcement" operation. Russian and South Ossetian forces fought Georgian forces in and around South Ossetia for several days, until Georgian forces retreated. Russian and Abkhaz forces opened a second front by attacking the Kodori Gorge held by Georgia. Russian naval forces blockaded part of the Georgian Black Sea coastline. The Russian air force attacked targets both within and beyond the conflict zone. This was the first war in history in which cyber warfare coincided with military action. An information war was also waged during and after the conflict. Nicolas Sarkozy, the President of France, personally negotiated a ceasefire agreement on 12 August.
Russian forces temporarily occupied the Georgian cities of Zugdidi, Senaki, Poti and Gori, holding on to these areas beyond the ceasefire. The South Ossetians destroyed most ethnic Georgian villages in South Ossetia and were responsible for an ethnic cleansing of Georgians. Russia recognised the independence of Abkhazia and South Ossetia from Georgia on 26 August and the Georgian government severed diplomatic relations with Russia. Russia mostly completed its withdrawal of troops from undisputed parts of Georgia on 8 October. Russian international relations were largely unharmed. The war displaced 192,000 people. While many returned to their homes after the war, 20,272 people, mostly ethnic Georgians, remained displaced as of 2014. In 2021, the European Court of Human Rights ruled that Russia maintained "direct control" over the separatist regions and was responsible for grave human rights abuses taking place there. In 2022, the International Criminal Court issued arrest warrants for three Russian nationals because of war crimes against ethnic Georgians during the conflict.


== Background ==


=== History ===

In the 10th century AD, Georgia for the first time emerged as an ethnic concept in the territories where the Georgian language was used to perform`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Russo-Georgian War conflict.`
      ),
  }),
};
const _2008_kufra_conflict_tool = {
  name: "_2008_kufra_conflict",
  description: `Conflict name: 2008 Kufra conflict
Start date: 2008
End date (if applicable): 2008

Description: Page: 2008 Kufra conflict
Summary: The 2008 Kufra conflict was an armed conflict in the Kufra region of Libya, between the pro-Toubou Toubou Front for the Salvation of Libya (TFSL) faction, and the Libyan Government. 


== Background ==
After a successful coup d'état led by Muammar Gaddafi in 1969, and the republic was established; Gaddafi like Egyptian President Gamal Abdel Nasser an Arab nationalist started to Arabize the country. A couple of months later a new law was passed which made Libya an Arab state and replaced it with the 1951 constitution. In the 1951 constitution states, "Libyans shall be equal before the law" and also it also mentioned "shall enjoy equal civil and political rights without distinction of religion, belief, race, language, weight kinship, or political or social opinion." Since then Arabic became the sole official language of Libya; both languages and cultures from minority groups like Aujila, Ghat, Ghadames, Hun, Imazighen, Jalo, Toubou, Socra and Zuwara peoples had no room in the country. Especially the Imazighen and the Toubou tribes who were persecuted and harassed by the regime. Until August 2007 a controversial law which bans Imazighen women giving birth to their children an Imazighen name. School-age children were also forced to adopt an Arabic name before they can register themselves for school. 


== Conflict ==
The conflict started in early November 2008 when the Libyan Government stripped ethnic Toubous of their citizenship, claiming that their leaders had sided with their rival Chad. The clashes began when TFSL set a local government's office on fire. 
Following the incident the government dispatched army units and helicopters to the region, putting Kufra under siege. The clashes stopped in mid-November when both parties agreed to a cease-fire. On 20 November 2008, a Toubou tribal meeting with Libyan officials was held in Kufra to end the conflict. The conflict had led to the deaths of 11 to 30 people, with over a hundred being wounded. 


== References ==


== Bibliography ==
Ennaji, Moha (2014). Multiculturalism and Democracy in North Africa: Aftermath of the Arab Spring. London: Routledge. ISBN 978-1317-813-61-3.`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2008 Kufra conflict conflict.`
      ),
  }),
};
const gaza_war_tool = {
  name: "gaza_war",
  description: `Conflict name: Gaza War

*Part of the Gaza–Israel conflict*
Start date: 2008
End date (if applicable): 2009

Description: Page: Israel–Hamas war
Summary: An armed conflict between Israel and Hamas-led Palestinian militant groups has been taking place in the Gaza Strip and Israel since 7 October 2023. The fifth war of the Gaza–Israel conflict since 2008, it has been the deadliest for Palestinians in the entire Israeli–Palestinian conflict, and the most significant military engagement in the region since the Yom Kippur War in 1973.
The war began when Hamas-led militant groups launched a surprise attack on Israel on 7 October, which involved a rocket barrage and a few thousand militants breaching the Gaza–Israel barrier and attacking Israeli civilian communities and military bases. During this attack, 1,139 Israelis and foreign nationals were killed, including 815 civilians. In addition, 251 Israelis and foreigners were taken captive into Gaza, with the stated goal to force Israel to release Palestinian prisoners. Hamas said its attack was in response to Israel's continued occupation, blockade of Gaza, and expansion of settlements, as well as alleged threats to the Al-Aqsa Mosque and the general plight of Palestinians. After clearing militants from its territory, Israel launched one of the most destructive bombing campaigns in modern history and invaded Gaza on 27 October with the stated objectives of destroying Hamas and freeing hostages.
Since the start of the Israeli invasion, the Gaza Health Ministry has stated more than 40,000 Palestinians in Gaza have been killed, of whom 52% of those identified were women and children. Israel's tightened blockade cut off basic necessities and attacks on infrastructure have caused healthcare collapse and an impending famine. By early 2024, Israeli forces had destroyed or damaged more than half of Gaza's houses, at least a third of its tree cover and farmland, most of its schools and universities, hundreds of cultural landmarks, and at least a dozen cemeteries. Nearly all of the strip's 2.3 million residents have been forcibly displaced. Over 100,000 Israelis remain internally displaced.
The war continues to have significant regional and international repercussions. Large, primarily pro-Palestinian protests have taken place across the world, calling for a ceasefire. The International Court of Justice is reviewing a case accusing Israel of committing genocide in Gaza. The United States has given Israel extensive military aid and vetoed multiple UN Security Council ceasefire resolutions. Meanwhile, the Axis of Resistance has engaged, with its groups attacking American military bases in the Middle East; the Yemeni Houthi movement attacking commercial ships allegedly linked to Israel, incurring a US-led military response; and the ongoing exchange of strikes between Lebanon's Hezbollah and Israel risking the eruption of another full-scale war.


== Background ==

The 1948 Palestine war saw the establishment of Israel over most of what had been Mandatory Palestine, with the exception of two separated territories that became known as the West Bank and the Gaza Strip, which were held by Jordan and Egypt respectively. Following the 1967 Six-Day War, Israel occupied the Palestinian territories of the West Bank and the Gaza Strip. The upcoming period witnessed two popular uprisings by Palestinians against the Israeli occupation; the First and Second Intifadas in 1987 and 2000 respectively, with the latter's end seeing Israel's unilateral withdrawal from Gaza in 2005.
Since 2007, the Gaza Strip has been governed by Hamas, an Islamist militant group, while the West Bank remained under the control of the Fatah-led Palestinian Authority. After Hamas' takeover, Israel imposed a blockade of the Gaza Strip, that significantly damaged its economy. The blockade was justified by Israel citing security concerns, but international rights groups have characterized the blockade as a form of collective punishment. Due to the Israeli blockade of the Gaza Strip, UNRWA reported that 81% of people were living below the poverty level in 2023`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Gaza War

*Part of the Gaza–Israel conflict* conflict.`
    ),
  }),
};
const somali_civil_war_2009present_tool = {
  name: "somali_civil_war_2009present",
  description: `Conflict name: Somali Civil War (2009–present)

*Part of the Somali Civil War*
Start date: 2009
End date (if applicable): Ongoing

Description: Page: Somali Civil War (2009–present)
Summary: The Somali Civil War (2009–present) is the ongoing phase of the Somali Civil War which is concentrated in southern and central Somalia. It began in late January 2009 with the present conflict mainly between the forces of the Federal Government of Somalia assisted by African Union peacekeeping troops and al-Shabaab militants who pledged alliegence to al-Qaeda during 2012.
During the insurgency that followed the Ethiopian invasion of Somalia, al-Shabaab rose to prominence and made significant territorial gains. Several weeks before the end of the military occupation, Islamist insurgents had seized most of the south and Transitional Federal Government (TFG) was on the verge of collapse. At the end of January 2009, Ethiopian troops withdrew from Somalia and former Islamic Courts Union leader Sharif Ahmed was elected president of the TFG, marking a new phase of the civil war. Al-Shabaab and allied Islamist groups continued fighting against the new TFG and the African Union mission (AMISOM) throughout 2009 and 2010, weakening the fraile TFG further. By 2010, al-Shabaab reached its peak operational capacity as it absorbed other Islamist factions. The group also began embracing drastic changes in the types of attacks they utilized and their frequency. That year they carried out the Kampala bombings in response to Ugandan support for AMISOM.
In August 2011, al-Shabaab withdrew from Mogadishu and lost the significant control it had established in the city since the insurgency began in 2007. While the group continues to carry out operations in the capital, the 2011 withdrawal marked the end of a strong insurgent presence. The Kenyan invasion of southern Somalia, Operation Linda Nchi, began in October 2011. The Kenyan government had become concerned by the growing refugee crisis and instability along its porous northern border, and intended to create a buffer-zone to prevent over-spill of the conflict into Kenyan territory. Al-Shabaab came under increasing pressure from the Kenyan intervention, which joined TFG and AMISOM troops in attacking the group. This combination challenged al-Shabaab's position in the south and drove the Islamists from the important port city of Kismayo. Somalia suffered a severe famine during 2011, further weakening al-Shabaab.
During 2012 al-Shabaab pledged alliegence to al-Qaeda. Despite the growing challenges, al-Shabaab still controls large swathes of territory in southern Somalia. It remains influential in many rural areas, and it now prioritizes guerrilla and terror attacks over territorial acquisitions. The Islamic State in Somalia (ISS) and Hizbul Islam have also carried out attacks against both factions. In 2013 Hizbul Islam renounced violence against the government, but as of 2023, ISS remains active in northern Somalia.


== Background ==

Established in 2004 and internationally recognized, the Transitional Federal Government's (TFG) support in Somalia was waning until the United States-backed 2006 intervention by the Ethiopian military, which helped drive out the rival Islamic Courts Union (ICU) in Mogadishu and solidify the TFG's rule. Following this defeat, the ICU splintered into several different factions. Some of the more radical elements, including al-Shabaab, regrouped to continue their insurgency against the TFG and oppose the Ethiopian military's presence in Somalia. Throughout 2007 and 2008, al-Shabaab scored military victories, seizing control of key towns and ports in both central and southern Somalia. At the end of 2008, the group had captured Baidoa but not Mogadishu. By January 2009, al-Shabaab and other militias had managed to force the Ethiopian troops to withdraw from the country, leaving behind an underequipped African Union (AU) peacekeeping force. A power sharing deal ensued between an Islamist splinter group led by Sheikh Sharif Sheikh Ahmed's Alliance for the Re-liberation of Somalia Djibouti faction (ARS-D) and TFG Prime Minister Nu`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Somali Civil War (2009–present)

*Part of the Somali Civil War* conflict.`
    ),
  }),
};
const sudanese_nomadic_conflicts_tool = {
  name: "sudanese_nomadic_conflicts",
  description: `Conflict name: Sudanese nomadic conflicts
Start date: 2009
End date (if applicable): Ongoing

Description: Page: Sudanese nomadic conflicts
Summary: Sudanese nomadic conflicts are non-state conflicts between rival nomadic tribes taking place in the territory of Sudan and, since 2011, South Sudan. Conflict between nomadic tribes in Sudan is common, with fights breaking out over scarce resources, including grazing land, cattle and drinking water. Some of the tribes involved in these clashes have been the Messiria, Maalia, Rizeigat and Bani Hussein Arabic tribes inhabiting Darfur and West Kordofan, and the Dinka, Nuer and Murle African ethnic groups inhabiting South Sudan. Conflicts have been fueled by other major wars taking place in the same regions, in particular the Second Sudanese Civil War, the War in Darfur and the Sudanese conflict in South Kordofan and Blue Nile.
Over the years, clashes between rival ethnic militias have resulted in a large number of casualties and displaced hundreds of thousands of people. In recent years, particularly violent clashes broke out in 1993 between Jikany Nuer and Lou Nuer in Upper Nile, in 2009–2012 between Lou Nuer and Murle in Jonglei and in 2013–2014 between Maalia, Rizeigat, Messiria, Salamat and Bani Hussein in Darfur and West Kordofan.


== Timeline ==


=== 2008 ===
Fighting in 2008 between the Misseriya and the Rizeigat tribes claimed around 70 lives.


=== 2009 ===


==== May ====
Early 2009 saw several instances of fighting between nomadic tribes in Sudan which killed around 900 people, mainly women and children, in the south of the country. On 26 May 2008, a large-scale clash occurred between the Misseriya and the Rizeigat tribes when 2,000 Rizeigat men, mounted on horses and 35 vehicles, attacked a group of Misseriya near the village of Meiram. Sudanese police attempted to intervene and establish a buffer zone between the tribes but as they were doing so, they were attacked by about 3,000 Rizeigat horsemen. The attack killed 75 police officers, 75 from the Rizeigat tribe and between 89 and 109 from the Misseriya.
The interior minister, Ibrahim Mahmoud Hamad, has pledged to bring those responsible for the fighting to justice and to take steps to disarm civilians. The United Nations Mission in Sudan, which earlier in May deployed 120 peacekeepers to Jonglei state to prevent tribal conflict, is also investigating. In the meantime Sudanese authorities have asked both tribes to move at least 5 km from each other to avoid fresh outbreaks of fighting. Whilst fighting in the area appears to have calmed down, the situation remains tense and there are concerns over security for the February national general election.


==== June ====

The 2009 Sobat River ambush was a battle between Jikany Nuer tribesmen and the Sudanese People's Liberation Army (SPLA) which was escorting a United Nations (UN) aid convoy on 12 June 2009.


==== August ====
Early morning on 2 August 2009, more than 180 members of the Lou Nuer community were killed, more than 30 others injured and further numbers were declared missing in a "well coordinated and planned" attack carried out whilst they were fishing for food, allegedly by Murle fighters. Eleven protective soldiers were also killed. The dead were searching for food amidst severe shortages after barges which were shipping aid to them were attacked the previous June. People were pursued in the direction of a river, with some bodies becoming tangled in fishing nets. The majority of the dead were children and women, with entire families claimed to have been "wiped out". The death toll was predicted to rise.


=== 2010 ===


==== January ====
At least 139 people were killed in tribal clashes following a cattle raid in southern Sudan which took place on 2 January 2010.
On 11 January 2010, Nuer attackers targeted a Dinka village, killing 45 civilians and injuring 102 civilians in a particularly brutal attack.


==== April ====

At least 55 people were killed in an attack in South Darfur between the Sudan People's Liberation Army in South Sudan and another unidentified, dis`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Sudanese nomadic conflicts conflict.`
      ),
  }),
};
const insurgency_in_the_north_caucasus_tool = {
  name: "insurgency_in_the_north_caucasus",
  description: `Conflict name: Insurgency in the North Caucasus

*Part of the Chechen–Russian conflict*
Start date: 2009
End date (if applicable): 2017

Description: Page: Insurgency in the North Caucasus
Summary: The insurgency in the North Caucasus (Russian: Борьба с терроризмом на Северном Кавказе) was a low-level armed conflict between Russia and militants associated with the Caucasus Emirate and, from June 2015, the Islamic State, in the North Caucasus. It followed the (Russian-proclaimed) official end of the decade-long Second Chechen War on 16 April 2009. It attracted volunteers from the MENA region, Western Europe, and Central Asia. The Russian legislation considers the Second Chechen War and the insurgency described in this article as the same "counter-terrorist operations on the territory of the North Caucasus region".
The insurgency became relatively dormant in its later years. During its peak, the violence was mostly concentrated in the North Caucasus republics of Chechnya, Dagestan, Ingushetia and Kabardino-Balkaria. Occasional incidents happened in surrounding regions, such as North Ossetia–Alania, Karachay-Cherkessia, Stavropol Krai, and Volgograd Oblast.
While the insurgency was officially declared over on 19 December 2017 when FSB Director Alexander Bortnikov announced the final elimination of the insurgent underground in the North Caucasus, counter-terrorism operations in the North Caucasus have not ended.


== History and background ==

In late 1999, Russia's Premier, Vladimir Putin, ordered military, police and security forces to enter the breakaway region of Chechnya. By early 2000, these forces occupied most of the region. High levels of fighting
continued for several more years and resulted in thousands of Russian and Chechen casualties and hundreds of thousands of displaced persons. In 2005, Chechen rebel leader, Abdul-Halim Sadulayev, decreed the formation of a Caucasus Front against Russia, among Islamic believers in the North Caucasus, in an attempt to widen Chechnya's conflict with Russia. After his death, his successor, Dokka Umarov, declared continuing jihad to establish an Islamic fundamentalist Caucasus Emirate in the North Caucasus and beyond. Russia's pacification policy in Chechnya has involved setting up a pro-Moscow regional government and transferring more local security duties to this government.
An important factor in Russia's apparent success in Chechnya has been reliance on pro-Moscow Chechen clans affiliated with regional President Ramzan Kadyrov. Terrorist attacks in the North Caucasus appeared to increase substantially in 2007–2010. In the summer of 2009, more than 442 persons died in North Caucasus violence in just four months as compared to only 150 deaths reported in the entire year of 2008. In the whole year 2009, according to the official figures by the Russian government, 235 Interior Ministry personnel (Defense Ministry and the FSB losses not included) were killed and 686 injured, while more than 541 alleged fighters and their supporters were killed and over 600 detained. The rate of increase of terrorist incidents lessened in 2010, as compared to 2008–2009, however the rate of civilian casualties substantially increased throughout the North Caucasus in 2010 and a rising number of terrorist incidents took place outside of Chechnya.
In the period from 2010 to 2014, the number of casualties in the North Caucasus insurgency declined each year, with the overall death toll falling by more than half. Reasons suggested for the decline include the deaths of high-ranking insurgency commanders, the increased targeting by security forces of the support infrastructure relied on by the insurgents, and an exodus of insurgents to other conflict zones. A special investigation by Reuters claimed that in the lead-up to the 2014 Sochi Olympics, Russian security services had allowed and encouraged militants to leave Russia to fight in the Syrian Civil War, in order to reduce the risk of domestic attacks.


=== Chechnya ===

The insurgency in the North Caucasus is a direct result of the two post-Soviet wars fought between Russia and Chechnya. The First Cheche`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Insurgency in the North Caucasus

*Part of the Chechen–Russian conflict* conflict.`
    ),
  }),
};
const _2009_peruvian_political_crisis_tool = {
  name: "_2009_peruvian_political_crisis",
  description: `Conflict name: 2009 Peruvian political crisis
Start date: 2009
End date (if applicable): 2009

Description: Page: 2009 Peruvian political crisis
Summary: The 2009 Peruvian political crisis resulted from the ongoing opposition to oil development in the Peruvian Amazon by local Indigenous peoples; they protested Petroperú and confronted the National Police. At the forefront of the movement to resist the development was Asociación Interétnica de Desarrollo de la Selva (AIDESEP), a coalition of indigenous community organizations in the region.
Following the government's decision to pass regulations allowing companies access to the Amazon, natives conducted more than a year of declared opposition and advocacy to change this policy and, from 9 April, began a period of protest and civil disobedience. In June 2009, the Garcia government suspended civil liberties, declared a state of emergency, and sent in the military to stop the protests. The military intervention, referred to as the Baguazo, resulted in two days of bloody confrontations, resulting in a total of 23 police deaths, 10 native/civilians deaths and more than 150 native wounded.
This conflict has been described as Peru's worst political violence in years and is the worst crisis of President Alan García's presidency. Prime Minister Yehude Simon was forced to resign his post in the aftermath, and Congress repealed the laws that led to the protests.


== Background ==
A free trade agreement negotiated between Peru and the United States that came into effect in February 2009 required certain changes in law allowing private companies access to the Amazon for development of resources. The Congress of Peru granted the government authority to implement the required regulatory changes. Indigenous tribes insisted that some of the new government regulations introduced by President Alan García in 2008 threatened the safety of their natural resources and would enable foreign companies to exploit them. Protests ensued in August 2008, and Congress repealed two laws and promised to examine and vote on others. When that didn't happen, protests and blockades resumed on 9 April 2009.
In the early 21st century, exploitation of mineral resources has been criticized by researchers based on the link they have shown between the abundance of natural resources (particularly minerals and oil) of a country and its poor growth performance, as well as poor governmental policies and institutions (subject to ills such as corruption, weak governance, rent-seeking, plunder). They found this relationship is especially related to development of 'point source' minerals such as mines and oil fields, which produce high value for few people, as opposed to agricultural diffuse development, which involves large quantities of workers, forcing benefits to be shared. Some believe that Peruvian oil development functions in such a model of 'point source', providing grievances and low benefit to local populations.
In 2008 an oil scandal shook the government of Alan García when audio tapes revealing corruption and conflict of interest were released to the press. The tapes contained the conversations of Rómulo León, an important member of the ruling Apra party negotiating bribes from foreign companies in order to allow them to drill for petroleum in the Peruvian Amazon region. Romulo León was imprisoned, yet his daughter, Luciana León, a member of congress, continues to work in the parliament despite e-mail messages found by investigators that revealed that she was aware of and participating in her father's activities.

In June 2009, as the dispute worsened, the government ordered the military in to assist the police. The deaths resulted in two clashes fought in the Amazon jungle on 5 and 6 June 2009.


== Battle at "Devil's Curve" ==
On 5 June 2009, at least 31 people were killed in clashes between security forces and indigenous people on the "Devil's Curve" jungle highway close to Bagua, over 1,000 kilometres north of Lima, as the security forces attempted to break down a road blockade. The deaths came when police decided to `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2009 Peruvian political crisis conflict.`
      ),
  }),
};
const boko_haram_insurgency_tool = {
  name: "boko_haram_insurgency",
  description: `Conflict name: Boko Haram insurgency
Start date: 2009
End date (if applicable): Ongoing

Description: Page: Boko Haram insurgency
Summary: The Boko Haram insurgency began in July 2009, when the militant Islamist and jihadist rebel group Boko Haram started an armed rebellion against the government of Nigeria. The conflict is taking place within the context of long-standing issues of religious violence between Nigeria's Muslim and Christian communities, and the insurgents' ultimate aim is to establish an Islamic state in the region.
Boko Haram's initial uprising failed, and its leader Mohammed Yusuf was killed by the Nigerian government. He began the group in the year 2002, with a view of opposing western education with his followers. The movement consequently fractured into autonomous groups and started an insurgency, though rebel commander Abubakar Shekau managed to achieve a kind of primacy among the insurgents. Though challenged by internal rivals, such as Abu Usmatul al-Ansari's Salafist conservative faction and the Ansaru faction, Shekau became the insurgency's de facto leader and mostly kept the different Boko Haram factions from fighting each other, instead focusing on overthrowing the Nigerian government. Supported by other jihadist organizations including al-Qaeda and al-Shabaab, Shekau's tactics were marked by extreme brutality and explicit targeting of civilians.
After years of fighting, the insurgents became increasingly aggressive and began to seize large areas in northeastern Nigeria. The violence escalated dramatically in 2014 with 10,849 deaths, while Boko Haram drastically expanded its territories. At the same time, the insurgency spread to neighboring Cameroon, Chad, Mali, and Niger, thus becoming a major regional conflict in Sub-Saharan Africa. Meanwhile, Shekau attempted to improve his international standing among jihadists by tacitly aligning with the Islamic State of Iraq and the Levant in March 2015, with Boko Haram becoming the "Islamic State's West Africa Province" (ISWAP).
The insurgents were driven back during the 2015 West African offensive by a Nigeria-led coalition of African and Western countries, forcing the Islamists to retreat into Sambisa Forest and bases at Lake Chad. Discontent about various issues consequently grew among Boko Haram. Dissidents among the movement allied themselves with IS' central command and challenged Shekau's leadership, resulting in a violent split of the insurgents. Since then, Shekau and his group are generally referred to as "Boko Haram", whereas the dissidents continued to operate as ISWAP under Abu Musab al-Barnawi. The two factions consequently fought against each other while waging insurgencies against the local governments. After a period of reversals, Boko Haram and ISWAP launched new offensives in 2018 and 2019, again growing in strength.
When Boko Haram's insurgency was at its peak in the mid-2010s, it was the world's deadliest terrorist organization in terms of the number of people it killed. In a bid to ensure dialog between government and the deadly sect, the President Jonathan administration set up a committee to grant an amnesty to Boko Haram. Some details of the amnesty includes granting of pardons to Boko Haram fighters and also listening to different ethnic groups under the sect with a bid to ending violence. This amnesty was rejected by the sect in an audio broadcast that was sent by its leader on the grounds that they are fighting to create an Islamic state in Nigeria's predominantly Muslim north and that it is the government that is committing atrocities against Muslims.
In May 2021, ISWAP attacked and overran Boko Haram militants in the Sambisa Forest and the leader of Boko Haram Shekau was killed during the fighting, reportedly using a suicide vest. In August, Abu Musab al-Barnawi, the leading commander of ISWAP, was killed. After Shekau's death masses of Boko Haram militants surrendered while others defected to ISWAP. According to the Nigerian Defence Forces, as of April 5, 2022, a total of 51,114 rebels and families, consisting of 11,398 men, 15`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Boko Haram insurgency conflict.`
      ),
  }),
};
const _2009_boko_haram_uprising_tool = {
  name: "_2009_boko_haram_uprising",
  description: `Conflict name: 2009 Boko Haram uprising

*Part of the Boko Haram insurgency*
Start date: 2009
End date (if applicable): 2009

Description: Page: 2009 Boko Haram uprising
Summary: The 2009 Boko Haram uprising was a conflict between Boko Haram, a militant Islamist group, and Nigerian security forces.


== History ==
Violence across several states in northeastern Nigeria resulted in more than 1,000 dead, with around 700 killed in the city of Maiduguri alone, according to one military official.
A government inquiry later found that, while long-standing tensions existed between Boko Haram and the Nigerian Security forces, the immediate cause of the violence stemmed from a confrontation between a group of sect members and joint Task Forces located at custom bridge Gamboru ward in the city of Maiduguri. The Boko Haram members were en route to bury one of their members at the Gwange cemetery. The officers, part of a special operation to suppress violence and rampant crime in Borno State, demanded that the young men comply with a law requiring motorcycle passengers to wear helmets. They refused and, in the confrontation that followed, police shot and wounded several of the men.
According to initial media reports, the violence began on 26 July when Boko Haram launched an attack on a police station in Bauchi State. Clashes between militants and the Nigeria Police Force erupted in Kano, Yobe and Borno soon after. But President Umaru Yar’Adua disputed this version of events, claiming that government security forces had struck first.
"I want to emphasize that this is not an inter-religious crisis and it is not the Taliban group that attacked the security agents first, no. It was as a result of a security information gathered on their intention ... to launch a major attack," he said.
Nigerian troops surrounded the home of Ustaz Mohammed Yusuf, the founder and spiritual leader of Boko Haram since 2002, in Maiduguri on 28 July after his followers had barricaded themselves inside. On 30 July, the military captured Yusuf and transferred him to the custody of the police. They summarily executed him in public outside police headquarters.
Islam Online suggests that politics, not religion, was the cause of the violence. People such as Christian pastor George Orjih were murdered specifically because they refused to convert to Islam.
Prior to the clashes, many local Muslim leaders and at least one military official had warned the Nigerian authorities about the Boko Haram sect. Those warnings were reportedly ignored.


== Bauchi, Bauchi State ==
On 26 July, 2002, more than 50 people were killed and several dozen were injured in Bauchi when a firefight erupted as a police station was attacked by 70 Nigerian Boko Haram sect members, who were armed with grenades and small arms. One government soldier and 32 Boko Haram militants were killed in the aftermath of the initial attack. The government claimed that 39 militants had been killed and confirmed the death of a soldier. The attack was initiated by Boko Haram after their leaders were detained by the police. Security forces retaliated by raiding the neighbourhoods where the group was entrenched.
Isa Yuguda, State Governor of Bauchi, commented: "We have pre-empted the militants. Otherwise the situation would have been bad. I'm calling on all the people of Bauchi to be calm and be rest assured the situation has been brought under control."
Yuguda declared a night-time curfew, and the police maintained a visible profile. Businesses remained open in the area.


== Maiduguri, Borno State ==
In July 2009, media reported that 100 bodies were found beside police headquarters in Maiduguri. Hundreds of people were leaving their homes to escape the violence. A jailbreak was reported but was not immediately confirmed. Several civilian corpses lay in the city's streets; witnesses said they had been shot after being pulled from their cars. The country's army and police were both on patrol and firing at suspects.
On 28 July, Army soldiers reportedly launched an offensive on the compound of sect leader Mohammed Yusuf and a nearby mosque used by his follower`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2009 Boko Haram uprising

*Part of the Boko Haram insurgency* conflict.`
    ),
  }),
};
const south_yemen_insurgency_tool = {
  name: "south_yemen_insurgency",
  description: `Conflict name: South Yemen insurgency
Start date: 2009
End date (if applicable): Ongoing

Description: Page: South Yemen insurgency
Summary: The South Yemen insurgency is a term used by the Yemeni government to describe the protests and attacks on government forces in southern Yemen, ongoing since 27 April 2009. Although the violence has been blamed on elements within the southern secessionist movement, leaders of the group maintain that their aims of independence are to be achieved through peaceful means, and claim that attacks are from ordinary citizens in response to the government's provocative actions. The insurgency comes amid the Shia insurgency in the country's north as led by the Houthi communities. Southern leaders led a brief, unsuccessful secession in 1994 following unification. Many of them are involved in the present secession movement. Southern separatist insurgents are active mainly in the area of former South Yemen, but also in Ad Dali' Governorate, which was not a part of the independent southern state. They are supported by the United Arab Emirates, even though the UAE is a member of the Saudi Arabian-led coalition working to support the Yemeni government.


== Insurgents ==
The political movement behind the so-called 'insurgency' is a group called the Southern Movement. Led by exiled South Yemeni leaders and opposition figures, this group calls for peaceful protests. However, their protests have recently often turned into riots, some with armed fighters. The insurgency has occasionally been linked by the Yemeni government to Islamist groups, including ex-military commanders and South-Yemeni tribes. South Yemen is home to several jihadist movements, some of which are believed to be affiliated with al-Qaeda, most notably a group called the Aden-Abyan Islamic Army. Naser al-Wahishi the leader of al-Qaeda in the Arabian Peninsula expressed support for the South Yemeni separatist movement. However leaders of the Southern Movement were quick to deny any links with al-Qaeda. Many believe that Saleh's government used al-Qaeda as a means to win international support against insurgencies in the North and South. As a response to such accusations, Tariq al-Fadhli - one of the leaders of the southern movement - posted a video of himself on YouTube raising the American flag with the national anthem over his compound in an attempt to openly distance himself from Al-Qaeda.
There are many leaders within the movement, including Fadi Hassan Ahmed Baoum who is head of the Southern Movement's Supreme Council. He was arrested and later released by Yemeni authorities. Meanwhile, Tahir Tamah has been said to be behind the group's militant faction.


== Timeline ==


=== 2009–2011 insurgency ===
2009
April 2009
28 April 2009, 14 people are injured and 1 soldier is killed as separatist militants attack a checkpoint in Mukalla; this was the 7th soldier to be killed in South Yemen secessionist violence.
May 2009
3 May 2009, one man is killed and 4 are injured in a bomb blast carried out by separatist militia.
4 May 2009, armed South-Yemeni protesters ambushed a military base in the south, killing 1 soldier.
June 2009
8 June 2009, 2 people were killed and 4 were wounded during protests in the South, bringing total casualties to 11 soldiers and 11 others killed.
July 2009
25 July 2009, 1 person was killed and 4 injured as protesters clash with police in Dhaleh.
28 July 2009, 4 Yemeni soldiers are killed as armed men attack a government checkpoint in the south. It was said supporters of Tareq al-Fadhli, an Islamist leader who called for protests in response for the death of 16 people at a separatist rally, were responsible
October 2009
25 October 2009, gunmen ambushed a vehicle carrying the body of a soldier killed in Sa'dah, the ambush kills 2 soldiers and injures 3.
November 2009
1 November 2009, armed rebels attack the headquarters of security corps in Abyan Governorate, killing 1 soldier and kidnapping  Deputy Governor of Abyan, Adel Hamoud al-Sabri.
2010
January 2010
24 January 2010, in the southern province of Shabwa, in Yemen, thre`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the South Yemen insurgency conflict.`
      ),
  }),
};
const operation_scorched_earth_tool = {
  name: "operation_scorched_earth",
  description: `Conflict name: Operation Scorched Earth

*Part of the Houthi insurgency in Yemen*
Start date: 2009
End date (if applicable): 2010

Description: Page: Operation Scorched Earth
Summary: Operation Scorched Earth (Arabic: عملية الأرض المحروقة) was the code-name of a Yemeni military offensive in the Saada Governorate that began in August 2009. It marked the fifth wave of violence during the ongoing insurgency by the Houthis against the government. In November 2009, the conflict spread across the border into neighboring Saudi Arabia. This conflict led to the Saudi military's incursion into Yemen, marking the first military operation conducted by Saudi Arabia since 1991.


== Background ==
Skirmishes and clashes between the two sides began in June 2009, when nine foreigners were abducted during a picnic in the Saada Governorate. Three bodies were found which belonged to a South Korean teacher and two German nurses. In addition, two German children were freed in May 2010 by Saudi and Yemeni forces. The remaining party members are still missing, and their current status is unknown. It remains unclear who was behind the abduction. Initial official statements suggested Houthi rebels had seized the group. However, according to Yemen's news agency, Houthi rebels accused drug cartels of the kidnapping and the three subsequent murders. A spokesman for the insurgents accused regional tribes of being responsible for the kidnappings and slayings.
A government committee criticized the fighters for not abiding by an agreement to end hostilities announced by the Yemeni president in July 2008. In July and early August 2009, local officials said the fighters had taken control of parts of the Saada Governorate, including a vital army post near the province's capital.


== Operation ==


=== August–September, 2009 ===
After the government promised to adopt an "iron fist" policy against the rebels, Yemeni troops backed by tanks and fighter aircraft launched a major offensive on rebel strongholds on 11 August 2009. Air, artillery, and missile attacks targeted the Malaheedh, Mahadher, Khafji, and Hasama districts, including the headquarters of the rebel leader Abdul-Malik al-Houthi.
After two days of bombardment, the Yemeni government offered ceasefire terms to the rebels, which included demands for information on the six hostages who disappeared back in June. The rebels rejected the terms, and the fighting continued. After three weeks, the provincial capital Sa'dah was further cut off. Mobile landlines were suspended after the Houthis shelled a communications tower in the neighboring Amran province. The rebels held out in Sa'dah neighborhoods and old mountain fortresses around the city.
In September, the first of many ceasefires was agreed. The Yemeni army pushed to secure the road that links Sa'dah to Harf Sufyan, launching salvos of shells to "demine" and "remove bombs" for humanitarian convoys. On 17 September, an airstrike claimed the lives of more than 80 people in a camp for displaced people in the 'Amran Governorate'. On the same day, rebels and government forces also saw massive military action around Sa'dah. Yemeni press releases and military officials claimed that several Houthi leaders were among the dead.


=== Eid attacks ===
Another ceasefire was agreed on 19 September in commemoration of the Islamic holiday, Eid ul-fitr. The government announced on state television that the ceasefire would go into effect for three days, with the possibility of becoming a permanent ceasefire upon certain conditions being met. The Houthis responded by saying they would abide by the ceasefire in exchange for prisoners, some of which they claimed had been held for years.
However, both sides claimed that the other had not laid down arms. The Houthis asserted that the government continued air and rocket attacks. In contrast, the government claimed the Houthis launched attacks in the Amran and Saada provinces. A Human Rights Watch report noted how the Houthis attacked the village of Mudaqqa on 16 September, prompting a government response.
The next day, the rebels attacked Sa'dah from three directions i`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Operation Scorched Earth

*Part of the Houthi insurgency in Yemen* conflict.`
    ),
  }),
};
const _2010_south_kyrgyzstan_ethnic_clashes_tool = {
  name: "_2010_south_kyrgyzstan_ethnic_clashes",
  description: `Conflict name: 2010 South Kyrgyzstan ethnic clashes
Start date: 2010
End date (if applicable): 2010

Description: Page: 2010 South Kyrgyzstan ethnic clashes
Summary: The 2010 South Kyrgyzstan ethnic clashes (Kyrgyz: Ош коогалаңы; Uzbek: Qirgʻiziston janubidagi tartibsizliklar, Қирғизистон жанубидаги тартибсизликлар; Russian: Беспорядки на юге Киргизии) were clashes between ethnic Kyrgyz and Uzbeks in southern Kyrgyzstan, primarily in the cities of Osh and Jalal-Abad, in the aftermath of the ouster of former President Kurmanbek Bakiyev on 7 April. It is part of the larger Kyrgyz Revolution of 2010. Violence that started between Kyrgyz and Uzbeks on 19 May in Jalal-Abad escalated on 10 June in Osh.
The spreading of the violence required the Russian-endorsed interim government led by Roza Otunbayeva to declare a state of emergency on 12 June, in an attempt to take control of the situation. Uzbekistan launched a limited troop incursion early on, but withdrew and opened its borders to Uzbek refugees. The clashes killed nearly 420 people, mostly Uzbeks, and displaced another 80,000.


== Background ==


=== Soviet period ===
After national delimitation in the Soviet Union (1917-mid-1930s), the peoples of Central Asia began a process of ethnogenesis in which they began to define themselves as "Kyrgyz" or "Turkmen", rather than with reference to their religion or locality. The people defined by Soviet ethnographers as Kyrgyz were generally nomadic, and the people defined as Uzbek, sedentary.
Following the dissolution of the Soviet Union, the Kyrgyz president Askar Akayev suppressed Kyrgyz ethnic nationalism, favoring Pan-Islamic and Pan-Turkic unity until he was overthrown in the 2005 Tulip Revolution.


=== 1990 violence ===

In June 1990, a violent land dispute between the Kyrgyz and Uzbeks erupted in the city of Osh. A group of Kyrgyz demanded that a predominantly Uzbek collective farm be allocated to them to build housing. Uzbek activists objected and violent clashes between the two ethnic groups ensued. Until groups of Kyrgyz came from the surrounding villages, the Uzbeks had the upper hand. A state of emergency and curfew were introduced and the border between the Uzbek and Kyrgyz republics was closed. Soviet troops were deployed to stop the violence. Order was not restored until August. Official estimates of the death toll range from over 300 to more than 600. Unofficial figures range up to more than 1,000.


=== Anti-Uzbek sentiments ===
In southern Kyrgyzstan, ethnic Uzbeks have been highly active in the local economy, especially in trade and services, and more recently also in agriculture. In Kyrgyz public opinion, wealthy Uzbek Kyrgyzstani leaders such as Qodirjon Botirov have attempted to turn this economic clout into political power, promoting a militant Uzbek nationalism which demands official Uzbek language status in Kyrgyzstan, and a number of seats reserved solely for Uzbeks in the Kyrgyz parliament. The Kyrgyz also think that Uzbeks are "growing wealthy off the backs of the pauperized Kyrgyz" and seeking to destroy Kyrgyzstan's unity with their calls for linguistic and political autonomy.

At the same time, the cities of Kyrgyzstan have received a mass influx of young Kyrgyz people from rural areas who, having difficulty finding work and permanent housing, are likely to become involved in criminal gangs. Decisions about ethnic problems are not taking place at the government level, as their very existence is not recognized and, moreover, virtually all administrative positions are held by ethnic Kyrgyz.
Many Uzbeks say ousted President Kurmanbek Bakiyev favored Kyrgyz people. Many Kyrgyz in the south strongly supported Bakiyev, even after he was overthrown. Currently Bakiyev is in exile in Belarus. Bakyt Beshimov noted that after 7 April uprising the interim government was unable to control the situation in Kyrgyzstan, paving the way for major disturbances. "Ruthless" struggle for power was noted by him as a major cause.
Many Kyrgyz feel that their sovereignty is threatened by their neighbor Uzbekistan, and Kyrgyz media often repo`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2010 South Kyrgyzstan ethnic clashes conflict.`
      ),
  }),
};
const _2010_kingston_unrest_tool = {
  name: "_2010_kingston_unrest",
  description: `Conflict name: 2010 Kingston unrest

*Part of the Jamaican political conflict*
Start date: 2010
End date (if applicable): 2010

Description: Page: 2010 Kingston unrest
Summary: The 2010 Kingston unrest, dubbed locally the Tivoli Incursion, was an armed conflict between Jamaica's military and police forces in the country's capital Kingston, and the Shower Posse drug cartel. The conflict began on 23 May 2010 as security forces began searching for Christopher "Dudus" Coke, a major drug lord, after the United States requested his extradition, and the leader of the criminal gang that attacked several police stations. The violence, which largely took place over 24–25 May,  killed at least 73 civilians and wounded at least 35 others. Four soldiers and police were also killed and more than 500 arrests were made, as Jamaican police and soldiers fought gunmen in the Tivoli Gardens district of Kingston.
Much of the unrest happened in the constituency of the then Prime Minister of Jamaica, Bruce Golding, who said he was "taken aback" by its scale. He was described by the American Broadcasting Company (ABC) as a "known criminal affiliate" of Coke; Golding retorted that this was "extremely offensive". Although the U.S. government considered Golding one of Coke's associates, it said it supported the Jamaican government's attempt to capture Coke.
When prompted as to his whereabouts three days after the mission was launched, police stated they did not know where Coke was. Coke was eventually captured on 23 June, after initial rumors that he was attempting to surrender to the United States. Kingston police arrested him on the outskirts of the city, apparently while a local reverend, Reverend Al Miller, was helping negotiate Coke's surrender to the United States Embassy.


== Background ==


=== History of Shower Posse ===
Lester 'Jim Brown' Coke was the father of Christopher Coke and leader of the Shower Posse gang. The gang gained traction due to material support from the CIA, which would give arms to gangsters supportive of the Jamaican Labour Party in the Jamaican political conflict, such as Shower Posse. After his father's mysterious death in the 1990s, Christopher Coke took over the leadership of Shower Posse and its political garrison in Tivoli Gardens.


=== Manatt, Phelps, & Phillips and Christopher "Dudus" Coke extradition request ===
In a sitting of Parliament on 16 March 2010, Opposition member Dr. Peter Phillips made reference to an alleged contractual arrangement between the Government and a United States law firm Manatt, Phelps & Phillips to lobby the US Government on a treaty dispute between the two countries that had arisen as a result of the Jamaican Government refusing to sign the extradition request for Christopher 'Dudus' Coke, who was wanted in the US on charges relating to narcotics, arms and ammunition trafficking. The Golding Administration refused to sign the extradition request on the claimed basis that the evidence was obtained contrary to Jamaican laws. Golding denied claims that Manatt, Phelps & Phillips was contracted to represent the Jamaican Government.
A US Justice Department filing under the Foreign Agents Registration Act (FARA) showed that Manatt, Phelps & Phillips had secured a contract worth US $400,000 to represent the Jamaican government in the treaty dispute. Karl Samuda, Minister of Industry, Investment and Commerce, made a statement in which he noted that unnamed members of the Jamaica Labour Party had approached Harold Brady, to see whether—through his wide network of international contacts—he could assist in facilitating the opening of discussions between the US authorities and the Government of Jamaica, and thereby seek to resolve what had become a treaty dispute between the US and Jamaica. In a statement made by Golding on 11 May 2010 in Parliament, he revealed that he had sanctioned the initiative to lobby the US Government but that the initiative was to be undertaken by the Jamaica Labour Party and not on behalf of the government.
Following his revelation, the Opposition People's National Party; its youth arm, the PNPYO; and the Natio`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2010 Kingston unrest

*Part of the Jamaican political conflict* conflict.`
    ),
  }),
};
const tajikistan_insurgency_tool = {
  name: "tajikistan_insurgency",
  description: `Conflict name: Tajikistan insurgency
Start date: 2010
End date (if applicable): 2015

Description: Page: Insurgency in Gorno-Badakhshan (2010–2015)
Summary: The insurgency in the Gorno-Badakhshan region in Tajikistan from 2010 to 2015 was an armed conflict between the Tajik Army and Islamist militants, led by numerous leaders from the Tajikistani Civil War. The conflict evolved in 2010 and climaxed in 2012, with the defeat of main rebel forces. Other incidents took place in September 2015, when former deputy defense minister Abduhalim Nazarzoda led an armed uprising, suspected of ties to the Islamic Renaissance Party.


== Insurgency ==


=== 2010 Rasht Valley offensive ===
On 19 September, more than 25 Tajik soldiers were killed in an ambush by suspected Islamist fighters, allied with the Islamic movement of Uzbekistan. The soldiers were part of a 75-man convoy moving through the Rasht Valley, in eastern Tajikistan. They were ambushed while searching for members of the Islamic Movement of Uzbekistan who previously escaped from a detention prison in Dushanbe on 25 August. The military column was ambushed by gunmen around midday local time, while passing through the mountainous Rasht Valley, approximately 250 km (150 miles) east of the capital. The column sustained heavy fire from machine-guns and grenade launchers, in the mountains from above. Initial reports indicated that 40 soldiers were killed but the Tajik minister of defense denied this. Five Tajik officers were among the dead. None of the attackers were reported to have been killed or wounded.

On 4 October, five Tajik soldiers along with two insurgents were killed during a military operation in Rasht Valley. The incident occurred when a vehicle was stopped at a military checkpoint on the road between Garm and Dushanbe. As the soldiers approached the car, gunmen opened fire killing five of them and wounding three more. The soldiers retaliated opening fire at the vehicle, killing the two attackers. Among the dead was a high-ranked Tajik officer. Meanwhile, dozens of caches of heavy weapons including grenade launchers, as well as food and medication, were discovered in an abandoned Islamist hideout. Twelve military checkpoints were set on the roads leading from the administered region of Rasht to the capital Dushanbe.
On 7 October, 28 servicemen from the Presidential National Guard were killed when their helicopter crashed during an operation in Rasht Valley near the towns of Ezgand and Tavildara. The helicopter became caught in power lines and crashed while attempting to land, leaving no survivors. The helicopter was bringing service men from the capital Dushanbe to the Rasht Valley to take part in the operation.
The same day, 6 other soldiers were killed in a separate incident caused by an accidental mine explosion.
On 18 October, three suspected insurgents were killed by Tajik soldiers on the outskirts of Garm, located near the Afghan border during a military operation.
On 1 December, gunmen shot and killed 3 Tajik soldiers in the village of Dulona-Maidon in the Buljuvon Region, 150 kilometers southeast of Dushanbe.
On 27 December, 2 Tajik soldiers were killed when a group of thirty Islamists tried to enter Tajikistan from the Afghan border. After three hours of fighting, a combat helicopter arrived, opening fire on the intruders forcing them to retreat into Afghanistan. Local residents said that three Tajik soldiers were killed with two being the victims of friendly-fire from the helicopter. The Tajik military however claims no one was killed by friendly fire. Several Islamists were also killed in the attack.


=== 2011 ===
On 4 January, Tajik authorities claimed Alovuddin Davlatov was killed along with seven other insurgents when Tajik security forces launched a special joint operation on his hideout in the town of Runob.
On 14 April, Mullah Abdullah a key opposition commander, along with ten other Islamists were killed by Tajik soldiers during a search operation for militants in the village of Samsolid, 135 kilometers east of Dushanbe.


=== 2012 ===

On 21 July,`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Tajikistan insurgency conflict.`
      ),
  }),
};
const second_ivorian_civil_war_tool = {
  name: "second_ivorian_civil_war",
  description: `Conflict name: Second Ivorian Civil War
Start date: 2010
End date (if applicable): 2011

Description: Page: Second Ivorian Civil War
Summary: The Second Ivorian Civil War broke out in March 2011 when the crisis in Ivory Coast escalated into full-scale military conflict between forces loyal to Laurent Gbagbo, the President of Ivory Coast since 2000, and supporters of the internationally recognised president-elect Alassane Ouattara. After months of unsuccessful negotiations and sporadic violence between supporters of the two sides, the crisis entered a critical stage as Ouattara's forces seized control of most of the country with the help of the UN, with Gbagbo entrenched in Abidjan, the country's largest city. International organizations have reported numerous instances of human rights violations by both sides, in particular in the city of Duékoué where Ouattara's forces killed hundreds of people. Overall casualties of the war are estimated around 3000. The UN and French forces took military action, with the stated objective to protect their forces and civilians. France's forces arrested Gbagbo at his residence on 11 April 2011.


== Background ==
A civil war was fought in Ivory Coast between 2002 and 2004 between the incumbent President Laurent Gbagbo and the rebel Forces Nouvelles de Côte d'Ivoire (New Forces), representing Muslim northerners who felt that they were being discriminated against by the politically dominant and mostly Christian southerners.
In 2002 France sent its troops to Ivory Coast (Opération Licorne) as peacekeepers. In February 2004 the United Nations established the United Nations Operation in Côte d'Ivoire (UNOCI) "to facilitate the implementation by the Ivorian parties of the peace agreement signed by them in January 2003". Most of the fighting ended by late 2004, with the country split between a rebel-held north and a government-held south. In March 2007 the two sides signed an agreement to hold fresh elections, though they ended up being delayed until 2010, five years after Gbagbo's term of office was supposed to have expired.
After northern candidate Alassane Ouattara was declared the victor of the 2010 Ivorian presidential election by the country's Independent Electoral Commission (CEI), the President of the Constitutional Council – an ally of Gbagbo – declared the results to be invalid and that Gbagbo was the winner. Both Gbagbo and Ouattara claimed victory and took the presidential oath of office.
The international community, including the United Nations, the African Union, the Economic Community of West African States (ECOWAS), the European Union, the United States, and former colonial power France affirmed their support for Ouattara, who was "almost universally acknowledged to have defeated [Gbagbo] at the ballot box," and called for Gbagbo to step down. On 18 December, Gbagbo ordered all UN peacekeepers to leave the country. The UN refused and the UN Security Council extended the mandate of the UN Mission in Ivory Coast until 30 June 2011. However, negotiations to resolve the dispute failed to achieve any satisfactory outcome. Hundreds of people were killed in escalating violence between pro-Gbagbo and pro-Ouattara partisans and at least a million people fled, mostly from Abidjan.


== Conflict ==
After the disputed election, sporadic outbreaks of violence took place, particularly in Abidjan, where supporters of Ouattara clashed repeatedly with government forces and militias. Gbagbo's forces were said to be responsible for a campaign of assassinations, beatings and abductions directed against Ouattara's supporters.
The violence escalated through March 2011 with a number of incidents in Abidjan in which dozens of people were reported killed. In one of the deadliest single incidents, up to 30 people were killed on 17 March in a rocket attack on a pro-Ouattara suburb of Abidjan. The UN issued a statement saying that the shelling was "an act, perpetrated against civilians, [that] could constitute a crime against humanity." 52 people were killed in further violence in Abidjan Between 21 and 26 March`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Second Ivorian Civil War conflict.`
      ),
  }),
};
const sinai_insurgency_tool = {
  name: "sinai_insurgency",
  description: `Conflict name: Sinai insurgency
Start date: 2011
End date (if applicable): 2023

Description: Page: Sinai insurgency
Summary: The Sinai insurgency was an insurgency in the Sinai Peninsula of Egypt, launched by Islamist militants against Egyptian security forces, which have also included attacks on civilians. The insurgency began during the Egyptian Crisis, during which the longtime Egyptian president Hosni Mubarak was overthrown in the 2011 Egyptian revolution.
The insurgency initially consisted of militants, largely composed of local Bedouin tribesmen, who exploited the chaotic situation in Egypt and weakened central authority to launch a series of attacks on government forces in Sinai. In 2014, elements of the Ansar Bait al-Maqdis group pledged allegiance to the Islamic State of Iraq and the Levant (ISIL, or ISIS) and proclaimed themselves Sinai Province, with some security officials stating that militants based in Libya established ties with the Sinai Province group and blaming the porous border and ongoing civil war for the increase in sophisticated weapons available to the Islamist groups.
Egyptian authorities attempted to restore their presence in the Sinai through both political and military measures. The country launched two military operations, known as Operation Eagle in mid-2011 and Operation Sinai in mid-2012. In May 2013, following an abduction of Egyptian officers, violence in the Sinai surged once again. Following the overthrow in July 2013 of Egyptian president Mohamed Morsi, "unprecedented clashes" occurred.
The fallout suffered by locals as a result of the insurgency ranges from militant operations and a state of insecurity to extensive military operations and the demolishing of hundreds of homes, leading to the evacuation of thousands of residents as Egyptian troops pressed on to build a buffer zone meant to halt the smuggling of weapons and militants from and to the Gaza Strip. A report, compiled by a delegation from the state-funded National Council for Human Rights (NCHR), stated that most of the displaced families share the same grievances of palpable government negligence, unavailability of nearby schools, and a lack of health services. Since the start of the conflict, dozens of civilians were killed, either in military operations or kidnapped and then beheaded by militants. In November 2017, more than 300 Sufist worshippers were killed and over 100 injured in a terrorist attack on a mosque west of the city of Al-Arish.


== Background ==
Sufism was previously dominant in the region before militant jihadi ideas began to take hold. The Sinai Peninsula has long been known for its lawlessness, historically, it has served as a route for the smuggling of weapons and supplies. Security provisions in the Egypt–Israel peace treaty of 1979 have mandated a diminished security presence in the area, enabling militants to operate with a freer hand. Moreover, the limited government-directed investment and development in Sinai has discriminated against the local Bedouin population, a population that values tribal allegiance over all else. The combination of Sinai's harsh terrain and its lack of resources have kept the area poor and hence, it is ripe for militancy.
Following the January 2011 uprising that toppled Hosni Mubarak's regime, the country became increasingly destabilized, creating a security vacuum in the Sinai Peninsula. Radical Islamic elements in Sinai exploited the opportunity, using the region's unique environment, they launched several waves of attacks against Egyptian military and commercial facilities.
According to The Economist, the conflict also involves local armed Bedouins "who have long-standing grievances against the central government in Cairo" and that "they are barred from joining the army or police; they find it hard to get jobs in tourism; and they complain that many of their lands have been taken from them".


== Timeline ==


=== 2011–2012 ===
Since the 2011 uprising against the Mubarak regime in Egypt, there has been increasing instability in the Sinai Peninsula. In addition, the`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Sinai insurgency conflict.`
      ),
  }),
};
const shia_insurgency_in_bahrain_tool = {
  name: "shia_insurgency_in_bahrain",
  description: `Conflict name: Shia insurgency in Bahrain
Start date: 2011
End date (if applicable): Ongoing

Description: Page: Insurgency in Bahrain
Summary: The insurgency in Bahrain is an ongoing insurgency by militant groups, part of the Bahraini Opposition, supported by Iran, to topple government of Bahrain.


== Timeline ==


=== 2011 ===
The insurgency began in 2011, with the start of the Bahraini uprising of 2011.


=== 2012 ===
On 10 April 2012, a bomb attack injured seven policemen in Akr.
On 5 November 2012, at least five homemade bombs exploded in the nation's capital, killing 2 Asian workers and injuring another.


=== 2013 ===
On 12 July 2013, a home-made bomb wounded Bahraini policemen outside the Shiite village, according to the interior ministry. State-media claimed it was "planted by terrorists" near the capital, Manama.


=== 2014 ===
On 15 February 2014, one policeman was killed in a bombing.
On 3 March 2014, three policeman were killed in a bombing by Al-Ashtar Brigades, including an Emirati officer, in the 2014 Daih bombing.
On 19 April 2014, two men were killed and another injured after their car exploded. They were suspected to be militants transporting explosives.
On 5 July 2014, policeman Mahmud Farid was killed in a bombing in Eker village.


=== 2015 ===
On 28 July 2015, a bomb killed two policemen and wounded six in Sitra in the 2015 Sitra bombing.


=== 2016 ===
On 30 June 2016, 1 person was killed and 3 injured after a roadside bombing. 2 people were arrested who were suspected of planting the bomb. Bahrain accused Iran's Revolutionary Guards for being behind the bombing, although this is only an accusation, and does not rule out the possibility of terrorism. U.S. Vice President Joe Biden expressed his concerns after the attack. The bombing was described as a "terrorist bombing".
On 1 July 2016, one woman was killed and three children injured in a bombing.


=== 2017 ===
On 1 January 2017, one policeman was killed and a second injured in a jailbreak conducted by four-six armed men at Jaww prison. 10 inmates convicted of terrorist offenses escaped.
On 15 January 2017, three militants (Abbas al-Samea, Sami Mushaima and Ali al-Singace) were executed for the 3 March 2014 bombing.
On 29 January 2017, a police officer in Bahrain was shot dead in an attack claimed by a Shi'ite militant group.
On 18 June 2017, a member of the security forces was killed and two others were wounded after a bombing in Diraz.
On 19 June, a Shia militant accidentally blew himself up with an improvised explosive device.
In June 2017, Saraya al-Mukhtar performs a cyberattack on a former government official's Twitter account.
On 2 October 2017, five policemen were injured in a bombing in the village of Daih on Budaiya road.
On 27 October 2017, one policeman was killed and eight wounded in a bombing of a bus near the Jidhafs area.
On 10 November 2017, a bomb caused a fire at Bahrain's main pipeline near Buri village.


=== 2018 ===
On 7 February 2018, four members of the cell behind the bomb attack on the oil pipeline were arrested.
On 3 March 2018, 116 militants who were part of cells established by the Islamic Revolutionary Guard Corps were arrested.


=== 2019 ===
On 27 July 2019, two alleged militants were executed by the state on charges of terrorism. Both were allegedly involved in the January 1, 2017 killing of a prison guard that helped let 10 detainees escape, as well as the for the killings of two other police officers that month. The two were arrested in February 2017.


=== 2020 ===
On 15 December 2020, the United States Treasury added the Saraya Al-Mukhtar (aka. Bahraini Islamic Resistance, aka. Al-Mukhtar Brigades, etc.) to the Specially Designated Nationals list, subjecting it to economic sanctions imposed by the United States. The sanctions were imposed due to their connections with Iran.


=== 2021 ===
In November the Bahraini government says it has foiled an attempted attack by insurgents.


=== 2022 ===


=== 2023 ===


=== 2024 ===
27 April: Al-Ashtar Brigades conducted a drone attack against the offices of an Israeli company in `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Shia insurgency in Bahrain conflict.`
      ),
  }),
};
const first_libyan_civil_war_tool = {
  name: "first_libyan_civil_war",
  description: `Conflict name: First Libyan Civil War
Start date: 2011
End date (if applicable): 2011

Description: Page: Libyan civil war (2011)
Summary: The Libyan civil war, also known as the First Libyan Civil War, was an armed conflict in 2011 in the North African country of Libya that was fought between forces loyal to Colonel Muammar Gaddafi and rebel groups that were seeking to oust his government. The war was preceded by protests in Zawiya on 8 August 2009 and finally ignited by protests in Benghazi beginning on Tuesday 15 February 2011, which led to clashes with security forces who fired on the crowd. The protests escalated into a rebellion that spread across the country, with the forces opposing Gaddafi establishing an interim governing body, the National Transitional Council.
The United Nations Security Council passed an initial resolution on 26 February, freezing the assets of Gaddafi and his inner circle and restricting their travel, and referred the matter to the International Criminal Court for investigation. In early March, Gaddafi's forces rallied, pushed eastwards and re-took several coastal cities before reaching Benghazi. A further UN resolution authorised member states to establish and enforce a no-fly zone over Libya, and to use "all necessary measures" to prevent attacks on civilians, which turned into a bombing campaign by the forces of NATO against Libyan military installations and vehicles. The Gaddafi government then announced a ceasefire, but fighting and bombing continued. Throughout the conflict, rebels rejected government offers of a ceasefire and efforts by the African Union to end the fighting because the plans set forth did not include the removal of Gaddafi.
In August, rebel forces launched an offensive on the government-held coast of Libya, backed by a wide-reaching NATO bombing campaign, taking back territory lost months before and ultimately capturing the capital city of Tripoli, while Gaddafi evaded capture and loyalists engaged in a rearguard campaign. On 16 September 2011, the National Transitional Council was recognised by the United Nations as the legal representative of Libya, replacing the Gaddafi government. Muammar Gaddafi evaded capture until 20 October 2011, when he was captured and killed in Sirte. The National Transitional Council declared "the liberation of Libya" and the official end of the war on 23 October 2011.
In the aftermath of the civil war, a low-level insurgency by former Gaddafi loyalists continued. There were various disagreements and strife between local militias and tribes, including fighting on 23 January 2012 in the former Gaddafi stronghold of Bani Walid, leading to an alternative town council being established and later recognized by the National Transitional Council (NTC). Madkhalism had become influential among many militias, leading to further division. A much greater issue had been the role of militias which fought in the civil war and their role in Libya's new dispensation. Some refused to disarm, and cooperation with the NTC had been strained, leading to demonstrations against militias and government action to disband such groups or integrate them into the Libyan military. These unresolved issues led directly to a second civil war in Libya.


== Background ==


=== Leadership ===
Muammar Gaddafi was the head of the Free Officers Movement, a group of Arab nationalists that deposed King Idris I in a bloodless coup d'état in 1969. He abolished the Libyan Constitution of 1951, branding it a neocolonial document. From 1969 until 1975, standards of living, life expectancy and literacy grew rapidly. In 1975, he published his manifesto The Green Book. He officially stepped down from power in 1977, and subsequently claimed to be merely a "symbolic figurehead" until 2011, with the Libyan government up until then also denying that he held any power.
Under Gaddafi, Libya was theoretically a decentralized, direct democracy state run according to the philosophy of Gaddafi's The Green Book, with Gaddafi retaining a ceremonial position. Libya was officially run by a system of peop`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the First Libyan Civil War conflict.`
      ),
  }),
};
const syrian_civil_war_tool = {
  name: "syrian_civil_war",
  description: `Conflict name: Syrian civil war
Start date: 2011
End date (if applicable): Ongoing

Description: Page: Syrian civil war
Summary: The Syrian civil war is an ongoing multi-sided conflict in Syria involving various state-sponsored and non-state actors.
In March 2011, popular discontent with the rule of Bashar al-Assad triggered large-scale protests and pro-democracy rallies across Syria, as part of the wider Arab Spring protests in the region. After months of crackdown by the government's security apparatus, various armed rebel groups such as the Free Syrian Army began forming across the country, marking the beginning of the Syrian insurgency. By mid-2012, the crisis had escalated into a full-blown civil war.
Receiving arms from NATO and GCC states, rebel forces initially made significant advances against the government forces, who were receiving arms from Iran and Russia. Rebels captured the regional capitals of Raqqa in 2013 and Idlib in 2015. Consequently, in September 2015, Russia launched a military intervention in support of the government, shifting the balance of the conflict. By late 2018, all rebel strongholds, except parts of Idlib region, had fallen to the government forces.
In 2014, the Islamic State group seized control of large parts of Eastern Syria and Western Iraq, prompting the U.S.-led CJTF coalition to launch an aerial bombing campaign against it, while providing ground support to the Kurdish-majority Syrian Democratic Forces. Culminating in the Battle of Raqqa, the Islamic State was territorially defeated by late 2017. In August 2016, Turkey launched a multi-pronged invasion of northern Syria, in response to the creation of Rojava, while also fighting Islamic State and government forces in the process. Since the March 2020 Idlib ceasefire, the frontline fighting during the conflict has mostly subsided, and has been characterized by regular skirmishes.


== Overview ==


=== Origins of war ===

In March 2011, popular discontent with the Ba'athist government led to large-scale protests and pro-democracy rallies across Syria, as part of the wider Arab Spring protests in the region. Numerous protests were violently suppressed by security forces in deadly crackdowns ordered by Bashar al-Assad, resulting in tens of thousands of deaths and detentions. The Syrian revolution transformed into an insurgency with the formation of resistance militias across the country, deteriorating into a full-blown civil war by 2012.


=== Course of events ===
The war is fought by several factions. The Syrian Arab Armed Forces, alongside its domestic and foreign allies, represent the Syrian Arab Republic and Assad government. Opposed to it is the Syrian Interim Government, a big-tent alliance of pro-democratic, nationalist opposition groups (whose military forces consist of the Syrian National Army and allied Free Syrian militias). Another opposition faction is the Syrian Salvation Government, whose armed forces are represented by a coalition of Sunni militias led by Tahrir al-Sham. Independent of them is the Autonomous Administration of North and East Syria, whose military force is the Syrian Democratic Forces (SDF), a multi-ethnic, Arab-majority force led by the Kurdish YPG. Other competing factions include Jihadist organizations such as the al-Qaeda-branch Hurras al-Din (successor of Al-Nusra Front) and the Islamic State (IS).
A number of foreign countries, such as Iran, Russia, Turkey and the United States, have been directly involved in the civil war, providing support to opposing factions in the conflict. Iran, Russia and Hezbollah support the Syrian Arab Republic militarily, with Russia conducting airstrikes and ground operations in the country since September 2015. Since 2014, the U.S.-led international coalition has been conducting air and ground operations primarily against the Islamic State and occasionally against pro-Assad forces, and has been militarily and logistically supporting factions such as the Revolutionary Commando Army and the Autonomous Administration's Syrian Democratic Forces (SDF). Turkish forces curren`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Syrian civil war conflict.`
      ),
  }),
};
const sudanese_conflict_in_south_kordofan_and_blue_nile_tool = {
  name: "sudanese_conflict_in_south_kordofan_and_blue_nile",
  description: `Conflict name: Sudanese conflict in South Kordofan and Blue Nile
Start date: 2011
End date (if applicable): 2020

Description: Page: Sudanese conflict in South Kordofan and Blue Nile
Summary: The Sudanese conflict in South Kordofan and Blue Nile was an armed conflict in the Sudanese states of South Kordofan and Blue Nile between the Sudanese Armed Forces (SAF) and the Sudan People's Liberation Movement–North (SPLM-N), a northern affiliate of the Sudan People's Liberation Movement (SPLM) in South Sudan. After some years of relative calm following the 2005 agreement which ended the second Sudanese civil war between the Sudanese government and SPLM rebels, fighting broke out again in the lead-up to South Sudan independence on 9 July 2011, starting in South Kordofan on 5 June and spreading to the neighboring Blue Nile state in September. SPLM-N, splitting from newly independent SPLM, took up arms against the inclusion of the two southern states in Sudan with no popular consultation and against the lack of democratic elections. The conflict is intertwined with the War in Darfur, since in November 2011 SPLM-N established a loose alliance with Darfuri rebels, called Sudan Revolutionary Front (SRF).
As of October 2014, some two million people have been affected by the conflict, with more than 500,000 having been displaced and about 250,000 of them fleeing to South Sudan and Ethiopia. In January 2015, fighting intensified as Omar al-Bashir's government tried to regain control of rebel-held territory ahead of April 2015 general elections.
With the overthrow of al-Bashir in April 2019 following months of protests, the SRF announced a three-month ceasefire, hoping to facilitate a Sudanese transition to democracy. This led to the beginning of peace negotiations between the rebels and the new interim government. The Sudanese peace process was formalised with the August 2019 Draft Constitutional Declaration, signed by military and civilian representatives during the Sudanese Revolution, that mandates that a peace agreement be made in South Kordofan and Blue Nile (and in Darfur) within the first six months of the 39-month transition period to democratic civilian government.
On 31 August 2020, a comprehensive peace agreement was signed in Juba, South Sudan, between the Sudan's transitional government and the Sudan Revolutionary Front. The Sudan People's Liberation Movement-North led by Abdelaziz al-Hilu and Sudan Liberation Movement/Army led by Abdul Wahid al-Nur refused to sign the agreement.
An agreement was reached between the transitional government and the SPLM-North al-Hilu rebel faction on 3 September 2020 in Addis Ababa to separate religion and state and not discriminate against anyone's ethnicity in order to secure the equal treatment of all citizens of Sudan. The declaration of principles stated that “Sudan is a multi-racial, multi-ethnic, multi-religious and multi-cultural society. Full recognition and accommodation of these diversities must be affirmed. (...) The state shall not establish an official religion. No citizen shall be discriminated against based on their religion.”


== Background ==

Although South Kordofan and Blue Nile are north of the Sudan–South Sudan border, many of their residents (particularly in the Nuba Mountains) identify with South Sudan with many of them having fought alongside the southern rebels during the Second Sudanese Civil War.
South Kordofan and Blue Nile were not allowed to participate in the January 2011 referendum to create South Sudan, and the "popular consultation" process they were promised also failed to take place.
According to satellite imagery, during early spring 2011, Sudan elevated dirt roads needed for tank transportation and in March 2011 it started deploying police and military installations in the area.


=== May 2011 Abyei conflict ===
In May 2011, ahead of South Sudan's scheduled independence, tensions rose around the status of the Abyei Area, an oil-rich region that was statutorily part of both South Kordofan and Northern Bahr el Ghazal states. As South Kordofan was slated to remain with Sudan while Nort`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Sudanese conflict in South Kordofan and Blue Nile conflict.`
      ),
  }),
};
const syrian_civil_war_spillover_in_lebanon_tool = {
  name: "syrian_civil_war_spillover_in_lebanon",
  description: `Conflict name: Syrian civil war spillover in Lebanon

*Part of the Syrian civil war*
Start date: 2011
End date (if applicable): 2017

Description: Page: Syrian civil war spillover in Lebanon
Summary: Between 2011 and 2017, fighting from the Syrian civil war spilled over into Lebanon as opponents and supporters of the Syrian Arab Republic traveled to Lebanon to fight and attack each other on Lebanese soil. The Syrian conflict stoked a resurgence of sectarian violence in Lebanon, with many of Lebanon's Sunni Muslims supporting the rebels in Syria, while many of Lebanon's Shi'a Muslims supporting the Ba'athist government of Bashar Al-Assad, whose Alawite minority is usually described as a heterodox offshoot of Shi'ism. Killings, unrest and sectarian kidnappings across Lebanon resulted.
The conflict arose in mid-2011, seven people were killed and 59 wounded in a fight between gunmen in Tripoli. In May 2012, the conflict spread to Beirut, and later to south and east Lebanon, while the Lebanese Armed Forces deployed in north Lebanon and Beirut. As of January 2016, there had been more than 800 fatalities and almost 3,000 injuries. Among Lebanon's political blocs, the Saudi-backed anti-Syrian March 14 Alliance supports the Syrian opposition, and the Iranian-backed pro-Syrian March 8 Alliance supports the Assad government. On 28 August 2017, the last remaining fighters of IS and Tahrir al-Sham withdrew from Lebanon.


== Background ==

Since the Cedar Revolution in 2005 and the withdrawal of the occupying Syrian forces from the country, the Lebanese political spectrum has been divided between the anti-Syrian government 14 March alliance and the pro-Syrian government 8 March alliance. The 14 March alliance, led by the mainly Sunni Muslim Future Movement, which is allied with the Maronite Christian Lebanese Forces Party, has called for Lebanese aid to the Free Syrian Army and taking a stronger stance against the Syrian government.
This has been rejected by the ruling 8 March alliance, which includes the Shia Hezbollah and allies such as the Maronite Free Patriotic Movement, among others. In August, The Jerusalem Post reported that protesters, enraged at Hezbollah's support for Syria's government, burned Hezbollah flags and images of its leader Hassan Nasrallah in several places in Syria. Pro-government protestors countered the actions by carrying posters of Nasrallah. Hezbollah states they support a process of reforms in Syria and that they are also against U.S. plots to destabilize and interfere in Syria, amid comments by U.S. Secretary of State Hillary Clinton that it should be "abundantly clear to those who support Assad [the] 'regime' [that] its days are numbered." It was reported that, "sales of black market weapons in Lebanon have skyrocketed in recent weeks due to demand in Syria." In June 2011, clashes in the Lebanese city of Tripoli between members of the Alawite minority, loyal to Syrian President Bashar al-Assad, and members of the Sunni majority left seven people dead.
Future Movement MP Okab Sakr was long suspected to be involved in aiding the insurgents in the Syrian civil war. At first he denied his involvement, but admitted it when Al Akhbar published audio tapes of him making arms deals with Syrian insurgents. Sakr later claimed the tapes were edited, and that he only provided Syrians with milk and blankets.
Sunni extremists from Tripoli have been flocking to Syria to join the terrorist Al-Nusra Front. Hezbollah fighters have been deployed to protect border towns inhabited by Lebanese Shias from the rebels.
The Lebanese Army has attempted to disassociate itself from the conflict in Syria, and to prevent clashes within Lebanon.


== Timeline ==


=== Border incidents and clashes (2011–2014) ===
From the inception of the violence that began in Syria as a result of the Arab Spring, the Syrian civil war has produced and inspired a great deal of strife and unrest among armed factions. Prior to the Battle of Arsal in August 2014, the Lebanese Army has tried to keep out of it and the violence has been mostly between various factions within the country and overt Syrian inv`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Syrian civil war spillover in Lebanon

*Part of the Syrian civil war* conflict.`
    ),
  }),
};
const ethnic_violence_in_south_sudan_2011present_tool = {
  name: "ethnic_violence_in_south_sudan_2011present",
  description: `Conflict name: Ethnic violence in South Sudan (2011–present)

*Part of the Sudanese nomadic conflicts*
Start date: 2011
End date (if applicable): Ongoing

Description: Page: Ethnic violence in South Sudan
Summary: Ethnic violence in South Sudan has a long history among South Sudan's varied ethnic groups. South Sudan has 64 tribes with the largest being the Dinka, who constitute about 35% of the population and predominate in government. The second largest are the Nuers. Conflict is often aggravated among nomadic groups over the issue of cattle and grazing land and is part of the wider Sudanese nomadic conflicts.
In 2010, Dennis Blair, the United States Director of National Intelligence, issued a warning that "over the next five years... a new mass killing or genocide is most likely to occur in southern Sudan." In April 2017, Priti Patel, the Secretary of the United Kingdom's Department for International Development, declared the violence in South Sudan as genocide.


== Background ==


=== Nomadic raiding ===

Those from the Murle and the Lou Nuer are largely nomadic cattle herders. Cattle are used as food and are used as a store of wealth. It takes 20 cows to buy a bride if a young man hopes to marry, which encourages cattle raiding. Violence between the two groups goes back generations, exacerbated by tensions over land and water. The attacks often target an entire village, burning them in their round thatched huts. Militias frequently abduct children during cattle raids, who are then forcefully adopted into the tribe. This is seen as a method, notably among the Murle, to increase the numbers of the small minority group. In past generations, attacks used machetes and sticks. However, after decades of civil war, the region is awash with guns, and young men are now armed with high-powered weapons. In 2017, local organizations said that more than 5,000 people were killed since 2011 in cattle raids in South Sudan.


=== Sudan People's Liberation Army ===
The governing party, the Sudan People's Liberation Movement (SPLM), and the army, the Sudan People's Liberation Army (SPLA), have been accused of being dominated by the Dinka. Many refer to the dominance of the Dinka as the "Dinkocracy". A Dinka lobbying group known as the "Jieng Council of Elders" is often accused of being behind hardline SPLM policies. While the army used to attract men from across tribes, during the South Sudanese Civil War, the SPLA had largely become a militia of soldiers from the Dinka stronghold of Bahr el Ghazal, home region of President Kiir and the Chief of Staff, and the army was often referred to within the country as "the Dinka army". Much of the worst atrocities committed were blamed on a group known as "Mathiang Anyoor" (Brown caterpillar) or "Dot Ke Beny" (Rescue the President), a militia of Dinka formed to protect Kiir and Paul Malong Awan, while the SPLA claim that it is just another battalion.


=== South Sudan Democratic Movement ===

The South Sudan Democratic Movement (SSDM) is a rebel group founded in 2010 by George Athor after he lost a contested election. The group also incorporates and supports other factions as part of a broad coalition of those who complain of neglect by the Dinka dominated SPLA. This notably includes those composed of ethnic minorities such as the Murle people who lead the Cobra faction and the Shilluk people who lead the Upper Nile Faction. In a strategy of co-option known as "big tent", the government often buys off community militia and pardons its leaders. Others call the use of rebellion to receive public office as "bad culture" and an incentive to rebel.


== Murle-Nuer fighting ==


=== Uror massacre (2011) ===
On 18 August 2011, an attack in Uror County, northern Jonglei was reportedly launched by Murle tribesmen after armed groups infiltrated into the Peiri and Pulchuol Districts (Payams) at about 5 a.m. The attack is believed to have been a revenge operation against the Lou Nuer tribe after an attack on the Murle the previous June in Pibor County. At least 640 people were killed and the attackers burned down over 3,400 houses and the hospital run by Médecins Sans Frontière`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Ethnic violence in South Sudan (2011–present)

*Part of the Sudanese nomadic conflicts* conflict.`
    ),
  }),
};
const operation_linda_nchi_tool = {
  name: "operation_linda_nchi",
  description: `Conflict name: Operation Linda Nchi

*Part of the Somali Civil War (2009–present)*
Start date: 2011
End date (if applicable): 2012

Description: Page: Operation Linda Nchi
Summary: Operation Linda Nchi (Swahili: Linda Nchi; "Protect the Country") was the Kenya Defence Forces' invasion of southern Somalia beginning in 2011. The Kenyan government declared the operation completed in March 2012, but its forces then joined AMISOM in Somalia.
The Kenyan government aimed to create a buffer zone between Al-Shabaab and instability in southern Somalia, and the Kenyan homeland. However, at a deeper level, the Kenyans desired "to be seen as a reliable partner in the U.S.-led 'global war on terrorism', there were institutional interests within the KDF, and key political elites within the Kenyan government, notably Minister for Internal Security George Saitoti, the Defence Minister Yusuf Haji and several senior security chiefs, advocated for intervention to advance their own economic and political interests."


== Lead up and planning ==
Kenya's incursion into southern Somalia started after the 13 October kidnapping of two Spanish women who were working for Médecins Sans Frontières at the Dadaab refugee camp. The abductions were allegedly carried out by Al Shabaab militants. Médecins Sans Frontières issued a press statement at the time disassociating itself from any armed activities and related declarations launched following the abduction. The Kenyan government claimed its troop deployment had received approval from the Transitional Federal Government of Somalia (TFG). Kenya's Foreign Affairs Minister, Moses Wetangula, stated that the deployment of Kenyan troops was at the request of the TFG. The Kenyan military said that there was no set exit date for the operation, but the indicator of the mission's success would be a crippling of Al-Shabaab's capacity.
According to The Guardian, "several sources agree[...] that the Kenyan intervention plan was discussed and decided in 2010, then finalised with input from western partners, including the US and to a lesser extent France", with Nairobi using the kidnappings "as an excuse to launch an operation ready and waiting."
On 16 October 2011, Reuters reported that Somali and Kenyan military officials had met over the weekend in the town of Dhobley, in Somalia, on the Kenya border. According to an unidentified security source, "the meeting was to prepare a joint operation between the two forces ... to launch an offensive against Al-Shabaab rebels who are scattered in different parts of southern Somalia".
The same day, an unnamed Somali military commander said that Kenyan troops had crossed the border and, in a joint operation with Somali forces, pushed Al Shabaab out of two bases near the Kenya border. Abdi Yusuf, a senior Somali military commander, confirmed that two warplanes had attacked Al Shabaab bases, but did not confirm their origin. He noted: "I can't identify the military aircraft, but our neighbour Kenya is fully supporting us militarily and our mission is to drive Al-Shabaab out of the region". Somalia's ambassador to Kenya, Mohamed Ali Nur, responded "We cannot condone any country crossing our border." TFG spokesman Abdirahman Omar Yarisow later contradicted Nur, asserting that "the governments of Somalia and Kenya are now cooperating in the fight against Al-Shabaab."
On 27 October Kenyan government spokesman Alfred Mutua said Linda Nchi was planned months in advance and had been "going on for quite some time", as well as denied any participation by western forces. The operation reportedly had a high approval rating from the Kenyan population.


== Discussions with Somali Transitional Federal Government ==
On 18 October, Somalia's President Sharif Sheikh Ahmed and other TFG officials hosted a Kenyan delegation in Mogadishu to discuss security co-operation against Al-Shabaab. Somalia's Defence Minister Hussein Arab Isse and Kenya's Defence Minister Mohamed Yusuf Haji then signed an agreement to collaborate against Al-Shabaab. Both countries pledged to "co-operate in undertaking security and military operations", including "co-ordi`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Operation Linda Nchi

*Part of the Somali Civil War (2009–present)* conflict.`
    ),
  }),
};
const factional_violence_in_libya_201114_tool = {
  name: "factional_violence_in_libya_201114",
  description: `Conflict name: Factional violence in Libya (2011–14)
Start date: 2011
End date (if applicable): 2014

Description: Page: Factional violence in Libya (2011–2014)
Summary: Following the end of the First Libyan Civil War, which overthrew Muammar Gaddafi, there was violence involving various militias and the new state security forces. This violence has escalated into the Second Libyan Civil War (2014–2020).
The militias included guerrillas, Islamists, and militias who fought against Gaddafi but refused to lay down their arms when the war ended in October 2011. According to some civilian leaders, these latter militias shifted from merely delaying the surrender of their weapons to actively asserting a continuing political role as "guardians of the revolution". Some of the largest, and most well-equipped militias were associated with Islamist groups that were forming political parties. Before the official end of hostilities between loyalist and opposition forces, there were reports of sporadic clashes between rival militias, and vigilante revenge killings.
In September 2012, Islamists attacked the United States consulate building in Benghazi, killing the US ambassador and three others. This prompted a popular outcry against semi-legal militias that were still operating and resulted in the storming of several Islamist militia bases by protesters. A large-scale government crackdown followed on non-government sanctioned militias, with the Libyan Army raiding several now illegal militias' headquarters and ordering them to disband.


== Events ==


=== 2011 ===


==== November 2011 ====
On 1 November, a group of intoxicated Zintan fighters stormed a hospital in Tripoli and demanded they hand-over of a fighter who was wounded earlier in the day in a clash that also left another militiaman dead. The doctors refused and a Tripoli militia, in charge of hospital security, forced the Zintanis out, but not before they shot rounds in the hospital. Both groups received reinforcements and the fighting, involving heavy machine guns and anti-aircraft guns, lasted for three hours. There were no direct fatalities from the fighting, but three patients at the hospital died due to stress-related causes linked to the clashes. Three Tripoli fighters were wounded. The fighting reportedly ended after calls from a local imam and senior commanders from both groups talked by phone with their men.
On 8 November, it was evident that loyalist remnants were also still active in the country, even more than two weeks after their defeat, when a pro-Gaddafi convoy tried to cross the border into Niger and was intercepted by the Nigerien army. 13 loyalists and one Nigerien soldier were killed.
Between 8 and 12 November, large-scale fighting erupted between Zawiya and Tripoli between a Zawiya-based militia and a group from the Wershifanna tribe. The Zawiya group accused their opponents of belonging to loyalist remnants and they reported seeing tanks and vehicles with the Gaddafi-era green flag and markings that said "Brigade of the Martyr Muammar Gaddafi". The Wershifanna denied this and stated that the men from Zawiya had been misled by a rumor that pro-Gaddafi fighters were in the area. The fighting was centered around the former loyalist Imaya military base and both sides vied for control. Grad rocket launchers were used at times during the clashes. 9–12 Zawiya fighters and nine Wershifanna fighters were killed.
On 23 November, a militia force in Bani Walid was ambushed after being sent there to arrest a known Gaddafi supporter. 15 militia members were killed. The survivors reported being shot at and hit with grenades and rockets from houses after they found out all the roads were blocked. Another report stated that the fighting started after a high-speed chase with a suspect vehicle in which a Gaddafi loyalist was killed. One civilian also reportedly died during the fighting.


==== December 2011 ====
In early December, a group of Zintani gunmen attacked the convoy of a top army officer, General Khalifa Haftar, as it was speeding through a checkpoint set up by the group. In a separ`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Factional violence in Libya (2011–14) conflict.`
      ),
  }),
};
const iraqi_insurgency_20112013_tool = {
  name: "iraqi_insurgency_20112013",
  description: `Conflict name: Iraqi insurgency (2011–2013)

*Part of the Iraq War*
Start date: 2011
End date (if applicable): 2013

Description: Page: Iraqi insurgency (2011–2013)
Summary: The Iraqi insurgency was an insurgency that began in late 2011 after the end of the Iraq War and the withdrawal of U.S. troops from Iraq, resulting in violent conflict with the central government, as well as low-level sectarian violence among Iraq's religious groups.
The insurgency was a direct continuation of events following the U.S.-led invasion of Iraq in 2003. Sunni militant groups stepped up attacks targeting the country's majority Shia population to undermine confidence in the Shia-led government and its efforts to protect people without coalition assistance. Many Sunni factions stood against the Syrian government, which Shia groups moved to support, and numerous members of both sects also crossed the border to fight in Syria.
In 2014, the insurgency escalated dramatically following the conquest of Mosul and major areas in northern Iraq by the Islamic State in Iraq and Syria (ISIS), a Salafi jihadist militant group and  unrecognised proto-state that follows a fundamentalist, Qutbi-Wahhabi doctrine of Sunni Islam. ISIL gained global prominence in early 2014 when it drove Iraqi government forces out of key cities in its Western Iraq offensive, followed by its capture of Mosul and the Sinjar massacre, thereby merging the new conflict with the Syrian Civil War, into a new, far deadlier conflict.


== Background ==

The Iraq War was a protracted armed conflict that began with the U.S.-led invasion of Iraq in 2003, which toppled the government of Saddam Hussein. However, the war continued for much of the next decade as an insurgency emerged to oppose the occupying forces and the post-invasion Iraqi government. The United States officially withdrew its troops from Iraq in 2011, but the insurgency and various dimensions of the civil armed conflict continued.
The invasion began in 2003 when the United States, joined by the United Kingdom and several coalition allies, launched a "shock and awe" surprise attack without declaring war. Iraqi forces were quickly overwhelmed as U.S. forces swept throughout the country. The invasion led to the collapse of the Ba'athist government; Saddam was captured, and he was executed by a military court three years later. However, the power vacuum following Saddam's fall, the mismanagement of the occupation and the sectarian policies of various militias led to a lengthy insurgency against U.S., coalition forces and Iraqi government forces as well as widespread sectarian violence between Shias and Sunnis. The United States responded with a troop surge in 2007; the heavy American security presence and deals made between the occupying forces and Sunni militias reduced the level of violence. The U.S. began withdrawing its troops in the winter of 2007–2008. The winding down of U.S. involvement in Iraq accelerated under President Barack Obama. The U.S. withdrew all combat troops from Iraq by 2011.
The Bush administration based its rationale for war principally on the assertion that Iraq possessed weapons of mass destruction (WMDs) and that Saddam's government posed an immediate threat to the United States and its coalition allies. Some U.S. officials accused Saddam of harboring and supporting al-Qaeda, while others cited the desire to end a repressive dictatorship and bring democracy to the people of Iraq. After the invasion, however, no evidence was found to verify the initial claims about WMDs. The rationale and misrepresentation of pre-war intelligence faced heavy criticism within the U.S. and internationally.
As a result of the war, Iraq held its multi-party elections in 2005, and Nouri al-Maliki later became Prime Minister the following year. The Maliki government enacted policies that were widely seen as having the effect of alienating the country's Sunni minority, which worsened sectarian tensions. In 2014, ISIS launched a military offensive in Northern Iraq and later declared a worldwide Islamic caliphate, eliciting another military response from the Un`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Iraqi insurgency (2011–2013)

*Part of the Iraq War* conflict.`
    ),
  }),
};
const mali_war_tool = {
  name: "mali_war",
  description: `Conflict name: Mali War
Start date: 2012
End date (if applicable): Ongoing

Description: Page: Mali War
Summary: The Mali War is an ongoing conflict that started in January 2012 between the northern and southern parts of Mali in Africa. On 16 January 2012, several insurgent groups began fighting a campaign against the Malian government for independence or greater autonomy for northern Mali, which they called Azawad. The National Movement for the Liberation of Azawad (MNLA), an organization fighting to make this area of Mali an independent homeland for the Tuareg people, had taken control of the region by April 2012.
On 22 March 2012, President Amadou Toumani Touré was ousted in a coup d'état over his handling of the crisis, a month before a presidential election was to have taken place. Mutinous soldiers, calling themselves the National Committee for the Restoration of Democracy and State (CNRDR), took control and suspended the constitution of Mali. As a consequence of the instability following the coup, Mali's three largest northern cities—Kidal, Gao and Timbuktu—were overrun by the rebels on three consecutive days. On 5 April 2012, after the capture of Douentza, the MNLA said that it had accomplished its goals and called off its offensive. The following day, it proclaimed the independence of northern Mali from the rest of the country, renaming it Azawad.
The MNLA were initially backed by the Islamist group Ansar Dine. After the Malian military was driven from northern Mali, Ansar Dine and a number of smaller Islamist groups began imposing strict Sharia law. The MNLA and Islamists struggled to reconcile their conflicting visions for an intended new state. Afterwards, the MNLA began fighting against Ansar Dine and other Islamist groups, including Movement for Oneness and Jihad in West Africa (MOJWA/MUJAO), a splinter group of Al-Qaeda in the Islamic Maghreb. By 17 July 2012, the MNLA had lost control of most of northern Mali's cities to the Islamists.
The government of Mali asked for foreign military help to re-take the north. On 11 January 2013, the French military began operations against the Islamists. Forces from other African Union states were deployed shortly after. By 8 February, the Islamist-held territory had been re-taken by the Malian military, with help from the international coalition. Tuareg separatists have continued to fight the Islamists as well, although the MNLA has also been accused of carrying out attacks against the Malian military.
A peace deal between the government and Tuareg rebels was signed on 18 June 2013, however on 26 September 2013 the rebels pulled out of the peace agreement and claimed that the government had not respected its commitments to the truce. In mid-2014, the French military in Mali ended its Operation Serval and transitioned to the broader regional counterterrorist effort, Operation Barkhane. Despite a ceasefire agreement signed on 19 February 2015 in Algiers, Algeria, and a peace accord in the capital on 15 April 2015, fighting continued.
Starting in 2018, there was an increase in rebel attacks in the Sahel, accompanied by a French troop surge. Mali experienced two coups in 2020 and 2021, both orchestrated by the Malian military. After the Malian coup in 2021, the government and French forces in the country had a falling out, with the former demanding the latter's withdrawal. Amid popular Malian anti-French protests and increasing involvement in the war by the Russian mercenary Wagner Group and the Turkish, the French withdrew their forces entirely by 15 August 2022, ending their presence in the country.


== Background ==

In the early 1990s, Tuareg and Arab nomads formed the People's Movement for the Liberation of Azawad (MPA) and declared war for independence of the northern part of Mali. Despite peace agreements with the government of Mali in 1991 and 1995 a growing dissatisfaction among the former Tuareg fighters, who had been integrated into the Malian Armed Forces, led to new fighting in 2007. Despite historically having difficulty maintaining alliances between `,
  schema: z.object({
    question: z
      .string()
      .describe(`The question to ask in regards to the Mali War conflict.`),
  }),
};
const heglig_crisis_tool = {
  name: "heglig_crisis",
  description: `Conflict name: Heglig Crisis
Start date: 2012
End date (if applicable): 2012

Description: Page: Heglig Crisis
Summary: The Heglig Crisis was a brief war fought between the countries of Sudan and South Sudan in 2012 over oil-rich regions between South Sudan's Unity and Sudan's South Kordofan states. South Sudan invaded and briefly occupied the small border town of Heglig before being pushed back by the Sudanese army. Small-scale clashes continued until an agreement on borders and natural resources was signed on 26 September, resolving most aspects of the conflict.


== Background ==
Prior to independence from Sudan two civil wars were fought in the region from 1955 to 1972 and from 1983 to 2005, in which 2.5 million people were killed and more than 5 million externally displaced. South Sudan peacefully gained independence from Sudan on 9 July 2011 with Sudan's long-term president Omar al-Bashir promising to "work with our southern brothers and help them set up their state". Despite this relations between the two states have been marked by conflict over the disputed oil-rich Abyei region. In January 2012, South Sudan shut down all of its oil fields over a disagreement with oil transit fees imposed by Sudan.
In May 2011, it was reported that Sudan had seized control of Abyei, with a force of approximately 5,000 soldiers after three days of clashes with South Sudanese forces. The precipitating factor was an ambush by South Sudanese forces on May 19 which killed 22 northern soldiers. The northern advance included shelling, aerial bombardment and numerous tanks. Following the advance South Sudan withdrew its forces from Abyei and declared the movement of Sudanese forces into Abyei to be an "act of war". The United Nations sent an envoy to Khartoum to intervene. A deal on militarization was reached on 20 June 2011. The United Nations Interim Security Force for Abyei, consisting of Ethiopian troops were deployed under a UNSC resolution from 27 June 2011. In early December 2011, Jau, a town in Unity state in South Sudan, was occupied by Sudanese forces. In early March 2012, the Sudanese Air Force bombed parts of Pariang county.
Both countries accused each other of supporting rebels on their soil as part of the ongoing internal conflicts in Sudan and South Sudan.


== Events ==


=== March: South Sudanese repulsed from Heglig ===

On 26 March, the Republic of Sudan claimed that South Sudan attacked the Heglig oilfield, located in the Sudanese state of South Kordofan, while South Sudan claimed that their forces had carried out an operation within the borders of South Sudan. The South Sudanese attack was supported by the Sudanese rebel group JEM, which attacked from South Sudanese state of Unity. The following day, the Sudanese Air Force launched a bombing raid on the Unity oilfield in Unity, located to the north of the state capital, Bentiu. The Sudanese Army later attacked the disputed areas of Jau, Pan Akuach, and Teshwin, but were repelled by the South Sudanese Sudan People's Liberation Army (SPLA).
South Sudanese artillery positions 20 kilometres north of Bentiu, which had been involved in the shelling of Heglig, were bombarded by artillery from the northern side of the border. Sudan's Information Minister, Abdallah Ali Masar, confirmed that South Sudanese had penetrated 10 km into Sudanese territory, but also claimed that Sudanese forces had repelled them and driven them back, and had taken several prisoners.
South Sudan's forces withdrew from the disputed area on 28 March.
On 31 March, Sudanese warplanes bombed the Southern forces positions on the border, although officials from the north said it was artillery, not aircraft involved in the attack.


=== Early April: South Sudanese capture of Heglig ===
South Sudan claimed to have shot down a Sudanese MiG-29 warplane on 4 April over Unity during an air raid in which Sudanese planes bombed an oil pipeline in South Sudan. The Sudanese government denied any aerial bombings had taken place and called the accusations "fabrications" by South Sudan.
The SPLA claimed that Teshwi`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Heglig Crisis conflict.`
      ),
  }),
};
const m23_rebellion_tool = {
  name: "m23_rebellion",
  description: `Conflict name: M23 rebellion

*Part of the Kivu conflict*
Start date: 2012
End date (if applicable): 2013

Description: Page: M23 rebellion
Summary: The M23 rebellion was an armed conflict in North Kivu, Democratic Republic of the Congo (DRC), that occurred between the March 23 Movement and government forces between 4 April 2012 and 7 November 2013. It ended when a peace agreement was made among eleven African nations, and the M23 troops surrendered in Uganda. The rebellion was part of continued fighting in the region after the formal end of the Second Congo War in 2003. The conflict reignited in late 2021 after rebel "general" Sultani Makenga and 100 rebel fighters attacked the border town of Bunagana but failed. A few months later, with a much larger force, the rebels of the M23 movement renewed their attack and captured Bunagana.
In April 2012, former National Congress for the Defence of the People (CNDP) soldiers mutinied against the DRC government and the peacekeeping contingent of the United Nations Organization Stabilization Mission in the Democratic Republic of the Congo (MONUSCO). Mutineers formed a rebel group called the March 23 Movement (M23), also known as the Congolese Revolutionary Army. It was composed of former members of the rebel CNDP, and allegedly sponsored by the government of the neighbouring states of Rwanda and Uganda.
On 20 November 2012, M23 rebels took control of Goma, a North Kivu provincial capital with a population of one million people. By the end of November that year, the conflict had forced more than 140,000 people to flee their homes, according to the U.N. refugee agency, in addition to the refugees already forced from their homes by previous rounds of fighting in the region. After repelling an ill-organized government counterattack and making some further gains, M23 agreed to withdraw from Goma on their own and left the city in early December.
On 24 February 2013, eleven African nations signed an agreement designed to bring peace to the region. In October 2013, Congo told the UN that the M23 movement was virtually finished after being pushed back to a small area near Rwanda. On 7 November 2013, following significant defeats to a UN-backed government offensive, M23 troops crossed into Uganda and surrendered.


== Background ==

In March 2009, National Congress for the Defence of the People (CNDP) rebels signed a peace treaty with the government, in which it agreed to become a political party in exchange for the release of its imprisoned members.
On 4 April 2012, it was reported that Bosco Ntaganda and 300 loyal troops defected from the DRC and clashed with government forces in the Rutshuru region north of Goma. According to M23 spokesman Vianney Kazarma, the defection was due to Joseph Kabila's cheating in the Democratic Republic of the Congo general election, 2011.


== The conflict ==


=== Beginning of hostilities ===
Jason Stearns reported on 4 May 2012 that Colonel Sultani Makenga had joined the M23. Stearns commented that this "is a significant development, since Makenga was the second highest ranking CNDP officer behind Ntaganda in the Amani Leo structure as the deputy commander of South Kivu."
On 6 July 2012, M23 attacked and took the town of Bunagana less than a kilometer from the border with Uganda. Some 600 DRC troops fled across the border and took refuge in Uganda. The rebels issued a statement that they would cease their offensive if the government agreed to holding peace talks with them. The United Nations condemned rebel attacks in the region after an Indian peacekeeper was killed in the fighting.
On 8 July, the rebels captured Rutshuru, 70 kilometers north of Goma, the capital of North Kivu province. By 10 July, they were 40 kilometers from the city of Goma. Witnesses said rebels appeared to be taking towns and villages with ease, with government troops usually melting away. The towns of Rubare and Ntamugenga had also reportedly fallen to the rebels.
On 20 July, M23 and government forces exchanged heavy weapons fire around Kibumba and Rugari, forcing thousands of civilians to flee towards Gom`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the M23 rebellion

*Part of the Kivu conflict* conflict.`
    ),
  }),
};
const _2012_abyan_offensive_tool = {
  name: "_2012_abyan_offensive",
  description: `Conflict name: 2012 Abyan offensive

*Part of the Al-Qaeda insurgency in Yemen*
Start date: 2012
End date (if applicable): 2012

Description: Page: 2012 Abyan offensive
Summary: The 2012 Abyan offensive was an offensive by the Yemeni military against Islamist militant forces, possibly including elements of Al-Qaeda in the Arabian Peninsula (AQAP), in the province of Abyan with the purpose of re-capturing the militant-held towns of Zinjibar and Jaʿār.
On 12 May, the military started the offensive in an attempt to recapture all areas of Abyan out of their control. Over a month of fighting, 567 people were reportedly killed, including 429 Islamist fighters, 78 soldiers, 26 tribal fighters and 34 civilians. On 12 June the Yemeni army succeeded in retaking Zinjibar and Jaar, pushing the militants away after heavy clashes in and around both towns. The city of Shuqrah fell on 15 June, and militants retreated towards neighboring Shabwah Governorate.


== Early advances ==
Over 19 and 20 May, 19 soldiers and 33 militants were killed in fighting in Ja'ar.
On the evening of 23 May, militants conducted a counter-attack in the region of Wadi Bani, west of Ja'ar, during which 33-35 militant fighters and nine soldiers were killed. A military official stated that though the army was making progress in its advance on Ja'ar, "it was facing resistance" from the militants. Earlier in the day, the military managed to advance into northeastern neighbourhoods of Zinjibar. Although managing to capture several buildings on the outskirts, they were being harassed by militant snipers.
On 26 May, the military pressed on with its offensive in Zinjibar, recapturing key positions in the Maraqid and Mashqasa districts on the outskirts of the city. The military stated 62 militant fighters were killed during the day while they suffered four dead and four wounded. 20 of the rebels were killed in the ground fighting and around 30 were killed when they were bombed by warplanes while trying to flee the area in pick-up trucks. Most of the dead militants were reportedly Somalis. Troops had also found the bodies of 25 militants killed in earlier clashes. At the same time, in Ja'ar, a roadside bomb destroyed a military vehicle on the outskirts of the town killing eight soldiers. Seven militants were killed in the fighting there.
On 31 May, fighting was reported on the northern and western outskirts of Ja'ar where troops, backed up by local tribal fighters, assaulted militant positions. An air strike also hit an AQAP communications centre in the town of Shaqra, east of Ja'ar.


== Fighting intensifies ==
In fighting on 2 June, three militant rockets hit the headquarters of the 25th Mechanised Brigade, killing one soldier and wounding six others.
On 3 June, after securing the outskirts of Zinjibar, the military moved into the central part of the city where heavy fighting ensued with the militants in the city center. At the same time, troops fought Islamist fighters on the western edge of Jaar.
On 4 June, the military was closing in on the militant-held town of Shaqra, 50 km (30 miles) along the coast east of Zinjibar. Militant forces in the town were reportedly preparing for a fight.
On 11 June, warplanes bombed areas to the north and the west of Jaar and the Army attacked a hilltop munitions factory overlooking the town. After hours of fighting the Army captured the factory. Fighting was also reported in the nearby town of Shaqra.


== Recapture of Zinjibar, Ja'ar and Shuqrah ==
On 12 June the Yemeni army succeeded in retaking Zinjibar and Jaar, pushing the militants away after heavy clashes in and around both towns. At least 28 casualties were reported, all but two of them being insurgents. Local residents reported vehicles carrying armed men, weapons and furniture heading east towards Shuqrah. The militants reportedly distributed pamphlets in Jaar apologising to residents for dragging the town into a conflict with the army and for the damage caused by the fighting. The governor of Abyan Governorate Jamal al-Aqel estimated that about 200-300 militants, including senior leaders and foreign fighters, had fled`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2012 Abyan offensive

*Part of the Al-Qaeda insurgency in Yemen* conflict.`
    ),
  }),
};
const baragoi_clashes_tool = {
  name: "baragoi_clashes",
  description: `Conflict name: Baragoi clashes
Start date: 2012
End date (if applicable): 2012

Description: Page: Baragoi clashes
Summary: In November 2012, a series of ethnic clashes between the Samburu and Turkana tribes of Kenya's Samburu County resulted in the deaths of at least 46 people including police officers sent to quell the violence.


== Cause of conflict ==
Tribal rivalry and fighting over cattle has been cited as the primary cause of the conflict.


== Major incidents ==


=== November ===
In November 2012 over 40 Kenya Police officers and reservists  were killed in the Suguta Valley near Baragoi while on a mission to recover stolen cattle.


=== December ===
Four people were killed and several others injured in renewed cattle raids. This incident took place in Kewab in Baragoi when the Turkana and Samburu tribes.


== Government response ==
As a result of the November incident, the Kenyan Parliamentary Committee on Security sent a team to probe the clashes.


== See also ==
Crime in Kenya
Ethnic Conflicts in Kenya
Ethnic conflict


== References ==`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Baragoi clashes conflict.`
      ),
  }),
};
const central_african_republic_civil_war_tool = {
  name: "central_african_republic_civil_war",
  description: `Conflict name: Central African Republic Civil War
Start date: 2012
End date (if applicable): Ongoing

Description: Page: Central African Republic Civil War
Summary: The Central African Republic Civil War is an ongoing civil war in the Central African Republic (CAR) involving the government, rebels from the Séléka coalition, and Anti-balaka militias.
In the preceding Central African Republic Bush War (2004–2007), the government of President François Bozizé fought with rebels until a peace agreement in 2007. The current conflict arose when a new coalition of varied rebel groups, known as Séléka, accused the government of failing to abide by the peace agreements, captured many towns in 2012 and seized the capital in 2013. Bozizé fled the country, and the rebel leader Michel Djotodia declared himself President. Renewed fighting began between Séléka and militias opposed to them called Anti-balaka. In September 2013, President Djotodia disbanded the Séléka coalition, which had lost its unity after taking power, and resigned in 2014. He was replaced by Catherine Samba-Panza, but the conflict continued. In July 2014, ex-Séléka factions and Anti-balaka representatives signed a ceasefire agreement. By the end of 2014, the country was de facto partitioned with the Anti-Balaka controlling the south and west, from which most Muslims had evacuated, and ex-Séléka groups controlling the north and east. Faustin-Archange Touadéra, who was elected president in 2016, ran and won the 2020 election, which triggered the main rebel factions to form an alliance opposed to the election called the Coalition of Patriots for Change, which was coordinated by former President Bozizé. Peacekeeping largely transitioned from the ECCAS led MICOPAX to the African Union led MISCA to the United Nations led MINUSCA, while the French peacekeeping mission was known as Operation Sangaris.
Much of the tension is over religious identity between Muslim Séléka fighters and Christian Anti-balaka, and ethnic differences among ex-Séléka factions, and historical antagonism between agriculturalists, who largely comprise Anti-balaka, and nomadic groups, who constitute most Séléka fighters. Other contributing factors include the struggle for control of diamonds and other resources in the resource-rich country and for influence among regional powers such as Chad, Sudan and Rwanda and international powers such as France and Russia. More than 1.1 million people have fled their homes in a country of about 5 million people, the highest ever recorded in the country.


== Background ==

The peacekeeping force Multinational Force in the Central African Republic (FOMUC) was formed in October 2002 by the regional economic community Economic and Monetary Community of Central Africa (CEMAC).
After François Bozizé seized power in 2003, the Central African Republic Bush War (2004–2007) began with the rebellion by the Union of Democratic Forces for Unity (UFDR) in northeastern CAR, led by Michel Djotodia. During this conflict, the UFDR rebel forces also fought with several other rebel groups including the Group of Patriotic Action for the Liberation of Central Africa (GAPLC), the Convention of Patriots for Justice and Peace (CPJP), the People's Army for the Restoration of Democracy (APRD), the Movement of Central African Liberators for Justice (MLCJ), and the Democratic Front of the Central African People (FDPC). Tens of thousands of people were displaced by the unrest, which continued until 2007, with rebel forces seizing several cities during the conflict.

On 13 April 2007, a peace agreement between the government and the UFDR was signed in Birao. The agreement provided for an amnesty for the UFDR, its recognition as a political party, and the integration of its fighters into the army. Further negotiations resulted in a Libreville Global Peace Accord agreement in 2008 for reconciliation, a unity government, local elections in 2009 and parliamentary and presidential elections in 2010. The new unity government that resulted was formed in January 2009. On 12 July 2008, with the waning of the Central Africa`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Central African Republic Civil War conflict.`
      ),
  }),
};
const lahad_datu_standoff_tool = {
  name: "lahad_datu_standoff",
  description: `Conflict name: Lahad Datu standoff
Start date: 2013
End date (if applicable): 2013

Description: Page: 2013 Lahad Datu standoff
Summary: The 2013 Lahad Datu standoff, also known as the Lahad Datu incursion or Operation Daulat (Malay: Operasi Daulat), was a military conflict in Lahad Datu, Malaysia. The conflict began on 11 February, when 235 militants arrived in Lahad Datu by boat, and ended on 24 March. The militants, self proclaimed as "Royal Security Forces of the Sultanate of Sulu and North Borneo", were sent by a claimant to the throne of the Sultanate of Sulu.
The militants' stated objective was to assert the territorial claim of the Philippines to eastern Sabah. Malaysian security forces surrounded the village where the group had gathered. After weeks of negotiations and several deadlines for the group to withdraw, the killing of local policemen prompted Malaysian security forces to flush out the militants with a military operation. At the end of the standoff around 72 people were left dead, including 56 militants, 10 Malaysian security force personnel, and 6 civilians. The surviving militants were all either captured or escaped.
The Lahad Datu incursion has had lasting impacts for the people of Sabah. Before this incursion, the government of Malaysia continued to dutifully pay an annual cession payment amounting to roughly $1,000 to the indirect heirs of the Sultan honoring an 1878 agreement, where North Borneo – today’s Sabah – was conceded by the late Sultan of Sulu to a British company. However, Malaysia suspended these payments in response to this attack that killed civilians and members of the Malaysian armed forces. Years later, eight of these Sulu heirs, who insisted they were not involved in the standoff, hired lawyers to pursue legal action based on the original commercial deal. The case is still ongoing.


== Background ==


=== National territorial dispute ===

The Philippines retains a territorial claim to eastern Sabah, formerly known as North Borneo, through the heritage of the Sultanate of Sulu. The basis of this claim is that the dominion of the sultanate historically spanned from the Sulu Archipelago into parts of northern Borneo. In line with the International Court of Justice court decision in the case concerning sovereignty of Pulau Ligitan and Pulau Sipadan in 2002, Malaysia claimed that Sultan of Sulu indisputably relinquished the sovereign rights of all its possession in favour of Spain on 22 July 1878, hence relinquishing any claim to Sabah.


=== Sulu succession dispute ===

The unresolved status of the Sultanate of Sulu was a driving issue behind the standoff, with the militant group claiming Jamalul Kiram III as the legitimate Sultan of Sulu. The militant group claimed that Kiram's supposed role as Sultan justified their occupation, however, Kiram's status as sultan has been disputed by several other claimants to the sultanate.


== Initiation ==
Heirs to the sultanate felt excluded by the framework of a peace deal between the Philippine government and the Moro Islamic Liberation Front, as announced on 7 October 2012 by Philippine president Benigno Aquino III. In response, Jamalul Kiram III, claiming to be Sulu's legitimate heir, decreed on 11 November 2012 that a civilian and military contingent should assert his territorial rights in North Borneo. He appointed his brother and Raja Muda ("heir apparent" or "crown prince"), Agbimuddin Kiram, to lead the group.
Months later on 11 February 2013, Agbimuddin Kiram and at least 101 followers arrived in the village of Tanduo, located near Tungku in Lahad Datu from neighbouring Simunul island, Tawi-Tawi, in the southern Philippines. Around eighty people fled from 15 homes in Tanduo.


== Development ==
Malaysian police blocked roads leading from Lahad Datu to Tanduo. Malaysian police boats patrolled nearby waters. Filipino security agencies blocked off entry from the southern Philippines and deployed six naval ships to help stabilise the situation. An additional Philippine naval ship was sent to Malaysian waters off Lahad Datu to provide humani`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Lahad Datu standoff conflict.`
      ),
  }),
};
const batwaluba_clashes_tool = {
  name: "batwaluba_clashes",
  description: `Conflict name: Batwa–Luba clashes

*Part of the Katanga insurgency*
Start date: 2013
End date (if applicable): 2020

Description: Page: Batwa–Luba clashes
Summary: The Batwa–Luba clashes were a series of clashes in the Democratic Republic of the Congo (DRC) between the Pygmy Batwa people, and the Luba people that began in 2013 and ended in 2018.


== Background ==
The pygmy Batwa, regionally also called Bambuti or Bambote, are often exploited and allegedly enslaved by the Luba and other Bantu groups. While the pygmy never organized militarily to resist, starting with the First Congo War, rebel leader Laurent-Désiré Kabila, who won the war, organized the Twa into paramilitary groups to help him. His son, Joseph Kabila, who succeeded him, used these militias in the Second Congo War and against the predominantly Luba Mai-Mai Kata Katanga.


== Course of the conflict ==

In Tanganyika Province, in the northern part of the former Katanga Province, starting in 2013, Pygmy Batwa rose up into militias, such as the "Perci" militia, and attacked Luba villages. In Nyunzu Territory, the pygmy hunter-gatherers organized into militias for the first time in known history. A Luba militia known as "Elements" attacked back, notably killing at least 30 people in the "Vumilia 1" displaced people camp in April 2015. Since the start of the conflict, hundreds have been killed and tens of thousands have been displaced from their homes. The weapons used in the conflict are often arrows, axes, and machetes, rather than guns.
In October 2015, Pygmy and Luba leaders signed a peace deal to end the conflict. In September 2016, the United Nations along with provincial authorities established local councils called "baraza" to address grievances and this appeared to reduce the violence. However, clashes intensified at the end of 2016, as the government tried to enforce a tax on caterpillars that the Batwa harvest as a major source of income to sell as a delicacy around the capital Kinshasa, while the military attempted to arrest a Twa warlord. Both of these events led to a violent backlash and a spread of the fighting. Twa militias also started to target Tutsis, another Bantu group, by slaughtering their cows. 
A ceasefire brokered by the United Nations in February 2017 failed, and the violence continued. The International Rescue Committee said more than 400 villages were destroyed between July 2016 and March 2017. In August 2017, the clashes intensified after Batwa attacked a group of Luba near Kalemie; in course of the following fighting about 50 people died, most of them Luba. Batwa fighters also attacked a MONUSCO convoy with arrows. A number of Blue Helmets were wounded, though they still opted not to return fire.
By the end of 2017, the economy in Tanganyika had mostly collapsed, while fields could no longer be harvested. As result, malnutrition spread amongst those who had fled, as well as those who stayed at their homes. However, open fighting had largely ceased by early 2018, although both sides still treated each other with mistrust.
On 5 June 2020, the National Assembly passed a bill to recognize the rights of indigenous peoples, including the Batwa.


== Casualties ==


=== Deaths ===
More than a thousand people were killed in the first eight months of 2014 alone.


=== Displaced people ===
The number of displaced people are estimated to be 650,000 as of December 2017. Around March 2017, 543,000 had fled, up from 370,000 in December 2016, the strongest growth of the current conflicts in the Congo, which has the largest population of displaced people in Africa. Many refugees are allegedly forced by the government to leave the camps and return to their homes, where the fighting still continues.


== Notes ==


== References ==


== External links ==
DRC Humanitarian Situation Report, 24 November 2016 - Democratic Republic of the Congo | ReliefWeb`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Batwa–Luba clashes

*Part of the Katanga insurgency* conflict.`
    ),
  }),
};
const renamo_insurgency_20132021_tool = {
  name: "renamo_insurgency_20132021",
  description: `Conflict name: RENAMO insurgency (2013–2021)
Start date: 2013
End date (if applicable): 2021

Description: Page: RENAMO insurgency (2013–2021)
Summary: The RENAMO insurgency was a guerrilla campaign by militants of the RENAMO party and one of its splinter factions in Mozambique. The insurgency was widely considered to be an aftershock of the Mozambican Civil War; it resulted in renewed tensions between RENAMO and Mozambique's ruling FRELIMO coalition over charges of state corruption and the disputed results of the 2014 general elections.
A ceasefire was announced between the government and the rebels in September 2014. However, renewed tensions sparked violence in mid-2015.
On 1 August 2019, President Filipe Nyusi and RENAMO leader Ossufo Momade signed a peace agreement at RENAMO's remote military base in the Gorongosa mountains in order to bring an end to hostilities. Most remaining RENAMO fighters afterward surrendered their weapons. Another peace agreement was then signed by Nyusi and Momade in Maputo's Peace Square on 6 August 2019. However, a splinter faction known as the "RENAMO Military Junta" (RMJ) continued its insurgency. By February 2021, most of the RMJ had surrendered, although a few holdouts remained in rural areas without launching further attacks. RMJ ceased to exist in December 2021, when its last members surrendered.


== Background ==

The Resistência Nacional Moçambicana (RENAMO) was formed in 1976 following Mozambican independence from Portugal and incorporated a number of diverse recruits brought together by their opposition to the country's new Marxist FRELIMO government, including disgruntled former colonial troops and deserters from the post-independence army and security forces. They were welded into a cohesive fighting unit by the Rhodesian Central Intelligence Organisation and Special Air Service, and RENAMO's numbers had swelled to about 2,000 by late 1979. Militants acted as scouts for Rhodesian military units carrying raids into Mozambique, launched attacks on major settlements, and sabotaged infrastructure from October 1979 onwards. RENAMO's political wing also operated a radio station, the Voice of Free Africa, broadcasting anti-communist propaganda from Rhodesia. The fighting escalated sharply between 1982 and 1984, during which RENAMO attacked and destroyed lines of communication, the road and rail network, and vital economic infrastructure. It merged during this period with the Revolutionary Party of Mozambique (PRM), another anti-FRELIMO militant group, and received training and support from South Africa's apartheid government. What began as a decidedly low-intensity conflict escalated into an effective insurgency, then a major civil war that killed up to a million Mozambicans and created a major refugee situation in southern Africa. By the late 1980s, RENAMO controlled an estimated 25% of Mozambique's area, especially around the Manica, Sofala, and Zambezia provinces.
The end of the Cold War and FRELIMO's acceding to RENAMO demands for multi-party democracy in 1990 ensured a ceasefire and bilateral negotiations sponsored by Western governments. Both parties formally made peace with the Rome General Peace Accords on 4 October 1992. Large numbers of combatants on both sides were demobilized accordingly. An election held in 1994 returned approximately 33.7% of the votes for RENAMO's presidential candidate Afonso Dhlakama. Dhlakama also carried 112 parliamentary seats and won a decisive majority in five of the country's eleven provinces. The election results, which were closely monitored by the United Nations, were declared free and fair.
During the second round of general elections scheduled for December 1999, in which FRELIMO secured a much narrower majority of the popular vote, RENAMO contested the electoral processes and alleged widespread voter fraud. Throughout 2000 a number of pro-RENAMO demonstrations were held in major Mozambican cities such as Maputo and Beira. The government ruled the demonstrations illegal, and security forces killed some of the protestors. In Montepuez, this resulted i`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the RENAMO insurgency (2013–2021) conflict.`
      ),
  }),
};
const zamboanga_city_crisis_tool = {
  name: "zamboanga_city_crisis",
  description: `Conflict name: Zamboanga City crisis

*Part of the Moro conflict*
Start date: 2013
End date (if applicable): 2013

Description: Page: Zamboanga City crisis
Summary: The Zamboanga City crisis (Filipino: Krisis sa Zamboanga; Chavacano: Crisis na Zamboanga) or Zamboanga Siege was an armed conflict in Zamboanga City, Philippines between the government forces of the Philippines and Moro rebels from the Moro National Liberation Front (MNLF) that began on September 9, 2013 and ended twenty days later on September 28. The conflict began when MNLF rebels, under the command of Nur Misuari, attempted to occupy several coastal communities in Zamboanga City in protest of the Philippine government's failure to implement the 1996 final peace agreement with the MNLF. 
The conflict resulted in the displacement of 120,000 civilians and the destruction of 10,000 homes. More than 200 people were killed, mostly MNLF rebels along with 20 soldiers, 5 policemen and 13 civilians. The fighting also damaged Zamboanga City's airport and seaport.


== Prelude ==

Affirming the statements of MNLF Director for Advocacy John Petalcorin that Nur Misuari and the MNLF has no participation in the Zamboanga Siege, the CNN Philippines interviewed Nur Misuari and reported that "Nur Misuari denies charges linking him to the 2013 Zamboanga Siege".
Nur Misuari, the leader of the rebel group Moro National Liberation Front (MNLF) signed a peace treaty in 1996 that allowed the creation of the Autonomous Region in Muslim Mindanao (ARMM) and Misuari became its first governor. However, in 2001, he was ousted as MNLF chair by his colleagues in the MNLF leadership and replaced as ARMM governor. Misuari's reaction was rebellion against the Philippine government. Recently, however, Misuari "has been angered by a planned peace deal with the MILF, believing it would sideline the MNLF and the 1996 peace deal". Misuari proclaimed the independence of the Bangsamoro Republik on August 12, 2013, at Talipao, Sulu, although it was largely ignored by the government.
Misuari "disappeared from public view" before the fighting broke out in Zamboanga.
The Armed Forces of the Philippines (AFP) received intelligence reports that the MNLF would launch mass operations in Zamboanga City, three days before the incident. AFP spokesman Col. Ramon Zagala said that according to intelligence reports the MNLF troops were deployed to the coastal barangays (villages) of Rio Hondo, Sta. Barbara, Mariqui and Sta. Catalina. According to initial reports, the MNLF group who entered the barangays were unarmed and it was the night before the incident that the MNLF were armed in Rio Hondo. Zagala claimed that the MNLF group involved in the incident is a breakaway faction of the militant group.
In an interview, an MNLF official claimed that the fighters actions was a "pre-emptive response" to a supposed "large" troop movement" of the Army, stating that the group feared that military movement was the prelude to the arrest a high-profile leader of MNLF in the area, such as Nur Misuari.
A commander named Ustadz Habier Malik, who "is a key senior aide of Moro National Liberation Front (MNLF) founder Nur Misuari," is reportedly leading the siege on Zamboanga City.


== Timeline ==


=== September 8–15 ===
The initial confrontation occurred around 11:00 p.m. on the evening of Sunday, September 8, 2013. A navy patrol boat intercepted a large motorboat and eight other smaller vessels carrying armed men near the coastal barangay of Rio Hondo. This led to an exchange of fire resulting in several casualties including the death of one of the navy personnel and two civilians.
On September 9, 2013, at around 4:30 a.m., the MNLF entered the city and killed four people, contrary to the first report of having six people killed. Four barangays were occupied by the MNLF: Rio Hondo, Sta. Barbara, Sta. Catalina, and parts of Talon-Talon. The group held 20 civilians hostages in Barangay Sta. Catalina, and around noontime more than 200 civilians were reported as being held hostage by the MNLF. The civilian hostages were being used as human shields by the MNLF.
T`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Zamboanga City crisis

*Part of the Moro conflict* conflict.`
    ),
  }),
};
const south_sudanese_civil_war_tool = {
  name: "south_sudanese_civil_war",
  description: `Conflict name: South Sudanese Civil War

*Part of the ethnic violence in South Sudan (2011–present)*
Start date: 2013
End date (if applicable): 2020

Description: Page: South Sudanese Civil War
Summary: The South Sudanese Civil War was a multi-sided civil war in South Sudan between forces of the government and opposition forces. In December 2013, President Salva Kiir accused his former deputy Riek Machar and 10 others of attempting a coup d'état. Machar denied trying to start a coup and fled to lead the Sudan People's Liberation Movement-in-Opposition (SPLM-IO). Fighting broke out between the Sudan People's Liberation Movement (SPLM) and SPLM-IO, igniting the civil war. Ugandan troops were deployed to fight alongside the South Sudanese government. The United Nations has peacekeepers in the country as part of the United Nations Mission in South Sudan (UNMISS).
In January 2014, the first ceasefire agreement was reached. Fighting continued and was followed by several more ceasefire agreements. Negotiations were mediated by IGAD, the African Union, the United Nations, China, the European Union, the United States, the United Kingdom and Norway. A peace agreement known as the "Compromise Peace Agreement" was signed in August 2015. Machar returned to Juba in 2016 and was appointed vice president. Following a second breakout of fighting within Juba, the SPLM-IO fled to the surrounding and previously peaceful Equatoria region. Kiir replaced Machar as First Vice President with Taban Deng Gai, splitting the opposition, and rebel in-fighting became a major part of the conflict. A rivalry between the President and Paul Malong Awan, former army chief, also led to fighting. In August 2018, another power sharing agreement came into effect. On 22 February 2020, rivals Kiir and Machar struck a unity deal and formed a coalition government.
By April 2018, it was estimated that about 400,000 people, 10.6% of which were children, had been killed in the war. This death toll includes notable atrocities, such as the 2014 Bentiu massacre. Although both men otherwise had supporters from across South Sudan's ethnic divides, there were strong tensions between the Dinka and Nuer, which were often violent. Kiir's Dinka ethnic group has been accused of attacking other ethnic groups and Machar's Nuer ethnic group has been accused of attacking the Dinka. More than 4 million people have been displaced, with about 1.8 million of those internally displaced, and about 2.5 million having fled to neighboring countries, especially Uganda and Sudan. Fighting in the agricultural heartland in the south of the country caused the number of people facing starvation to soar to 6 million, causing famine in 2017 in some areas. The country's economy has also been devastated. According to the IMF in October 2017, real income had halved since 2013 and inflation was more than 300% per annum.


== Background ==


=== Previous rebellions ===

The Comprehensive Peace Agreement signed on 9 January 2005 between the Sudan People's Liberation Movement (SPLM) and the Government of Sudan ended Second Sudanese Civil War, which had started in 1983. Under the terms of the peace agreement, a Southern Sudan Autonomous Region was created and run by the SPLM with a promise that a referendum on independence would be held in 2011. During the six years period of autonomy, the desire for independence kept in-fighting within the SPLM in check. One consequence of the war's end was the oil fields in southern Sudan could be developed far more extensively than was possible during the war. Between 2006 and 2009, sales of oil brought in an annual average of US$2.1 billion to the Southern Sudan Autonomous Region. Disputes between leading personalities in the SPLM over how to appropriate the oil revenue led to recurring tensions. A system emerged during the autonomous period where SPLM leaders used the wealth generated by the oil to buy the loyalty of not only the troops, but the people at large, creating intense competition to control the oil.
In 2010, after a disputed election, George Athor led the South Sudan Democratic Movement in rebellion against the government.`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the South Sudanese Civil War

*Part of the ethnic violence in South Sudan (2011–present)* conflict.`
    ),
  }),
};
const war_in_iraq_20132017_tool = {
  name: "war_in_iraq_20132017",
  description: `Conflict name: War in Iraq (2013–2017)
Start date: 2013
End date (if applicable): 2017

Description: Page: War in Iraq (2013–2017)
Summary: The War in Iraq (2013–2017) was an armed conflict between Iraq and its allies and the Islamic State. Following December 2013, the insurgency escalated into full-scale guerrilla warfare following clashes in the cities of Ramadi and Fallujah in parts of western Iraq, and culminated in the Islamic State offensive into Iraq in June 2014, which lead to the capture of the cities of Mosul, Tikrit and other cities in western and northern Iraq by the Islamic State. Between 4–9 June 2014, the city of Mosul was attacked and later fell; following this, Prime Minister Nuri al-Maliki called for a national state of emergency on 10 June. However, despite the security crisis, Iraq's parliament did not allow Maliki to declare a state of emergency; many legislators boycotted the session because they opposed expanding the prime minister's powers. Ali Ghaidan, a former military commander in Mosul, accused al-Maliki of being the one who issued the order to withdraw from the city of Mosul. At its height, ISIL held 56,000 square kilometers of Iraqi territory, containing 4.5 million citizens.
The war resulted in the forced resignation of al-Maliki in 2014, as well as an airstrike campaign by the United States and a dozen other countries in support of the Iraqi military, participation of American and Canadian troops (predominantly special forces) in ground combat operations, a $3.5 billion U.S.-led program to rearm the Iraqi security forces, a U.S.-led training program that provided training to nearly 200,000 Iraqi soldiers and police, the participation of the military of Iran, including troops as well as armored and air elements, and military and logistical aid provided to Iraq by Russia. On 9 December 2017, Prime Minister Haider al-Abadi announced victory over the Islamic State. The Islamic State switched to guerrilla "hit and run" tactics in an effort to undermine the Iraqi government's effort to eradicate it. This conflict is interpreted by some in Iraq as a spillover of the Syrian Civil War. Other Iraqis and observers see it mainly as a culmination of long-running local sectarianism, exacerbated by the 2003–2011 Iraq War, the subsequent increase in anti-Sunni sectarianism under Prime Minister al-Maliki, and the ensuing bloody crack-down on the 2012–2013 Iraqi protests.


== Belligerents ==

The Iraqi Armed Forces, Kurdish Peshmerga and various Turkmen Muslim, Assyrian Christian, Yezidi, Shabaki, and Armenian Christian forces faced the Islamic State of Iraq and the Levant. Although some 35,000 Kurdish Peshmerga were incorporated into the Iraqi Armed Forces, most Peshmerga forces operated under the command of the President of Iraqi Kurdistan in the Kurdish autonomous region of Iraq. Assyrian forces included: Nineveh Plain Protection Units, Nineveh Plain Forces, Babylon Brigades, Kataib Rouh Allah Issa Ibn Miriam, Qaraqosh Protection Committee and Dwekh Nawsha.


== History ==


=== 2014 ===

In the course of their Anbar campaign, ISIL militants and their baathist allies seized at least 70% of Al Anbar Governorate by June 2014, including the cities of Fallujah, Al Qaim, and half of the provincial capital of Ramadi. ISIL forces also infiltrated Abu Ghraib in Baghdad Governorate.
In early June 2014, following further large-scale offensives in Iraq, ISIL and their allies seized control of Mosul, the second most populous city in Iraq, the nearby town of Tal Afar and most of the surrounding Nineveh Governorate. ISIL also captured parts of Kirkuk and Diyala Governorates and Tikrit, the administrative center of the Salahuddin Governorate, with the ultimate goal of capturing Baghdad, the Iraqi capital. ISIL was believed to have only 2,000–3,000 fighters up until the Mosul campaign, but during that campaign, it became evident that this number was a gross underestimate. There were also reports that the number of Sunni groups in Iraq that were opposed to the predominantly Shia government had joined ISIL, thus bolstering th`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the War in Iraq (2013–2017) conflict.`
      ),
  }),
};
const russoukrainian_waroutline_tool = {
  name: "russoukrainian_waroutline",
  description: `Conflict name: Russo-Ukrainian War(outline)
Start date: 2014
End date (if applicable): Ongoing

Description: Page: Outline of the Russo-Ukrainian War
Summary: The following outline is provided as an overview of and topical guide to the Russo-Ukrainian War:
Russo-Ukrainian War – ongoing international conflict between Russia, alongside Russian-backed separatists, and Ukraine, which began in February 2014. Following Ukraine's Revolution of Dignity, Russia annexed Crimea from Ukraine and supported pro-Russian separatists fighting the Ukrainian military in the Donbas war. The first eight years of conflict also included naval incidents, cyberwarfare, and heightened political tensions. In February 2022, Russia launched a full-scale invasion of Ukraine.


== Overview of articles ==


=== Top-level overview articles ===
Russo-Ukrainian War
War in Donbas
Major overview subdivisions
Prelude to the Russian invasion of Ukraine
Russian invasion of Ukraine
Ukrainian resistance during the Russian invasion of Ukraine


=== Timelines ===
Timeline of the annexation of Crimea by the Russian Federation
Timeline of the 2014 pro-Russian unrest in Ukraine
Timeline of the war in Donbas
2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
Timeline of the Russian invasion of Ukraine:
Early 2021  – 23 February 2022 : Prelude
24 February – 7 April 2022 : Initial invasion
8 April – 28 August 2022 : Southeastern front
29 August – 11 November 2022 : 2022 Ukrainian counteroffensives
12 November 2022 – 7 June 2023 : Second stalemate
8 June 2023 – 31 August 2023 : 2023 Ukrainian counteroffensive
1 September 2023 – 30 November 2023 : 2023 Ukrainian counteroffensive
1 December 2023 – 31 March 2024 : 2023–2024 winter campaigns
1 April 2024 – 31 July 2024 : 2024 spring and summer campaigns
1 August 2024 – present : 2024 summer offensives


=== Years in Russia ===
2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024


=== Years in Ukraine ===
2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024


== Subjects ==
An alphabetical list of subjects related to the war. Articles related to a subject are listed alphabetically under the main subject.


=== Participants ===
Combatants of the war in Donbas
Casualties of the Russo-Ukrainian War
Ukrainian resistance during the Russian invasion of Ukraine


=== Historical background ===


=== Prelude to the war ===
A chronological list of articles about the period immediately prelude to war; for earlier articles see the Historical background section.


=== Civil Defense ===
Martial law in Ukraine
Mobilization in Ukraine


=== Communications and the media ===
Look for Your Own
Never Ever Can We Be Brothers
I Want to Live (hotline)


==== Media ====


==== Slogans, visual expressions, and symbols ====


==== Propaganda, sham elections, and disinformation ====


=== Crimea ===
Russian occupation of Crimea


=== Economics and food ===
Black Sea Grain Initiative
Economic impact of the Russian invasion of Ukraine
Grain From Ukraine program
People's Bayraktar
2022 Russian crude oil price cap sanctions
Signmyrocket.com


=== Effects within Russia ===
2022 Russian martial law
2022 Russian mobilization
2022 Moscow rally
2022 Moscow Victory Day Parade


=== Elections and referendums ===
2014 Donbas general elections
2014 Donbas status referendums
2014 Ukrainian presidential election


=== Energy ===
Russia–Ukraine gas disputes
Nord Stream, Nord Stream 2
Russia in the European energy sector


=== Gender ===
LGBT topics in the Russo-Ukrainian War
Women in the war in Donbas
Women in the Russian invasion of Ukraine


=== Human rights, war crimes, genocide ===


==== Human rights ====
Humanitarian situation during the war in Donbas
2022 mobilization in the Donetsk People's Republic and the Luhansk People's Republic


==== War crimes ====


==== Sexual violence ====


==== Genocide ====
Accusations of genocide in Donbas
Allegations of genocide of Ukrainians in the Russian invasion of Ukraine
What Russia Should Do with Ukraine


==== Dislocation of the Ukrainian population ====
The following section includes forced movement (e.g. `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Russo-Ukrainian War(outline) conflict.`
      ),
  }),
};
const _2014_aswan_tribal_clashes_tool = {
  name: "_2014_aswan_tribal_clashes",
  description: `Conflict name: 2014 Aswan tribal clashes
Start date: 2014
End date (if applicable): 2014

Description: Page: 2014 Aswan tribal clashes
Summary: The Aswan tribal clashes were a series of clashes east of Egypt's southern city of Aswan between two local ethnic tribes: the Arab Al-Halayel (Beni Helal) clan and the Nubian Al-Dabodeya family. Shootings and stabbing occurred throughout the city following verbal insults between students from both sides at a local school on Wednesday, two days before the violence. Cars were torched and homes were looted and burned down. The army had intervened to contain the crisis following a call by Aswan's governor. Vendetta killings are very common in Upper Egypt and can last across generations, but this recent outbreak of feudal violence was described by the police as "the worst in recent memory", threatening to turn into a wide-scale ethnic conflict.


== Friday ==
Violence erupted in the Al-Seel Al-Refy district late Friday April 4, 2014, leaving three people dead as a result of a long running tribal dispute. The clashes were sparked when a woman was harassed and students from both sides later sprayed offensive graffiti at a local school. The injured were taken to Aswan University Hospital under tight security to avoid acts of vengeance from both sides. Gunfights spread beyond the residential area to outside the local hospital and morgue near the city’s center, a few kilometers away from the touristic and commercial realms of the city.


== Saturday ==
The next day, a second round of intense fighting left 20 people killed and more than fifty injured. The two sides used gunfire and Molotov cocktails resulting in several houses burned to the ground before security forces were able to stop the fighting on Saturday morning. Seventeen of the dead were from the Beni Helal clan. Prime Minister Ibrahim Mahlab formed a fact-finding committee on the incidents to uncover the reasons behind the bloodshed after meetings with the clashing sides and a visit to the scene of incidents.


== Sunday ==
Nubian clan members blocked a main street with burning car tyres while members of the Beni Helal tribe set ablaze carts on another main road. At least two more people were killed and five other were wounded in renewed clashes after 48 hours of violence despite heightened security presence in the region. An angry mob from the Arab clan torched more new Nubian homes after collecting the bodies of their relatives to bury. The attack pushed armed Nubians to retaliate in pitched gun battles. Police struggled to disperse the mob fighting outside the hospital. In the wake of the deaths, the Interior Ministry announced that it had arrested three members of the Bani Hilal tribe that were allegedly involved in the fighting.


== Domestic response ==
Egypt's prime minister Ibrahim Mahlab and interior minister Mohamed Ibrahim traveled to Aswan on Saturday to meet governor Mostfa Yousri as well as tribal leaders involved to help defuse tensions and visited the site where the violence took place. Mahlab promised to arrest perpetrators and seize unlicensed weapons and military forces have already been deployed in the area to prevent further clashes. Security presence also intensified and a curfew was imposed when clashes were renewed on Sunday.
The military accused the Muslim Brotherhood of involvement in the strife. Another joint statement by the two clans accused "invisible hands" of igniting the feud. A former member of parliament who had previously mediated between the two sides, told Egyptian media that the handwriting in the graffiti insulting both tribes was the same and noted that a "third party aimed to create strife." The undersecretary of the local Ministry of Endowment office claimed that a teacher who "belongs to the Brotherhood" drew the graffiti.
On 13 April 2014, Al-Azhar Sheikh Ahmed el-Tayeb went to Aswan in order to complete mediation between the two rivals. el-Tayeb announced that a committee will be formed by Al-Azhar to supervise compensation.


== References ==`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2014 Aswan tribal clashes conflict.`
      ),
  }),
};
const second_libyan_civil_war_tool = {
  name: "second_libyan_civil_war",
  description: `Conflict name: Second Libyan Civil War
Start date: 2014
End date (if applicable): 2020

Description: Page: Libyan civil war (2014–2020)
Summary: The Libyan civil war (2014–2020), also more commonly known as the Second Libyan Civil War, was a multilateral civil war which was fought in Libya between a number of armed groups, but mainly the House of Representatives (HoR) and the Government of National Accord (GNA), for six years from 2014 to 2020.
The General National Congress (GNC), based in western Libya and backed by various militias with some support from Qatar and Turkey, initially accepted the results of the 2014 election, but rejected them after the Supreme Constitutional Court nullified an amendment regarding the roadmap for Libya's transition and HoR elections.[13] The House of Representatives (or Council of Deputies) is in control of eastern and central Libya and has the loyalty of the Libyan National Army  (LNA), and has been supported by airstrikes by Egypt and the UAE. Due to controversy about constitutional amendments, HoR refused to take office from GNC in Tripoli, which was controlled by armed Islamist groups from Misrata. Instead, HoR established its parliament in Tobruk, which is controlled by General Haftar's forces. In December 2015, the Libyan Political Agreement was signed after talks in Skhirat, as the result of protracted negotiations between rival political camps based in Tripoli, Tobruk, and elsewhere which agreed to unite as the internationally-recognised Government of National Accord (GNA). On 30 March 2016, Fayez Sarraj, the head of GNA, arrived in Tripoli and began working from there despite opposition from GNC.
In addition to those three factions, there are: the Islamist Shura Council of Benghazi Revolutionaries, led by Ansar al-Sharia, which had the support of the GNC and was defeated in Benghazi in 2017; the Islamic State of Iraq and the Levant's (ISIL's) Libyan provinces; the Shura Council of Mujahideen in Derna which expelled ISIL from Derna in July 2015 and was later itself defeated in Derna by the Tobruk government in 2018; as well as other armed groups and militias whose allegiances often change.
In May 2016, GNA and GNC launched a joint offensive to capture areas in and around Sirte from ISIL. This offensive resulted in ISIL losing control of all significant territories previously held in Libya. Later in 2016, forces loyal to Khalifa al-Ghawil attempted a coup d'état against Fayez al-Sarraj and the Presidential Council of GNA.
On 4 April 2019, Khalifa Haftar, the commander of the Libyan National Army, called on his military forces to advance on Tripoli, the capital of the GNA, in the 2019–20 Western Libya campaign This was met with reproach from United Nations Secretary General António Guterres and the United Nations Security Council.
On 23 October 2020, the 5+5 Joint Libyan Military Commission representing the LNA and the GNA reached a "permanent ceasefire agreement in all areas of Libya". The agreement, effective immediately, required that all foreign fighters leave Libya within three months while a joint police force would patrol disputed areas. The first commercial flight between Tripoli and Benghazi took place that same day. On 10 March 2021, an interim unity government was formed, which was slated to remain in place until the next Libyan presidential election scheduled for 24 December that year. However, the election has been delayed several times since, effectively rendering the unity government in power indefinitely, causing tensions which threaten to reignite the war.


== Background of discontent with General National Congress ==
At the beginning of 2014, Libya was governed by the General National Congress (GNC), which won the popular vote in 2012 elections. The GNC was made of two major political groups, the National Forces Alliance (NFC) and the Justice and Construction Party (JCP). The two major groups in parliament had failed to reach political compromises on the larger more important issues that the GNC faced.
Division among these parties, the row over the political isolation`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Second Libyan Civil War conflict.`
      ),
  }),
};
const war_against_the_islamic_state_tool = {
  name: "war_against_the_islamic_state",
  description: `Conflict name: War against the Islamic State
Start date: 2014
End date (if applicable): Ongoing

Description: Page: War against the Islamic State
Summary: Many states began to intervene against the Islamic State, in both the Syrian Civil War and the War in Iraq (2013–2017), in response to its rapid territorial gains from its 2014 Northern Iraq offensives, universally condemned executions, human rights abuses and the fear of further spillovers of the Syrian Civil War. These efforts are called the war against the Islamic State, or the war against ISIS. In later years, there were also minor interventions by some states against IS-affiliated groups in Nigeria and Libya. All these efforts significantly degraded the Islamic State's capabilities by around 2019–2020. While moderate fighting continues in Syria, as of 2024, ISIS has been contained to a manageably small area and force capability.
In mid-June 2014, Iran, according to American and British information, started flying drones over Iraq, and, according to Reuters, Iranian soldiers were in Iraq fighting IS. Simultaneously, the United States ordered a small number of troops to Iraq and started flying crewed aircraft over Iraq. In July 2014, according to the International Institute for Strategic Studies, Iran sent Sukhoi Su-25 aircraft to Iraq, and Hezbollah purportedly sent trainers and advisers to Iraq in order to help Shia militias to monitor ISIL's movements. In August 2014, the US and Iran separately began a campaign of airstrikes on ISIL targets in Iraq. Since then, fourteen countries in a US-led coalition have also executed airstrikes on ISIL in Iraq and in Syria. Starting from September 2014, United States began closely co-operating with Saudi Arabia and Jordan to wage a co-ordinated aerial bombing campaign against IS targets across Iraq and Syria.
In September 2015, Russian forces launched its military intervention in Syria to support its ally Bashar al-Assad in the fight against the Islamic State. Although Moscow officially portrayed its intervention as an anti-IS campaign and publicly declared support to the "patriotic Syrian opposition", vast majority of its bombings were focused on destroying bases of the Syrian opposition militias of the Free Syrian Army (FSA) and Southern Front. On the other hand, United States and its Western allies have been opposed to the Ba'athist regime for its purported state-sponsorship of terrorism, violent repression of Syrian revolution and extensive use of chemical weapons. The US-led coalition trained, equipped and supported secular Free Syrian and Kurdish militias opposed to the Assad government during its anti-IS campaign. In the months following the beginning of both air campaigns, ISIL began to lose ground in both Iraq and Syria. Civilian deaths from airstrikes began to mount in 2015 and 2016. In mid-2016, the US and Russia planned to begin coordinating their airstrikes; however, this coordination did not materialize.
As of December 2017, ISIL was estimated to control no territory in Iraq, and 5% of Syrian territory, after prolonged actions. On 9 December 2017, Iraq declared victory in the fight against ISIL and stated that the War in Iraq was over. On 23 March 2019, ISIL was defeated territorially in Syria after losing the Battle of Baghuz Fawqani, after which the group was forced into an insurgency. ISIL's leader, Abu Bakr al-Baghdadi, died during a US special operations raid in northern Syria in October 2019 and was succeeded by Abu Ibrahim al-Hashimi al-Qurashi. The United Nations estimated in August 2020 that over 10,000 ISIL fighters remained in Syria and Iraq, mainly as sleeper cells.


== International coalitions against the Islamic State ==


=== US-led coalitions ===
On the margins of the 4/5 September 2014 NATO summit in Wales, on 5 September 2014, U.S. Secretary of State John Kerry invited Ministers of Australia, Canada, Denmark, France, Germany, Italy, Turkey and the United Kingdom, for a separate meeting
in which he pressed them to support the fight against ISIL militarily and financially. Those nine countries agreed to do so `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the War against the Islamic State conflict.`
      ),
  }),
};
const _2014_gaza_war_tool = {
  name: "_2014_gaza_war",
  description: `Conflict name: 2014 Gaza War

*Part of the Gaza–Israel conflict*
Start date: 2014
End date (if applicable): 2014

Description: Page: 2014 Gaza War
Summary: The 2014 Gaza War, also known as Operation Protective Edge (Hebrew: מִבְצָע צוּק אֵיתָן, romanized: Miv'tza Tzuk Eitan, lit. 'Operation Strong Cliff'), and Battle of the Withered Grain (Arabic: معركة العصف المأكول, romanized: Maʿrakat al-ʿAṣf al-Maʾkūl), was a military operation launched by Israel on 8 July 2014 in the Gaza Strip, a Palestinian territory that has been governed by Hamas since 2007. Following the kidnapping and murder of three Israeli teenagers in the West Bank by Hamas-affiliated Palestinian militants, the Israel Defense Forces (IDF) initiated Operation Brother's Keeper, in which it killed 10 Palestinians, injured 130 and imprisoned more than 600. Hamas subsequently fired a greater number of rockets into Israel from the Gaza Strip, triggering a seven-week-long conflict between the two sides. It was one of the deadliest outbreaks of open conflict between Israel and the Palestinians in decades. The combination of Palestinian rocket attacks and Israeli airstrikes resulted in over two thousand deaths, the vast majority of which were Gazan Palestinians. This includes a total of six Israeli civilians who were killed as a result of the conflict.
The Israeli military operation aimed to stop rocket fire into Israel from the Gaza Strip. Conversely, Hamas' attacks aimed to bring international pressure onto Israel with the strategic goal of forcing the latter to lift the Israeli–Egyptian blockade of the Gaza Strip; among its other goals were to end Israel's military offensive, obtain a third party to monitor and guarantee compliance with a ceasefire, release Palestinian political prisoners and overcome its isolation. According to the BBC, Israel launched airstrikes on the Gaza Strip in retaliation to the rocket attacks by Hamas, Palestinian Islamic Jihad (PIJ), and other Palestinian militant groups.
On 7 July, after seven Hamas militants died in a tunnel explosion in Khan Yunis that was caused either by an Israeli airstrike (per Hamas, Nathan Thrall, BBC, and a senior IDF official) or an accidental explosion of their own munitions (per the IDF), Hamas assumed responsibility for rockets fired into Israel, and subsequently launched 40 more rockets towards Israel. The Israeli aerial operation officially began the following day, and on 17 July, it was expanded to include a full-scale ground invasion of the Gaza Strip with the stated aim of destroying Gaza's tunnel system; the Israeli ground invasion ended on 5 August. On 26 August, an open-ended ceasefire was announced. By this time, the IDF reported that Hamas, PIJ, and other Palestinian militant groups had fired 4,564 rockets and mortars into Israel, with over 735 projectiles having been intercepted mid-flight and shot down by Israel's Iron Dome. Most Gazan mortar and rocket fire was inaccurate, and consequently hit open land; more than 280 projectiles had landed within the Gaza Strip, and 224 had struck residential areas. Palestinian rocketry also killed 13 Palestinian civilians in Gaza, 11 of them children. The IDF attacked 5,263 targets in the Gaza Strip; at least 34 known tunnels were destroyed and two-thirds of Hamas's 10,000-rocket arsenal was either used up or destroyed.
Between 2,125 and 2,310 Gazans were killed during the conflict while between 10,626 and 10,895 were wounded (including 3,374 children, of whom over 1,000 were left permanently disabled). Gazan civilian casualty estimates range between 70 percent by the Gaza Health Ministry, 65 percent by the United Nations' (UN) Protection Cluster by OCHA (based in part on Gaza Health Ministry reports), and 36 percent by Israeli officials. The UN estimated that more than 7,000 homes for 10,000 families were razed, together with an additional 89,000 homes damaged, of which roughly 10,000 were severely affected by the bombing. Rebuilding costs were calculated to run from US$4–6 billion over the course of 20 years. 67 Israeli soldiers, 5 Israeli civilians (including one child) and one Thai ci`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2014 Gaza War

*Part of the Gaza–Israel conflict* conflict.`
    ),
  }),
};
const yemeni_civil_war_2014present_tool = {
  name: "yemeni_civil_war_2014present",
  description: `Conflict name: Yemeni Civil War (2014–present)
Start date: 2014
End date (if applicable): Ongoing

Description: Page: Yemeni civil war (2014–present)
Summary: The Yemeni civil war (Arabic: الحرب الأهلية اليمنية, romanized: al-ḥarb al-ʾahlīyah al-yamanīyah) is an ongoing multilateral civil war that began in late 2014 mainly between the Rashad al-Alimi-led Presidential Leadership Council and the Mahdi al-Mashat-led Supreme Political Council, along with their supporters and allies. Both claim to constitute the official government of Yemen.
The civil war began in September 2014 when Houthi forces took over the capital city Sanaa, which was followed by a rapid Houthi takeover of the government. On 21 March 2015, the Houthi-led Supreme Revolutionary Committee declared a general mobilization to overthrow then-president Abdrabbuh Mansur Hadi and expand their control by driving into southern provinces. The Houthi offensive, allied with military forces loyal to former Yemeni President Ali Abdullah Saleh, began fighting the next day in Lahij Governorate. By 25 March, Lahij fell to the Houthis and they reached the outskirts of Aden, the seat of power for Hadi's government. Hadi fled the country the same day. Concurrently, a coalition led by Saudi Arabia launched military operations by using air strikes and restored the former Yemeni government. Although there has been no direct intervention by the Iranian government in Yemen, the civil war is widely regarded as part of the Iran-Saudi proxy conflict.
Houthi insurgents currently control the capital Sanaa and all of former North Yemen except for eastern Marib Governorate. After the formation of the Southern Transitional Council (STC) in 2017 and the subsequent capture of Aden by the STC forces in 2018, the pro-republican forces became fractured, with regular clashes between pro-Hadi forces backed by Saudi Arabia and southern separatists backed by the United Arab Emirates. Al-Qaeda in the Arabian Peninsula (AQAP) and the Islamic State have also carried out attacks against both factions, with AQAP controlling swathes of territory in the hinterlands, and along stretches of the coast.
The UN brokered a two-month nationwide truce on 2 April 2022 between Yemen's warring parties, which allowed fuel imports into Houthi-held areas and some flights to operate from Sanaa International Airport to Jordan and Egypt. On 7 April 2022, the Hadi government was dissolved and the Presidential Leadership Council (PLC) took command of the Yemeni Republic, incorporating the Southern Transitional Council into its new government. The UN announced on 2 June 2022 that the nationwide truce had been further extended by two months. According to the UN, over 150,000 people have been killed in Yemen, as well as estimates of more than 227,000 dead as a result of an ongoing famine and lack of healthcare facilities due to the war. The Wall Street Journal reported in March 2023 that Iran agreed to halt all military support to the Houthis and abide by the UN arms embargo, as part of a Chinese-brokered Iran-Saudi rapprochement deal. The agreement is viewed as part of Saudi Arabian-led efforts to pressure the Houthi militants to end the conflict through negotiated settlement; with Saudi and U.S. officials describing the concomitant Iranian behaviour as a "litmus test" for the endurance of the Chinese-brokered détente. On 23 December 2023, Hans Grundberg, the UN special envoy for Yemen, announced that the warring parties committed to steps towards a ceasefire.
The Saudi-led coalition's bombing of civilian areas has received condemnation from the international community. According to the Yemen Data Project, the bombing campaign has killed or injured an estimated 19,196 civilians as of March 2022. Houthi drone attacks targeting civilian areas in Saudi Arabia, UAE, and Southern Yemen have also attracted global condemnation; and the UN Security Council has imposed a global arms embargo on the Houthis since 2015. The United States has provided intelligence and logistical support for the Saudi Arabian-led campaign, and despite the Biden administr`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Yemeni Civil War (2014–present) conflict.`
      ),
  }),
};
const houthi_takeover_in_yemen_tool = {
  name: "houthi_takeover_in_yemen",
  description: `Conflict name: Houthi takeover in Yemen

*Part of the Yemeni Civil War*
Start date: 2014
End date (if applicable): 2015

Description: Page: Houthi takeover in Yemen
Summary: The Houthi takeover in Yemen, also known as the September 21 Revolution (by supporters), or 2014–15 Yemeni coup d'état (by opponents), was a popular revolution against Yemeni President Abdrabbuh Mansur Hadi led by the Houthis and their supporters that pushed the Yemeni government from power. It had origins in Houthi-led protests that began the previous month, and escalated when the Houthis stormed the Yemeni capital Sanaa on 21 September 2014, causing the resignation of Prime Minister Mohammed Basindawa, and later the resignation of President Abdrabbuh Mansur Hadi and his ministers on 22 January 2015 after Houthi forces seized the presidential palace, residence, and key military installations, and the formation of a ruling council by Houthi militants on 6 February 2015.
The unrest began on 18 August 2014 as the Houthis, angered over a government-implemented removal of fuel subsidies, called for mass protests. On 21 September, as the Houthis took control of Sanaa, the Yemeni Army did not formally intervene, other than troops affiliated with General Ali Mohsen al-Ahmar and the Muslim Brotherhood-affiliated Al-Islah Party. After gaining control over key government buildings in Sana'a, the Houthis and government signed a UN-brokered deal on 21 September to form a "unity government".
The unrest took a dramatic turn in January 2015, when Houthi fighters seized control of the presidential palace and Hadi's residence in an effort to gain more influence over the government and the drafting of a new constitution. On 22 January, Hadi and his government resigned en masse rather than comply with the Houthis' demands. Three weeks later, the Houthis declared parliament to be dissolved and installed a Revolutionary Committee as the interim authority, although they agreed to keep the House of Representatives in place two weeks later as part of a power-sharing agreement. The Houthi-led interim authority has been rejected by other internal opposition groups and has not been recognized internationally.
In March 2015, the Saudi Arabian-led intervention in Yemen began with airstrikes and a naval blockade to restore Hadi's government to power. The United States and the United Kingdom both support a political solution in Yemen. A 2017 UNICEF report stated that nearly half a million underage children in Yemen were on the verge of starvation, and about seven million people were facing acute food shortages. In 2016, the UN stated that, in Yemen, almost 7.5 million children needed medical care, and 370,000 children were on the verge of starvation.


== Background ==

On July 30, 2014, the Yemeni government announced an increase in fuel prices as part of reforms to subsidy programs, which aimed at unlocking foreign funding and easing pressure on the budget. The lifting of subsidies came after pressure from the International Monetary Fund, which conditioned its continued financial assistance on these reforms. The government raised the price of regular gasoline to 200 Yemeni riyals per liter (93 US cents) from 125 riyals (58 US cents). The price of diesel used for public transport and trucks rose to 195 riyals per liter (91 US cents) from 100 riyals (46 US cents).
Yemen had among the highest level of energy subsidies in the region. Given its low per capita income and staggering fiscal deficit, the country could not afford to subsidize energy especially since the elite got the most benefit from subsidized prices, not the poor. Fuel subsidies were benefiting powerful political allies of Ali Abdullah Saleh, who were smuggling subsidized oil to neighboring markets where they would reap huge profits. In 2013, fuel subsidies cost the Yemeni government $3 billion,  roughly 20 percent of state expenditure, according to a Finance Ministry statement carried by Yemen's official news agency.
All the same, fuel subsidies were among the few widely available social goods in Yemen. They kept down the cost of transport, water, and foo`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Houthi takeover in Yemen

*Part of the Yemeni Civil War* conflict.`
    ),
  }),
};
const islamic_state_insurgency_in_tunisia_tool = {
  name: "islamic_state_insurgency_in_tunisia",
  description: `Conflict name: Islamic State insurgency in Tunisia
Start date: 2015
End date (if applicable): 2022

Description: Page: Islamic State insurgency in Tunisia
Summary: The Islamic State Insurgency in Tunisia referred to the low–level militant and terror activity of the Islamic State branch in Tunisia from 2015 to 2022. The activity of the Islamic State (IS) in Tunisia began in June 2015, with the Sousse attacks, though an earlier terror incident in Bardo Museum in March 2015 was claimed by ISIL, while the Tunisian government blamed Okba Ibn Nafaa Brigade for the attack. Following massive border clashes near Ben Guerdane in March 2016, the activity of the IS group was described as an armed insurgency, switching from previous tactics of sporadic suicide attacks to attempts to gain territorial control. The armed insurgency was suppressed in 2022.


== Background ==


=== Rise of the Islamists ===
Since the death of Antar Zouabri the leader of the pro-al-Qaeda group called Armed Islamic Group of Algeria (GIA) which led an end of the Algerian Civil War in February 2002. The Islamist groups, like GIA and Salafist Group for Preaching and Combat (GSPC), continued the fight in their own insurgency in Algeria. In the meanwhile, on 11 April 2002 a suspected al-Qaeda deadly bombing attack was carried in the Algeria's neighbour country Tunisia, on the island of Djerba. Twenty-one people were killed and dozens were injured. A suspected Polish with a German citizenship called Christian Ganczarski was arrested and jailed for having connections with al-Qaeda and the attacker. In December 2006, two people were killed by Islamists and two others were arrested. On 3 January 2007 clashes broke out in Soliman, Tunisia, between the Tunisian Police and a suspected Islamist armed group. Fourteen people were killed, including two members of the security force, and fifteen people were arrested.
In late 2012, the Tunisian Army launched some operations against the Islamist rebels whom are active around the mountainous Algeria–Tunisia border. On 16 July 2014, a deadly attack against the army left fifteen soldiers and one attacker dead. Eighteen others were wounded on the Algeria–Tunisia border.


=== Bardo Museum incident ===
On 18 March 2015, three militants attacked the Bardo National Museum in the Tunisian capital city of Tunis, and took hostages. Twenty-one people, mostly European tourists, were killed at the scene, while an additional victim died ten days later. Around fifty others were injured. Two of the gunmen, Tunisian citizens Yassine Labidi and Saber Khachnaoui, were killed by police, while the third attacker managed to escape. Police treated the event as a terrorist attack. The Islamic State of Iraq and the Levant (ISIL) claimed responsibility for the attack, and threatened to commit further attacks. However, the Tunisian government blamed a local splinter group of Al-Qaeda in the Islamic Maghreb (AQIM), called the Okba Ibn Nafaa Brigade, for the attack. On 28 March, nine members were killed in a police raid.


== History ==


=== 2015 ===
On 26 June 2015 an Islamist mass shooting attack occurred at the tourist resort at Port El Kantaoui, about 10 kilometres (6.2 mi) north of the City of Sousse, Tunisia. Thirty-eight people, thirty of whom were Britons, were killed when an armed gunman attacked a hotel. It was the deadliest non-state attack in the history of modern Tunisia, with more fatalities than the twenty-two killed in the Bardo National Museum attack three months earlier.
On 24 November a bus carrying Tunisian Presidential Guards exploded, killing twelve, on a principal road in Tunis, Tunisia. ISIL claimed responsibility for the attack. The bomber, who also died in the attack, was identified as Houssem Abdelli.


=== 2016 ===
Between 7–9 March 2016 an armed attack on 7 March, in the City of Ben Guerdane, Tunisia near the border with Libya. The clashes continued also on 8, and 9 March, in the area. The final death toll was forty-five militants, thirteen security and seven civilians. On 19 March two militants were killed on the Libyan border, near to the `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Islamic State insurgency in Tunisia conflict.`
      ),
  }),
};
const kurdishturkish_conflict_2015present_tool = {
  name: "kurdishturkish_conflict_2015present",
  description: `Conflict name: Kurdish–Turkish conflict (2015–present)

*Part of the Kurdish–Turkish conflict (1978–present)*
Start date: 2015
End date (if applicable): Ongoing

Description: Page: Kurdish–Turkish conflict
Summary: Kurdish nationalist uprisings have periodically occurred in Turkey, beginning with the Turkish War of Independence and the consequent transition from the Ottoman Empire to the modern Turkish state and continuing to the present day with the current PKK–Turkey conflict.
According to Ottoman military records, Kurdish rebellions have been occurring in Anatolia for over two centuries. While large tribal Kurdish revolts had shaken the Ottoman Empire during the last decades of its existence, the modern phase of the conflict is believed to have begun in 1922, with the emergence of Kurdish nationalism which occurred in parallel with the formation of the modern State of Turkey. In 1925, an uprising for an independent Kurdistan, led by Shaikh Said Piran, was quickly put down, and soon afterward, Said and 36 of his followers were executed. Other large-scale Kurdish revolts occurred in Ararat and Dersim in 1930 and 1937. The British consul at Trebizond, the diplomatic post which was closest to Dersim, spoke of brutal and indiscriminate acts of violence and explicitly compared them to the 1915 Armenian genocide. "Thousands of Kurds," he wrote, "including women and children, were slain; others, mostly children, were thrown into the Euphrates; while thousands of others in less hostile areas, who had first been deprived of their cattle and other belongings, were deported to vilayets (provinces) in Central Anatolia. It is now stated that the Kurdish question no longer exists in Turkey."
The Kurds accuse successive Turkish governments of suppressing their identity through such means as the banning of Kurdish languages in print and media. Atatürk believed that the unity and stability of a country both lay in the existence of a unitary political identity, relegating cultural and ethnic distinctions to the private sphere. However, many Kurds did not relinquish their identity and they also did not relinquish their language. Large-scale armed conflict between the Turkish armed forces and the Kurdistan Workers' Party (PKK) occurred throughout the 1980s and 1990s, leaving over 35,000 dead.


== Background ==

The history of Kurdish rebellions against the Ottoman Empire dates back two centuries, but the modern conflict dates back to the abolition of the Caliphate. During the reign of Abdul Hamid II, who was Caliph as well as Sultan, the Kurds were loyal subjects of the Caliph and the establishment of a secular republic after the abolition of the Caliphate in 1924 became a source of widespread resentment. The establishment of the Turkish nationalist state and Turkish citizenship brought an end to the centuries-old millet system, which had unified the Muslim ethnic groups of the Ottoman Empire under a unified Muslim identity. The diverse Muslim ethnic groups of the former Empire were considered Turkish by the newly formed secular Turkish state, which did not recognize an independent Kurdish or Islamic national identity. One of the consequences of these seismic changes was a series of uprisings in Turkey's Kurdish-populated eastern and southeastern regions.


== History ==


=== Bitlis uprising (1914) ===

The Bitlis uprising was a Kurdish uprising in the Ottoman Empire in early 1914. It was supported by the Russian Empire. It was fought concurrently with an unrelated Kurdish uprising in Barzan in the Mosul Vilayet, which was also supported by Russia. Later Kurdish nationalist historiography portrayed the uprising as part of a Kurdish nationalist struggle, but its actual causes laid in opposition to conscription and taxation. The uprising began in early March, with a skirmish between Kurdish fighters and Ottoman gendarmes, where the latter was forced to retreat. The Kurds subsequently laid siege to the city of Bitlis, and captured the city on 2 April. Ottoman forces were then dispatched from Muş and Van and suppressed the uprising. After the defeat of the uprising on 4 April, one of the rebel leaders, Molla Selim, su`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Kurdish–Turkish conflict (2015–present)

*Part of the Kurdish–Turkish conflict (1978–present)* conflict.`
    ),
  }),
};
const _2016_niger_delta_conflict_tool = {
  name: "_2016_niger_delta_conflict",
  description: `Conflict name: 2016 Niger Delta conflict

*Part of the Conflict in the Niger Delta*
Start date: 2016
End date (if applicable): Ongoing

Description: Page: 2016 Niger Delta conflict
Summary: The 2016 Niger Delta conflict is an ongoing conflict around the Niger Delta region of Nigeria in a bid for the secession of the region, which was a part of the breakaway state of Biafra. It follows on-and-off conflict in the Christian-dominated southern Niger Delta in the preceding years, as well as an insurgency in the Muslim-dominated northeast.


== Background ==
Like most other African countries, British Nigeria grouped people together for governance without respect for their religious, linguistic, and ethnic differences. The region became part of a Niger Coast Protectorate in the 1890s when communities of Niger Delta signed an agreement with the British colonial agents. It was subsumed into the Southern Nigeria Protectorate in 1900 without consultations with the people of the region. Southern Nigeria was then merged with the Northern Nigeria Protectorate in 1914 despite the political and cultural differences between the various ethnicities. Nigeria, which gained independence from the United Kingdom in 1960, had at that time a population of 60 million people consisting of nearly 300 differing ethnic and cultural groups.
Nigeria's oil, which became its primary source of income after independence from the British Empire, was located in the south of the country. The Igbo-dominated secessionist state of Biafra that came into existence in 1967 acquired the oil-rich region which played a key role in the Nigerian civil war. Despite this, the region's development was ignored by successive governments. As a result, the region remains the poorest and most backward region of the country. The region's waters have also become highly polluted due to millions of tons of oil being spilled. Due to these reasons, the region has become afflicted with militancy.
People of the region have protested against the negative impact of the oil industry, corruption and lack of development. In recent years, militant groups seeking to control the resources have indulged in oil theft and violence which sometimes has been claimed as retribution for mistreatment of the locals by the oil industry. A violent insurgency was carried out under the banner Movement for the Emancipation of the Niger Delta (MEND) until an amnesty agreement in 2009 by Late President Umaru Musa Yar'adua. The election of Goodluck Jonathan (a Christian) as President of Nigeria was a significant factor in the ceasefire as he hailed from the region and was considered to be sympathetic to it. The conflict reignited after the election of Muhammadu Buhari (a Muslim) as president in 2015. This was due, in part, to rumours that Buhari was considering scrapping the amnesty agreement and, more generally, the traditional northern–southern and Muslim–Christian divide.


== Conflict ==


=== February–August 2016 ===
A spate of bombings on oil installations started in February 2016. The Niger Delta Avengers (NDA) then publicly announced its existence in March 2016. The NDA's declared aims are to create a sovereign state and they have threatened to disrupt Nigeria's economy to achieve their goals. The group has also criticised President of Nigeria Muhammadu Buhari for never visiting the region as well as for his detention of the Indigenous People of Biafra (IPOB) leader Nnamdi Kanu, who said he was not affiliated with either MEND or the NDA. A militant group calling itself Red Egbesu Water Lions later emerged in May 2016 and demanded his release, as well as that of former National Security Advisor Sambo Dasuki. It also demanded that the Economic and Financial Crimes Commission de-freeze the bank accounts of Government Ekpemupolo, as well as unconditional compensation to the victims of the Bonga oil spill and Chevron gas explosion. It further threatened to shut down all oil exploration activities in the region of its demands were not met. Another group calling itself Egbesu Mightier Fraternity emerged in the same month, demanding the release of Kanu and Dasuki`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2016 Niger Delta conflict

*Part of the Conflict in the Niger Delta* conflict.`
    ),
  }),
};
const _2016_nagornokarabakh_conflict_tool = {
  name: "_2016_nagornokarabakh_conflict",
  description: `Conflict name: 2016 Nagorno-Karabakh conflict

*Part of the Nagorno-Karabakh conflict*
Start date: 2016
End date (if applicable): 2016

Description: Page: 2016 Nagorno-Karabakh conflict
Summary: The 2016 Nagorno-Karabakh conflict, also known as the Four-Day War, April War, or April clashes, began along the former Nagorno-Karabakh line of contact on 1 April 2016 with the Artsakh Defence Army, backed by the Armenian Armed Forces, on one side and the Azerbaijani Armed Forces on the other.
The clashes occurred in a region that is disputed between the self-proclaimed Republic of Artsakh and the Republic of Azerbaijan. The region includes the former Soviet Nagorno-Karabakh Autonomous Oblast and the surrounding districts of Azerbaijan under the control of Armenian forces at the time. Azerbaijan claimed to have started a military operation to prevent purported continuous Armenian shelling of civilian areas in Azerbaijan. However, there was no evidence of Armenian shelling. Until the 2020 Nagorno-Karabakh war, the clashes were the worst since the 1994 ceasefire agreement signed by Artsakh, Azerbaijan and Armenia.
A ceasefire was reached on 5 April between Azerbaijan and Armenia in Moscow. The Nagorno-Karabakh authorities also welcomed the oral agreement. After the agreement, both sides accused each other of violations. Azerbaijan claimed to have regained 20 km2 (7.7 sq mi) of land, while Armenian officials suggested a loss of 8 km2 (3.1 sq mi) of land of no strategic importance. However, the International Crisis Group reported that those heights were of strategic importance.
Officially, Baku reported the loss of 31 servicemen without publishing their names. Armenian sources claimed much higher numbers varying between 300 and 500. The Ministry of Defence of Armenia reported the names of 92 military and civilian casualties, in total. The US State Department estimated that a total of 350 people, both military and civilian, had died. Official sources of the warring parties put those estimates either much higher or much lower, depending on the source.


== Background ==

The First Nagorno-Karabakh War ended with a ceasefire agreement between the warring parties that came into effect on 12 May 1994. Violations of the ceasefire occurred periodically in the following years, with notable escalations in 2008 and 2010, but incidents especially increased since 2014. According to the International Crisis Group, there were 60 deaths total, both military and civilian, in 2015 alone because of breaches of the ceasefire. The April 2016 clashes were the most serious breach of the 1994 ceasefire until 2020.
Among the possible reasons behind the escalation of the conflict was the worsening economy of Azerbaijan. The collapse of oil prices in 2015–16 have been frequently cited, with clashes being used to distract the Azerbaijani population from rising prices and unemployment. Alternatively, some Armenian sources blame Turkey for provoking violence. Some Turkish commentators have suggested a Russian strategy to destabilize the region.
Azerbaijan has been openly preparing for offensive operations against Nagorno Karabakh for several years, as evidenced by the continuous massive military buildup, as well as the Azerbaijani authorities' numerous statements in favor of a military solution to the conflict. Thus, on 23 March 2015, Azerbaijan's Minister of Defence stated that the Azerbaijani military had accumulated the necessary weaponry to destroy 70 percent of opposing forces in a first strike. In February 2016, US Director of National Intelligence James Clapper warned that Azerbaijan's military buildup combined with deteriorating economic conditions was increasing the risk of an escalation in 2016.
On 19 March 2016, President Aliyev stated: "To resolve the conflict, in the first place it is necessary for our country and army to become even stronger. A lot is being done in this direction. Today, we have gained full advantage on the line of contact." Furthermore, in his speech, president Aliyev openly accused the Minsk Group Co-Chairs of provocation against Azerbaijan and had stated that Azerbaijan's confide`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2016 Nagorno-Karabakh conflict

*Part of the Nagorno-Karabakh conflict* conflict.`
    ),
  }),
};
const pool_war_tool = {
  name: "pool_war",
  description: `Conflict name: Pool War
Start date: 2016
End date (if applicable): 2017

Description: Page: Pool War
Summary: The Pool War was a conflict between the Republic of the Congo and the Ninja militia in the Pool Department in the southeastern part of the country. Tensions grew between Frédéric Bintsamou (also known as Pastor Ntumi) and Congolese president Denis Sassou-Nguesso, after Bintsamou contested modifications to the constitution. Bintsamou was formerly a collaborator of Sassou-Nguesso.
Between April 2016 and April 2017, a total of 115 people died in the conflict. An estimated 13,000 people have been displaced as a result of the violence.


== Background ==
In March 2016, Denis Sassou Nguesso, who ruled for more than 30 years over Congo-Brazzaville, was re-elected in the 2016 presidential election. After the victory of Nguesso was declared, the opposition claimed the election was a fraud and clashes broke out soon after, in the southern part of Brazzaville, three police officers and two gunmen were killed in the clashes. The government claimed the Ninjas were the raiders and they were responsible for the attacks. According to the following Tuesday's statement from the government 2 civilians and 12 assailants were killed. The government also stated that it arrested fifty ex-militants after an attack.


== Timeline ==

On 4 April 2016, the Congolese government accused the Ninja militia of attacking security forces. The militia denied the accusations, calling them false pretext for political suppression. Violence continued with events such as shelling by the Congolese armed forces and attacks on trains by the Ninja militia. On 18 April 2017, 18 Congolese soldiers were killed by Ninja militiamen. The Congolese government and the Ninja militia signed a ceasefire agreement on 23 December 2017. Pursuant to the terms of the agreement, the Ninjas were to hand over their arms and cease their interference with trade between the cities of Brazzaville and Pointe Noire.


== Aftermath ==
Despite the end of the war, it wasn't until November 2018 that the Congo-Ocean Railway traffic was resumed.


== References ==`,
  schema: z.object({
    question: z
      .string()
      .describe(`The question to ask in regards to the Pool War conflict.`),
  }),
};
const kamwina_nsapu_rebellion_tool = {
  name: "kamwina_nsapu_rebellion",
  description: `Conflict name: Kamwina Nsapu rebellion
Start date: 2016
End date (if applicable): 2019

Description: Page: Kamwina Nsapu rebellion
Summary: The Kamwina Nsapu rebellion, also spelled Kamuina Nsapu rebellion, was an uprising that took place in the Democratic Republic of the Congo between 2016 and 2019. It was instigated by the Kamwina Nsapu militia against state security forces  in the provinces of Kasaï-Central, Kasaï, Kasaï-Oriental, Lomami and Sankuru. The fighting began after the militia, led by Kamwina Nsapu, attacked security forces in August 2016.
There was an ethnic aspect to the conflict: the rebels were mostly Luba and had selectively killed non-Luba.


== Background ==

In 2011, Jean-Pierre Mpandi was designated to succeed his uncle and become the sixth head or Kamwina Nsapu (black ant) of his Bajila Kasanja clan, part of the wider Lulua ethnic group, after his return from South Africa where he had been convicted in a diamond-trafficking case. Such chiefs exercise significant control over land and are required to be recognized by the central state even if they are selected according to traditions. This policy encourages chiefs to support the Congolese central government to get its endorsement.
Mpandi's home region supported the opposition in the 2011 national elections, and tensions flared when the government appointed supporters, rather than tribal chiefs, to powerful positions in the local government. When Mpandi was about to be appointed head of the Bajila Kasanja clan, provincial governor Alex Kande told him that he would only confirm the appointment if Mpandi joined the governing party. Mpandi refused to do so, and began to openly question the provincial and national authorities' legitimacy. The central government consequently refused to recognise Kamwina Nsapu's appointment as chief. That led him to contest the central government's power, and he began calling for an insurrection in June 2016. At some point, an investigation team raided his home for the first time, ostensibly to search for illegal weapons. Mpandi was outraged, and accused the team of not only "profaning" his status as chief, but also of attempting to rape his wife.


== Rebellion ==


=== Beginning of the uprising and Kamwina Nsapu's death ===
Kamwina Nsapu incited his men with xenophobic language, referring to the regular security forces as foreign mercenaries and an occupation force. He caused a militia, named after him, to launch attacks on the local police. On 12 August 2016, he was killed alongside eight other militiamen and 11 policemen in Tshimbulu. Upon his death, the Congolese Observatory for Human Rights condemned his killing and suggested he should have been arrested instead. The government did not bury his remains according to local customs, triggering outrage among his followers.
Several of his followers refused to believe that he was dead and escalated the violence by intensifying their attacks on the security forces. As the violence by Kamwina Nsapu's men escalated, the uprising spread, and an increasing number of locals picked up arms against the government. Kamwina Nsapu's death meant that the rebellion effectively fractured into numerous movements, "all fighting for different reasons". The security forces responded brutally, escalating the conflict.


=== Main phase, 2016–2017 ===
In September 2016, Kamwina Nsapu's militia captured an area 180 km from Kananga and then captured the Kananga Airport before it was retaken by the Armed Forces of the Democratic Republic of the Congo. On 26 September 2016, the government announced that in total, 49 people had been killed (27 militiamen, 16 policemen and 6 civilians) and 185 militiamen captured since the fighting began.
In January 2017, four militiamen were killed, and two policemen were wounded. A few days later, the rebels called for the removal of the governor, Alex Kande, and protested the visit of Prime Minister Samy Badibanga. On 31 January 2017, a Roman Catholic priest from St. Alphonsus Parish in Kananga who tried to stop the militia from taking children from schools was kidnap`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Kamwina Nsapu rebellion conflict.`
      ),
  }),
};
const conflict_in_rakhine_state_tool = {
  name: "conflict_in_rakhine_state",
  description: `Conflict name: Conflict in Rakhine State

*Part of the Rohingya conflict and the Internal conflict in Myanmar*
Start date: 2016
End date (if applicable): Ongoing

Description: Page: Conflict in Rakhine State (2016–present)
Summary: Violent clashes have been ongoing in the northern part of Myanmar's Rakhine State since October 2016. Insurgent attacks by the Arakan Rohingya Salvation Army (ARSA) have led to sectarian violence perpetrated by Myanmar's military and the local Buddhist population against predominantly Muslim Rohingya civilians. The conflict has sparked international outcry and was described as an ethnic cleansing by the United Nations High Commissioner for Human Rights. In August 2017, the situation worsened and hundreds of thousands of refugees fled Myanmar into Bangladesh, with an estimated 500,000 refugees having arrived by 27 September 2017. In January 2019, Arakan Army insurgents raided border police posts in Buthidaung Township, joining the conflict and beginning their military campaign in northern Rakhine State against the Burmese military.
The Muslim Rohingya minority in the region has historically experienced persecution. Laws such as the 1982 Myanmar nationality law ban Rohingya people from obtaining citizenship, and military operations in 1978, 1991 and 1992 against the Rohingya have led to their displacement throughout Rakhine State. Sectarian violence between Buddhist Rakhines and Muslim Rohingyas in 2012 and the 2013 have also caused mass displacements.
The current conflict began on 9 October 2016 when ARSA insurgents attacked Burmese border posts along the Bangladesh–Myanmar border. In response, Burmese authorities launched "clearance operations" between October 2016 to June 2017, which killed more than 1,000 Rohingya civilians, according to UN officials. Following attacks on military outposts by ARSA on 25 August 2017, sectarian violence erupted once again in northern Rakhine State. The Burmese military later claimed that 400 insurgents had died in the clashes that followed. However, the UN estimates that at least 1,000 people were killed between 25 August and 8 September. By September, the violence had resulted in 389,000 Rohingyas fleeing their homes.
Foreign leaders, including the United Nations Secretary General and other high UN officials, and the United Nations Security Council—while acknowledging the initial attacks by Rohingya insurgents—have strongly criticised the Myanmar government's conduct in the current conflict, calling for the Myanmar government to restrain its forces and factions, and to stop attacking civilians.
A report published on 27 June 2018 by Amnesty International detailed crimes against humanity perpetrated by Burmese military units both before and after 25 August 2017 ARSA attacks. It also noted that those units were sent to Rakhine State shortly before the attacks took place, suggesting that the crackdown that followed was planned in advance.


== Background ==

The Rohingya people are an ethnic minority that mainly live in the northern region of Rakhine State, Myanmar, and have been described as one of the world's most persecuted minorities. They describe themselves as descendants of Arab traders and other groups who settled in the region many generations ago. After riots in 2012, academic authors used the term Rohingya to refer to the Muslim community in northern Rakhine. For example, Professor Andrew Selth of Griffith University uses the term "Rohingya" but states "These are Bengali Muslims who live in Arakan State... most Rohingyas arrived with the British colonialists in the 19th and 20th centuries." Among the overseas Rohingya community, the term has been gaining popularity since the 1990s, though a considerable portion of Muslims in northern Rakhine are unfamiliar with the term and prefer to use alternatives. Scholars have stated that they have been present in the region since the 15th century. However, they have been denied citizenship by the government of Myanmar, which describes them as illegal immigrants from Bangladesh.
In modern times, the persecution of Rohingyas in Myanmar dates back to the 1970s. Since then, Rohingya people have `,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Conflict in Rakhine State

*Part of the Rohingya conflict and the Internal conflict in Myanmar* conflict.`
    ),
  }),
};
const kasese_clashes_tool = {
  name: "kasese_clashes",
  description: `Conflict name: Kasese clashes
Start date: 2016
End date (if applicable): 2016

Description: Page: Kasese clashes
Summary: Violence erupted on 26 November 2016 in the town of Kasese, the capital of the Ugandan Kingdom of Rwenzururu, when Ugandan police raided the government offices of the Rwenzururu kingdom, killing eight Rwenzururian royal guards and arresting two others. According to the government of Uganda, the raid was in response to militant attacks on police posts in the region two weeks earlier, allegedly perpetrated by the royal guards.
On the next day, Uganda's armed forces and police raided the Rwenzururu royal palace after the expiration of an ultimatum issued by the Ugandan government, resulting in the deaths of 87 royal guards and 16 policemen. Following the raids, the Omusinga (king) of Rwenzururu, Charles Mumbere, was arrested and charged with murder.


== Background ==
The Rwenzururu region is inhabited by the Konjo and Amba peoples, who have fought for secession from the Tooro Kingdom since 1962 under the movement known as "Rwenzururu". The violence reached a height in 1963 and 1964, when Tooro soldiers massacred many Konjo and Amba civilians as they sought control over the lower valleys. The Ugandan army intervened against the separatists, doing such significant damage to the movement was suppressed for some time. The movement however, achieved fame through a local folk epic and remained relevant, eventually gaining autonomy in 1982 and official government recognition as a kingdom in 2008.
After Rwenzururu was recognised by the Ugandan government, violence between the Konjo and Amba peoples became more prevalent, as the Bakonjo generally support the opposition whilst the Baamba generally support the central government. In February and April 2016, violence erupted between the two communities due to disputed local election results and political infighting, leading to the deaths of at least 30 people.


== Clashes ==
The Uganda National Police raided the government offices of the Rwenzururu kingdom on 26 November 2016, killing eight Rwenzururian royal guards and arresting two others. According to the government of Uganda, the raid was in response to militant attacks on police posts in the region two weeks earlier, allegedly perpetrated by the royal guards.
The next day, on 27 November 2016, two Ugandan policemen were killed by an angry mob of civilians. The police, accompanied by the Uganda People's Defence Force (UPDF), arrived at the Rwenzururu royal palace at around 10:00 am (EAT). Brigadier Peter Elwelu, who was in charge of the soldiers and policemen outside the palace, was ordered to storm the palace in an hour if the conflict had not been resolved peacefully by then. At 11:00 am, Ugandan President Yoweri Museveni issued an ultimatum to Charles Mumbere, the Omusinga (king) of Rwenzururu, demanding that he surrender his guards and their weapons within two hours or he will "face the consequences".  At approximately 1:01 pm, Ugandan security forces stormed the royal palace, and the ensuing firefight resulted in the deaths of 87 royal guards and at least 16 policemen.
According to Atkins Katusabe, a local MP who was part of the negotiating team inside the palace, the raid was conducted despite attempts by the negotiators to create a peaceful resolution to the conflict. Katusabe also claimed that the royal guards were unarmed, and that the reason he and Rwenzururian Prime Minister Johnson Thembo Kitsumbire survived was because Ugandan soldiers had escorted them out just before the raid.


== Aftermath ==
The Ugandan government gave an official death toll of 103 in March 2017. Human Rights Watch, however, estimated that at least 156 people had been killed in the clashes.
Ugandan authorities arrested and charged over 180 people in the weeks following the clashes. Mumbere was arrested and charged with murder on 30 November 2016. In a court hearing on 13 December 2016, Mumbere received additional charges of terrorism, aggravated robbery and attempted murder. Kitsumbire was later also arrested at his home `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Kasese clashes conflict.`
      ),
  }),
};
const insurgency_in_northern_chad_tool = {
  name: "insurgency_in_northern_chad",
  description: `Conflict name: Insurgency in Northern Chad
Start date: 2016
End date (if applicable): Ongoing

Description: Page: Insurgency in Chad (2016–present)
Summary: In 2016, the Front for Change and Concord in Chad (FACT) and the Military Command Council for the Salvation of the Republic (CCMSR) began a rebellion against the Chadian government. From their rear bases in southern Libya, FACT and CCMSR have launched offensives and raids into Northern Chad seeking to overthrow the government of former president Idriss Déby, who had been in power since a December 1990 coup. Other rebel groups are also involved in the insurgency, though to a lesser extent.
In 2021, Idriss Déby was killed during a major rebel offensive. Despite this, the insurgents were ultimately repelled and Mahamat Déby Itno rose to succeed his father as ruler of Chad. Though a ceasefire agreement was signed by many insurgent groups in August 2022, this failed to fully contain the uprising. By 2024, the insurgency was ongoing in the north and had spread to the border of the Central African Republic.


== Background ==

Historically, Chad has suffered from a large number of civil wars, foreign conflicts, and coups since its independence from France in 1958. Idriss Déby seized the Chadian presidency in a military coup in 1990. Since then, he enjoyed backing by both France and China. Déby's government was able to repeatedly defeat rebellions against his rule. Militant opposition groups were eventually driven from the country into exile. After the end of the Chadian Civil War (2005–2010), Chadian insurgents were forced to leave their old bases in Sudan. Many consequently moved into Libya which fell into unrest from 2011 due to the First Libyan Civil War.
In 2014, the Second Libyan Civil War broke out. Several Chadian rebel groups consequently became mercenaries in service of various Libyan factions, receiving money and weaponry to prepare for their return to Chad.


== Insurgency ==


=== Emergence of new rebel groups and battles for Kouri Bougoudi ===
Two new Chadian rebel groups, FACT and the CCMSR, were organized in southern Libya in 2016 and aided local groups in return for money, equipment, and other support. FACT initially became allied to a Misrata-based faction. By 2017, the Chadian intelligence believed that rebels led by Timane Erdimi, a nephew and long-time opponent of Idriss Déby, were gathering weapons in southern Libya.
In July 2017, the CCMSR launched an offensive on Kouri Bougoudi seeking to seize control of the region and its lucrative mines. These assaults were ultimately repelled by the Chadian government although the CCMSR claimed to have launched a second attack in August 2017 which the Chadian government denied took place. In September, Chad severed diplomatic relations with Qatar, accusing it of attempting to destabilize the country. Journalist Ben Taub suspected that this development was related to Qatar harboring Timane Erdimi who was still trying to overthrow Déby.
By fall, fighting between government loyalists and insurgents grew more frequent along the Chadian-Libyan border. Déby responded by relocating hundreds of Chadian soldiers who had been sent to fight against Boko Haram to the north.
On 11 August 2018, CCMSR launched a major attack on the military outpost at Kouri Bougoudi in the Tibesti Mountains, later claiming to have killed 73 and captured 45 soldiers while suffering just 11 casualties (4 dead, 7 wounded). The Chadian government initially attempted to deny that the attack had taken place, and then downplayed its significance. While the CCMSR offered to release its prisoners in return for the release of imprisoned rebel leaders, the Chadian government refused to negotiate with "savage mercenaries, bandits [and] thugs", and instead ordered local miners to abandon their camp at Kouri Bougoudi. The military subsequently retreated from the area on 22 August, leaving it to the CCMSR and illegal miners. From then on, the Chadian Air Force launched several bombing raids in the region, targeting the Kouri Bougoudi mining camp and camel herds, killing s`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Insurgency in Northern Chad conflict.`
      ),
  }),
};
const _2017_afghanistanpakistan_border_skirmish_tool = {
  name: "_2017_afghanistanpakistan_border_skirmish",
  description: `Conflict name: 2017 Afghanistan–Pakistan border skirmish

*Part of the Afghanistan–Pakistan skirmishes*
Start date: 2017
End date (if applicable): 2017

Description: Page: 2017 Afghanistan–Pakistan border skirmish
Summary: On 5 May 2017, an armed skirmish occurred after Afghan forces attacked a Pakistani census team in Chaman, in Pakistan near the border with Afghanistan. At least 15 people died on both sides in the immediate border clash. It is one of a series of similar border-related incidents between the two countries.


== Background ==
In February 2017, Pakistan closed the border crossings at Torkham and Chaman due to security reasons following the Sehwan suicide bombing. Hours after the blast, the Pakistan Army reportedly launched "strikes" on militant bases in Nangarhar, Afghanistan. In March, 32 days after it was closed, Pakistani Prime Minister Nawaz Sharif ordered the reopening of the Afghanistan–Pakistan border as a "goodwill gesture". Subsequently, the Pakistani government decided to fence selected parts of the country's border with Afghanistan. On 5 April, an Afghan Foreign Ministry spokesman said Kabul might resort to military action if diplomacy failed to resolve the border fencing issue.
The Afghanistan–Pakistan border, known as the Durand Line, runs through the Pashtun ethnic homeland, dividing the region between the two countries. Historically, the Afghan government has disputed the border and resisted attempts at border control or fencing, straining ties between both nations. The Afghan foreign ministry claimed it had also "warned" Pakistan not to conduct its census in the villages near the border area.


== Incident ==
On 5 May, a Pakistani census team that was collecting population data was attacked by Afghan forces. Pakistani officials said that the fighting began after Afghan security forces fired on the census workers and the F.C. paramilitary  troops escorting them. The team was present near the village of Luqman located in Spin Boldak and Killi Jahangir villages near the border on the Pakistani side. According to Pakistan, the Afghan Border Police had been notified of the ongoing census activities in advance, but the Afghan forces began creating hurdles for them since 30 April.
Samim Khaplwak, an Afghan spokesman for the governor of Kandahar, claimed that the Pakistani census team had strayed into Afghanistan. An Afghan foreign ministry spokesman claimed the villages were located in Spin Boldak District on their side of the Durand Line disputed by Afghanistan, identifying them as Luqman and Haji Nazar. He said the Afghan forces fired upon the Pakistani personnel.
In return, Pakistani forces attacked the Afghan forces. On Pakistan's side, the Afghan troops firing killed nine people, including three women and five children, while 40 others were wounded. The Pakistani troops' firing targeted Afghan security personnel and 50+ border guards were killed while 100+ Afghan security forces, were injured and at least 1 was captured. It also said that two Pakistani soldiers were also killed and another nine were wounded. Furthermore, the military said Afghanistan requested a ceasefire which Pakistan accepted. An Afghan government spokesman said they "totally rejected" the casualty figures by Pakistan as "very false". Afghanistan's envoy to Pakistan Omar Zakhilwal said that only two Afghan soldiers were killed and seven injured. He asserted: "The Chaman clash left casualties, deaths and injured on Pakistan side too but we, instead of celebrating, called it unfortunate and regrettable."


== Reaction ==
A spokesman for Kandahar police told Reuters that the Pakistani team were using the census as cover for "malicious activities and to provoke villagers against the government".
The Inspector-General of Pakistan's Frontier Corps, Major-General Nadeem Ahmed, said that Afghan forces had intruded into Pakistani territory and taken positions by occupying houses there. He said the Afghans had targeted civilian populations and used villagers as human shields, but they retreated from their positions after Pakistani forces launched an assault. He also added that Pakistan's international`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2017 Afghanistan–Pakistan border skirmish

*Part of the Afghanistan–Pakistan skirmishes* conflict.`
    ),
  }),
};
const _20172020_qatif_unrest_tool = {
  name: "_20172020_qatif_unrest",
  description: `Conflict name: 2017–2020 Qatif unrest

*Part of the Qatif conflict*
Start date: 2017
End date (if applicable): 2020

Description: Page: 2017–2020 Qatif unrest
Summary: The 2017–2020 Qatif unrest was a phase of conflict in the Qatif region of Eastern Province, Saudi Arabia, between Saudi security forces and the local Shia community, that arose sporadically starting in 1979, including a series of protests and repression during the 2011–12 Saudi Arabian protests.
This phase of the conflict began after an incident on 12 May 2017, when a child and a Pakistani man were shot and killed. The detention of Qatif human rights activist Israa al-Ghomgham and her husband and the possible beheading of al-Ghomgham as the first Saudi woman to be executed for her human rights activities gained international attention during 2018. On 31 January 2019, the Saudi authorities confirmed in a public statement that they would not seek the imposition of the death penalty against al-Ghomgham.


== Background ==

On 15 October 2014, Nimr al-Nimr was sentenced to death by the Specialised Criminal Court for "seeking 'foreign meddling' in Saudi Arabia, 'disobeying' its rulers and taking up arms against the security forces".
Said Boumedouha of Amnesty International stated that the death sentence was part of a campaign by the authorities in Saudi Arabia to crush all dissent, including those defending the rights of the Kingdom's Shi'a Muslim community.
Nimr al-Nimr's brother, Mohammad al-Nimr, tweeted information about the death sentence and was arrested on the same day. The head of Iran's armed forces warned Saudi Arabia that it would "pay dearly" if it carried out the execution.
In March 2015 the Saudi Arabian appellate court upheld the death sentence against al-Nimr. On 25 October 2015, the Supreme Religious Court of Saudi Arabia rejected al-Nimr's appeal against his death sentence. During an interview for Reuters, al-Nimr's brother claimed that the decision was a result of a hearing which occurred without the presence or notification of al-Nimr's lawyers and family. Al-Nimr's brother still remained hopeful that King Salman would grant a pardon. Nimr al-Nimr was executed along with 46 others on 2 January 2016.


== Low-level conflict ==
From May 2017 through to 2018 and 2019, several incidents occurred in which Qatif residents and/or Saudi policemen were killed.


=== Awamiyah residential area destruction ===
Around May 2017, Saudi authorities erected siege barricades in Awamiyah and attempted to bulldoze the al-Musawara residential area.  Adam Coogle of Human Rights Watch (HRW) described the conflict as surprisingly intense for Saudi Arabia, stating, "I've documented conflict in Saudi Arabia before but nothing like this. I've seen protests, but nothing this militarised." He considered it unprecedented for there to be "heavy clashes going on between the state and its citizens in a Saudi city." About 12–25 people were killed in shelling and sniper fire during May and the following few months. Streets of Awamiyah were described by The Independent as "covered in rubble and sewage" and "[looking] more like a scene from Syria than an oil-rich Gulf city." One protestor stated that he switched from peaceful protesting to methods to armed methods as a result of government repression, including an assault against his wife and frightening his children.


== Legal cases ==
In early December 2017, Israa al-Ghomgham and her husband Moussa al-Hashem were arrested in their home and detained in the Dammam al-Mabahith prison. They were charged for their activities in relation to participation and documentation of the Qatif political protests. On 6 August 2018, the prosecutor in their case recommended that they be executed, making al-Ghomgham the first Saudi women to be sentenced to death for human rights campaigning, according to Saudi activists. Al-Ghomgham and her husband's potential death sentence gained international attention, with support for their case from Shia Rights Watch, the European Saudi Organisation for Human Rights, Amnesty International, and Global Affairs Canada. Al-Ghomgham's final s`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2017–2020 Qatif unrest

*Part of the Qatif conflict* conflict.`
    ),
  }),
};
const marawi_crisis_tool = {
  name: "marawi_crisis",
  description: `Conflict name: Marawi crisis

*Part of the Moro conflict and the Military intervention against ISIL*
Start date: 2017
End date (if applicable): 2017

Description: Page: Siege of Marawi
Summary: The siege of Marawi (Filipino: Pagkubkob sa Marawi), also known as the Marawi crisis (Krisis sa Marawi) and the Battle of Marawi (Labanan sa Marawi), was a five-month-long armed conflict in Marawi, Philippines, that started on May 23, 2017, between Philippine government security forces against militants affiliated with the Islamic State (IS), including the Maute and Abu Sayyaf Salafi jihadist groups. The battle also became the longest urban battle in the modern history of the Philippines.
According to the Philippine government, the clashes began during an offensive in Marawi to capture Isnilon Hapilon, the leader of the IS-affiliated Abu Sayyaf group, after receiving reports that Hapilon was in the city, possibly to meet with militants of the Maute group. A deadly firefight erupted when Hapilon's forces opened fire on the combined army and police teams and called for reinforcements from the Maute group, an armed group that pledged allegiance to the Islamic State and which is believed to be responsible for the 2016 Davao City bombing, according to military spokesmen.
Maute group militants attacked Camp Ranao and occupied several buildings in the city, including Marawi City Hall, Mindanao State University, a hospital and the city jail. They also occupied the main street and set fire to Saint Mary's Cathedral, Ninoy Aquino School and Dansalan College, run by the United Church of Christ in the Philippines (UCCP). The militants also took a priest and several churchgoers hostage.
The Armed Forces of the Philippines stated that some of the terrorists were foreigners who had been in the country for a long time, offering support to the Maute group in Marawi. Their main objective was to raise an ISIL flag at the Lanao del Sur Provincial Capitol and declare a wilayat or provincial IS territory in Lanao del Sur.
On October 17, 2017, the day after the deaths of militant leaders Omar Maute and Isnilon Hapilon, President Duterte declared that Marawi was "liberated from terrorist influence". Then on October 23, 2017, Defense Secretary Delfin Lorenzana announced that the five-month battle against the terrorists in Marawi had finally ended.


== Background ==
The Battle of Marawi was a consequence of the Philippines' long struggle against terrorism, in the aftermath of September 11 attacks in the United States, against the Abu Sayyaf Group (ASG) then linked with Al-Qaeda and now with the Islamic State. But the Battle of Marawi has been associated with the Maute group being its stronghold. The Maute group had established a stronghold in Lanao del Sur since February 2016 and was blamed for the 2016 Davao City bombing and two attacks in Butig, Lanao del Sur, a town located south of Marawi, in 2016. Since the militant group's founding in 2013, the Philippine government has downplayed the threat of ISIS in the Philippines. Following the February 2016 Butig clash with the Maute group, then-President Benigno Aquino III discounted the possibility of the Islamic State's presence in the country. He said that those behind the attack were just mercenaries wanting to be recognized by the Middle East-based terror group.
The Abu Sayyaf group, blamed for deadly bombings and kidnappings in the past, had also pledged allegiance to the Islamic State movement in the summer of 2014. One of its leaders, Isnilon Hapilon, was listed as among the world's most wanted terrorists by the US State Department with a reward of up to US$5 million for his capture. Following the abduction and subsequent beheading of Canadian businessman John Ridsdel in April 2016, Aquino disclosed that he had received death threats from the jihadist group, and that the Abu Sayyaf also plotted to kidnap his sister Kris, and Manny Pacquiao. Aquino also identified Hapilon behind attempts to convert and recruit inmates at the New Bilibid Prison to their cause, and embark on a bombing campaign in Metro Manila, which he said was "part of their effort to gain favor with I`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Marawi crisis

*Part of the Moro conflict and the Military intervention against ISIL* conflict.`
    ),
  }),
};
const anglophone_crisis_tool = {
  name: "anglophone_crisis",
  description: `Conflict name: Anglophone Crisis
Start date: 2017
End date (if applicable): Ongoing

Description: Page: Anglophone Crisis
Summary: The Anglophone Crisis (French: Crise anglophone), also known as the Ambazonia War, is an ongoing armed conflict in the English-speaking Northwest and Southwest regions of Cameroon, between the Cameroonian government and separatist rebel groups, part of the long-standing Anglophone problem. Following the suppression of 2016–17 protests by Cameroonian authorities, separatists in the Anglophone regions (formerly collectively known as the Southern Cameroons) launched a guerrilla campaign and later proclaimed independence. Within two months, the government of Cameroon declared war on the separatists and sent its army into the Anglophone regions.
Starting as a low-scale insurgency, the conflict spread to most parts of the Anglophone regions within a year. By the summer of 2019, the government controlled the major cities and parts of the countryside, while the Ambazonian nationalists held parts of the countryside and regularly appeared in the major cities. Separatists have occasionally carried out raids into the neighboring Francophone regions of Littoral and West. Thousands of people have been killed in the war, and more than half a million have been forced to flee their homes. The Cameroonian government was supported by the Buhari administration in Nigeria, while at least one Ambazonian group is allied to Biafran separatists.
Talks mediated by Switzerland in 2019 ultimately failed, and the Ambazonian leadership crisis has complicated any diplomatic process. Separatist leaders who were extradited from Nigeria in 2018 were in 2019 handed life sentences by a military tribunal. Facing mounting international pressure for a global ceasefire, in July 2020, Cameroon began negotiating with these imprisoned leaders. The talks were held between Sisiku Julius Ayuk Tabe and other imprisoned leaders and representatives of the Cameroonian government. The talks outlined a series of conditions for the Cameroonian government to accept, which Ayuk Tabe said would create an "enabling environment" for substantial negotiations to occur. These talks ultimately failed, and fighting continued.


== Background ==

The name "Ambazonia" is taken from Ambas Bay and Ambozes, the local name of the mouth of the Wouri River. This is where the English language was permanently established for the first time in Southern Cameroons, when missionary Alfred Saker founded a settlement of freed slaves by Ambas Bay in 1858, which was later renamed Victoria (present-day Limbe). In 1884, the area became the British Ambas Bay Protectorate, with Victoria as its capital. Britain ceded the area to the German territory of Kamerun in 1887. Germany had some trouble establishing control over the hinterlands of Victoria, and fought the Bafut Wars against local fondoms until 1907.
Following World War I and the Treaty of Versailles, Kamerun was divided between a French and a British League of Nations Mandate. The French mandate was known as Cameroun, and comprised most of the former German territory. The British mandate was an elongated strip of land along the border of Colonial Nigeria, consisting of Northern Cameroons and Southern Cameroons, including the historical Ambas Bay Protectorate. This territory was organized as British Cameroons.

The British administered the territories through indirect rule, allowing native authorities to administer the population according to their own traditions. In 1953, the Southern Cameroons delegation at a conference in London asked for a separate region. The British agreed, and Southern Cameroons became an autonomous region with its capital still at Buea. Elections were held in 1954 and the parliament met on 1 October 1954, with E. M. L. Endeley as Premier.
The United Nations organised a plebiscite in the region on 11 February 1961 which put two alternatives to the people: union with Nigeria or union with Cameroon. The third option, independence, was opposed by the British representative to the UN Trusteeship Council`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Anglophone Crisis conflict.`
      ),
  }),
};
const insurgency_in_cabo_delgado_tool = {
  name: "insurgency_in_cabo_delgado",
  description: `Conflict name: Insurgency in Cabo Delgado
Start date: 2017
End date (if applicable): Ongoing

Description: Page: Insurgency in Cabo Delgado
Summary: The insurgency in Cabo Delgado is an ongoing Islamist insurgency in Cabo Delgado Province, Mozambique, mainly fought between militant Islamists and jihadists attempting to establish an Islamic state in the region, and Mozambican security forces. Civilians have been the main targets of terrorist attacks by Islamist militants. The main insurgent faction is Ansar al-Sunna, a native extremist faction with tenuous international connections. From mid-2018, the Islamic State's Central Africa Province has allegedly become active in northern Mozambique as well, and claimed its first attack against Mozambican security forces in June 2019. In addition, bandits have exploited the rebellion to carry out raids. As of 2020, the insurgency intensified, as in the first half of 2020 there were nearly as many attacks carried out as in the whole of 2019.
Ansar al-Sunna (English: "Supporters of the Tradition") is similar to the name of an Iraqi Sunni insurgent group that fought against U.S. troops between 2003 and 2007. They are known locally as al-Shabaab but they are not formally related to the better known Somali al-Shabaab. Some of the militants are known to speak Portuguese, the official language of Mozambique, however others speak Kimwane, the local language, and Swahili, the lingua franca language spoken north of that area in the Great Lakes region. Reports also state that members are allegedly mostly Mozambicans from Mocimboa da Praia, Palma, and Macomia districts, but also include foreign nationals from Tanzania and Somalia.


== Background ==
Ansar al-Sunna, also known by its original name Ahlu Sunnah Wa-Jamo (translated: "adepts of the prophetic tradition"), was initially an Islamic religious movement in the northern districts of Cabo Delgado which first appeared around 2015. It was formed by followers of the radical Kenyan cleric Aboud Rogo, who was killed in 2012. Thereafter, some members of his movement settled down in Kibiti, Tanzania, before moving into Mozambique.
Ansar al-Sunna claims that Islam as practised in Mozambique has been corrupted and no longer follows the teachings of Muhammad. The movement's members consequently entered traditional mosques with weapons in order to threaten others to follow their own radical beliefs. The movement is also anti-Christian, anti-Animist, and anti-Western, and has tried to prevent people from attending hospitals or schools which it considers secular and anti-Islamic. This behavior alienated much of the local population instead of converting them to Ahlu Sunnah Wa-Jamo, so that the movement's members broke away and formed their own places of worship. Over time, the group became increasingly violent: it called an extreme form of Sharia to be implemented in the country, no longer recognized the Mozambican government, and started to form hidden camps in Macomia District, Mocímboa da Praia District, and Montepuez District. There, Ansar al-Sunna militants were trained by ex-policemen, and ex-frontier guards who had been fired and held grudges against the government. The movement also contacted other Islamist militants in East Africa, and reportedly hired trainers from Somalia, Tanzania, and Kenya. Some of the Ansar al-Sunna militants have also journeyed abroad to receive direct training by other militant groups.
The militants are not unified, but split into different cells which do not appear to coordinate their actions. By August 2018, the Mozambican police had identified six men as leaders of the militants in Cabo Delgado: Abdul Faizal, Abdul Raim, Abdul Remane, Ibn Omar, "Salimo", and Nuno Remane. Ansar al-Sunna funds itself through drug trafficking (primarily heroin), contraband, and ivory trade.
While religion does play a fundamental role in the conflict, analysts believe the most important factors in the insurgency are widespread social, economic, and political problems in Mozambique. Unemployment and especially youth unemployment are considered the`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Insurgency in Cabo Delgado conflict.`
      ),
  }),
};
const _2017_iraqikurdish_conflict_tool = {
  name: "_2017_iraqikurdish_conflict",
  description: `Conflict name: 2017 Iraqi–Kurdish conflict

*Part of the War in Iraq*
Start date: 2017
End date (if applicable): 2017

Description: Page: 2017 Iraqi–Kurdish conflict
Summary: The 2017 Iraqi–Kurdish conflict, also known as the Kirkuk crisis, was a conflict in which the Iraqi government retook disputed territories in Iraq which had been held by the Peshmerga since ISIL's Northern Iraq offensive in 2014. The conflict began on 15 October 2017 after tensions arising from the Kurdistan Region independence referendum of 25 September. The tension between the federal Iraqi government and Kurdistan Region escalated into conflict when the Peshmerga ignored repeated warnings to return Kirkuk to Iraqi government forces. Part of the conflict was the Battle of Kirkuk, when Iraqi forces routed Peshmerga forces from the city in a surprise dawn-offensive, marking the beginning of clashes. 
The conflict began in response to a referendum vote on independence held by the Kurdistan Regional Government to break away from Iraq despite the Federal Court deeming the vote unconstitutional. The designated break away areas included territories disputed between the Iraqi central government and the Kurdistan Regional Government. The disputed territories had been under the control of government forces prior to ISIL's Northern Iraq offensive during which they switched into the hands of the Kurdistan Regional Government.
The central government demanded the return of the areas to central administration following the end of the war, however this was rejected by the Kurdistan Regional Government. Chief among these areas were the oil rich regions of Kirkuk and Sinjar as well as the areas of Tuz Khurmatu, Makhmur and Jalawla. The vote was heavily opposed by non-Kurdish residents of the territories who had been accusing the Kurdistan Regional Government for years of discriminatory treatment and forced Kurdification of their areas including demolition of entire settlements, gerry-mandering and vote-rigging. 
As a result of the conflict, Kurdistan Region lost a fifth of the land mass it had administered prior to the conflict and was forced to cancel the results of the referendum.


== Background ==

The President of the Iraqi Kurdistan Region, Masoud Barzani, facilitated the Iraqi Kurdistan independence referendum in September 2017. This led the Prime Minister of Iraq Haider al-Abadi to demand that the referendum result be cancelled, and called on the KRG to initiate dialogue in the framework of the constitution. The Kurdistan Regional Government rejected these offers despite intense pressure from neighbouring countries and the international community, culminating in an air embargo on the region. 
The announcement of the referendum was taken negatively within the halls of the Iraqi government. Within the region it was the product of long held dreams of Kurdish independence beginning in the twentieth century as well as local politics within the region. The ruling KDP party, looking to ward off threat to its authority from rival PUK and Gorran parties saw the election as a way to consolidate its power and place its rivals in a difficult position in the backdrop of the upcoming elections. This tense background created disharmony in the rank of the Kurdish leadership which contributed to the defeat of Peshmerga forces in the conflict. 
The initial assault came as a surprise given the repeated assurances by the Prime Minister of Iraq, Haider Al Abadi, that there would be no offensive against the region despite the build of Iraqi troops on its borders. This however, turned out to be a ruse to lull Kurdish defences into a sense of security. The assault came in the early hours of 16 October 2017 when the central government forces launched a lightning offensive on the Peshmerga forces on the borders of the city and inside the K9 air base. However, as the battle went on, Kurdish defences began to collapse as the offensive gathered momentum. 
Disorganised Peshmerga lines to the south of the city crumbled as they were engaged by Iraqi tanks and a full retreat ensued. By mid-day the KRG appointed mayor of Kirk`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2017 Iraqi–Kurdish conflict

*Part of the War in Iraq* conflict.`
    ),
  }),
};
const islamic_state_insurgency_in_iraq_2017present_tool = {
  name: "islamic_state_insurgency_in_iraq_2017present",
  description: `Conflict name: Islamic State insurgency in Iraq (2017–present)

*Part of the Iraqi conflict*
Start date: 2017
End date (if applicable): Ongoing

Description: Page: Islamic State insurgency in Iraq (2017–present)
Summary: The Islamic State insurgency in Iraq is an ongoing low-intensity insurgency that began in 2017 after the Islamic State (IS) lost its territorial control in the War in Iraq, during which IS and allied White Flags fought the Iraqi military (largely backed by the United States, United Kingdom and other countries conducting airstrikes against IS) and allied paramilitary forces (largely backed by Iran).


== Context ==
The insurgency is a direct continuation of the War in Iraq from 2013 to 2017, with IS continuing armed opposition against the Shia-led Iraqi Government. Along with the Islamic State, other insurgents fighting the government include a group known as the White Flags which is reportedly composed of former IS members and Kurdish rebels and is believed by the government of Iraq to be part of Ansar al-Islam and possibly affiliated with al-Qaeda. The group operates mostly in the Kirkuk Governorate and has used an assortment of guerilla tactics against government forces. In September 2017, Abu Bakr al-Baghdadi, the leader of IS, called on IS supporters around the world to launch attacks on Western news media and continued in his message the IS must focus on combating the two-pronged attack on the Muslim Ummah; these statements marked a departure from previous rhetoric which was focused on the state building of IS and heralded a shift in IS's strategy toward a classical insurgency.


== Course of the insurgency ==
Since IS's loss of all territory in Iraq in late 2017 which was declared as Iraq's victory over IS and widely seen as an end to the war, and declared as such by Iraq's Prime Minister Haidar al-Abadi, multiple incidents of violence have occurred being carried out by the conflicting sides, in spite of Iraq's declaration of victory over IS the group is widely seen as far from gone and continues to retain a presence throughout Iraq, and still capable of carrying out attacks and skirmishes with pro-government forces. IS has been waging a guerrilla war with a strong presence in the governorates of Kirkuk, Diyala, Saladin, and Sulaymaniyah, with local forces largely ill-equipped and inexperienced, IS has also taken advantage of the areas' rough terrain to carry out operations. IS has also made a notable presence in the cities of Kirkuk, Hawija and Tuz Khurmato and has carried out attacks at night in rural areas.
IS fighters also reportedly move through villages during the day without interference from security forces, and locals have been asked by IS to give fighters food and give information on the whereabouts of Iraqi personnel, locals have also stated that IS fighters will frequently enter into Mosques and ask for Zakat to fund the insurgency. Among IS's operations include assassinations, kidnappings, raids and ambushes.
As of 2021, U.S. officials warned that IS "remains capable of waging a prolonged insurgency” but also described IS in Iraq as "diminished”. Iraqi intelligence estimated that IS has 2,000–3,000 fighters in Iraq.
Following IS's defeat in December 2017, they have been greatly weakened and violence in Iraq has been sharply reduced. 23 civilians lost their lives from violence-related incidents during November 2021, the lowest figure in 18 years.


== Timeline ==


=== 2018 ===

In 2018, 3,643 IS militants, 937 Iraqi security forces, 11 American service members, 1 British service member were killed. The death toll in this year was noted to be the lowest since 2003, when the United States invaded the country.
Notable events this year include:

2018 Baghdad bombings: On 15 January 2018, two suicide bombings took place at al-Tayaran Square of Baghdad, killing 36 people and injuring more than 105 others.
2018 Asdira funeral bombing: On 12 April 2018, a bombing killed 25 people and wounded 18 others. The attack took place at a funeral for Iraqi fighters who had been killed by IS.


=== 2019 ===

In 2019, 1,129 IS militants and 387 Iraqi security forces`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Islamic State insurgency in Iraq (2017–present)

*Part of the Iraqi conflict* conflict.`
    ),
  }),
};
const catatumbo_campaign_tool = {
  name: "catatumbo_campaign",
  description: `Conflict name: Catatumbo campaign

*Part of the Colombian conflict*
Start date: 2018
End date (if applicable): Ongoing

Description: Page: Catatumbo campaign
Summary: The Catatumbo campaign has been an ongoing period of strategic violence between militia faction groups in the Catatumbo region of Colombia and Venezuela since January 2018. It is an extension of the War on drugs and developed after the Colombian peace process of 2016. The existence of the war was officially announced in August 2019 after a Human Rights Watch (HRW) investigation. Colombian media reports that the war has directly affected an estimated 145,000 people, with the HRW estimating this at 300,000.


== Development ==


=== Beginnings ===

In November 2016, the Colombian government signed a peace treaty with the FARC militia. FARC had been engaging in violence across Colombia, and were absorbed into the government. However, the government still maintains a small presence, and without the organized crime control of the FARC, the Catatumbo region was left in a power vacuum. Seeking to gain control of the region's fruitful drug trade, several different guerilla groups arose or reorganized. Key reasons for groups to focus on controlling the area include the unrestricted access to Venezuela, through which drugs can be trafficked, and the vast coca plant fields for drug production. It is also suggested that Catatumbo is one of few regions where there may be army officers who are willing to covertly work with drug traffickers after the peace process.
The Human Rights Watch describes the War as starting proper in "early 2018", including early alerts by the Colombian Ombudsman in January 2018. Insight Crime places the start of the war as 14 March 2018, but says by this point it "had already been brewing for months without authorities intervening to put a stop to it".


=== Progression to war ===
The main groups vying for control over Catatumbo are the Popular Liberation Army (EPL) and the National Liberation Army (ELN). The EPL had existed quietly in Catatumbo for a long time before the ELN made moves to expand into the region. After the power vacuum, both groups began to assert power over civilians in the region. This caused conflicts, as each group wanted complete control; they developed ways to diminish the influence of the other, including battles. They also used propaganda tactics: one event that "intensified" the discord in January 2018 was a press release from EPL criticizing ELN for guerilla actions towards indigenous people of Venezuela.
A ceasefire had been declared in October 2017 to allow peaceful discussion for three months, but no progress was made, and in early 2018, the ELN and EPL declared "war to the death". This attracted other armed groups, who would lend their support to one side or the other. Separately, the Frente 33 faction of FARC gained its own momentum in the region and became a party to the conflict when trying to exert power. A massive influx of Venezuelan migrants in the later stages of the crisis, many willing to work for armed militia to survive, added manpower to the developing conflicts, and as they are particularly vulnerable, it drove up human rights abuses, too.
In an effort to control human rights abuses, the military were deployed to the area, with over 5,600 personnel assigned to the war by August 2019, as reported by Reuters. Local media suggests the number of soldiers is over 10,000.


== Groups and leaders ==
The three main militia groups involved in the conflict are the EPL, ELN, and a group composed of former FARC soldiers known as Frente 33. From 2019, the Colombian Army has been engaging the groups.

The two leaders of the EPL, who are also known as "Los Pelusos", were Mauricio Pácora (an alias), until he was killed in a military operation in August 2019 at the age of 46 or 47, and Reinaldo Peñaranda, also known as "Pepe" (b. 1978/1979). Insight Crime reported in 2018 that Pácora and Pepe were seen as rivals, having each been the disciple of different past EPL leaders. They had different strengths, Pácora as a military strategist and Pepe as a polit`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Catatumbo campaign

*Part of the Colombian conflict* conflict.`
    ),
  }),
};
const _2018_armenianazerbaijani_clashes_tool = {
  name: "_2018_armenianazerbaijani_clashes",
  description: `Conflict name: 2018 Armenian–Azerbaijani clashes

*Part of the Nagorno-Karabakh conflict*
Start date: 2018
End date (if applicable): 2018

Description: Page: 2018 Armenian–Azerbaijani clashes
Summary: The 2018 Armenian–Azerbaijani clashes began on 20 May 2018 between the Armenian Armed Forces and Azerbaijani Armed Forces. Azerbaijan stated to have taken several villages and strategic positions within the Nakhchivan Autonomous Republic. However, these areas had previously been part of a no man's land between the Azerbajiani and Armenian lines.
One soldier of the Azerbaijani Armed Forces, and one or two soldiers of the Armenian Armed Forces were reported KIA during the military operations.


== Background ==
Azerbaijan accused Armenian forces of seizing control of Gyunnut, which is located Sharur District of Nakhchivan Autonomous Republic, in 1992.
On 16 May 2018 Azerbaijani President Ilham Aliyev visited the Nakhchivan Autonomous Republic. He stated that Nakhchivan branch of the Azerbaijani Army possessed missiles which could easily reach Armenia's capital, Yerevan. Two days later, on 17 May Armenia's new Minister of Defence and Foreign Affairs visited the Armenian–Nakhchivan border to inspect military positions.


== Clashes ==
According to some Azerbaijani military bloggers and news sites, Azerbaijani positions in the Sharur District of Nakhchivan Autonomous Republic became exposed to artillery fire of the Armenian Armed Forces.
On the end of May, Nakhchivan Separate Combined-arms Army claimed to have control of Gyunnut, a village in Sharur District that has been completely destroyed by the Armenian forces in 1992, and two strategic positions, Khunutdagh and Aghbulag. Azerbaijani Armed Forces also claimed control of and took new positions on Kyzylkaya and Mehridagh strategic positions. They also claimed to have new positions in a previously unoccupied neutral zone in Nakhchivan near Armenian village of Areni in Vayots Dzor Province.


== Aftermath ==

Eurasianet reported that Azerbaijani claims of advancement had been highly exaggerated, and whatever territory Azerbaijan had claimed control over was never claimed by Armenia, adding that "while the details of the Azerbaijani advance remain unclear, the lofty rhetoric seems to be a significant exaggeration. Whatever new territory Azerbaijan controls militarily was never claimed by Armenia, and it's not clear if there was any fighting.".
The Armenian Ministry of Defense made a statement against Azerbaijani claims of territorial advances, claiming that a request by Azerbaijani citizens to visit the cemetery in the ruins of Gyunnut had been granted as a humanitarian gesture. Footage of Azerbaijani villagers being escorted to the cemetery was released to confirm this.
Armenia's Foreign Ministry condemned Azerbaijan's actions at the border as "unacceptable and irresponsible steps aimed at escalating the situation". They also said that "it is regrettable but at the same time very predictable practice of Azerbaijan to exploit any display of goodwill and humanistic approach [from] Armenia for its own propagandistic purposes". They also warned that "any provocative action on the Azerbaijani side will be immediately stopped and will trigger the adequate response from the Armenian side".
Azerbaijani military experts accused Armenia of planning an attack on Nakhchivan Autonomous Republic.
On 8 June 2018 Azerbaijani Government announced that they started to build a new road that would be 50 km long. They also started to rebuild the roads that were destroyed during the First Nagorno-Karabakh War. Azerbaijani Armed Forces have taken up new positions in strategic locations.
Arif Mamedov, a former Azerbaijani diplomat and EU Ambassador, criticized the coverage by the Azerbaijani press on a Facebook post: "Is there at least one reasonable person who believes in fairy tales that 11 thousand hectares of land could be liberated in Nakhichevan without a fight? Do they understand what 11 thousand hectares means, or is everything so tragic even with their math? Once Armenians occupied only the Kyark enclave in that territory, formerly inhabited by Az`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2018 Armenian–Azerbaijani clashes

*Part of the Nagorno-Karabakh conflict* conflict.`
    ),
  }),
};
const november_2018_gazaisrael_clashes_tool = {
  name: "november_2018_gazaisrael_clashes",
  description: `Conflict name: November 2018 Gaza–Israel clashes

*Part of the Gaza-Israel conflict*
Start date: 2018
End date (if applicable): 2018

Description: Page: November 2018 Gaza–Israel clashes
Summary: Gaza-Israel clashes began on 11 November 2018, when a botched Israeli covert operation carried out in the Khan Yunis area of the southern Gaza Strip killed seven Palestinian militants and one Israeli soldier. Exchanges of fire lasted for two more days, until a cease fire was achieved with Egyptian mediation. Some minor incidents and protests followed some two weeks after the cease fire, with decreasing intensity.


== The operation ==
According to Hamas armed wing the al-Qassam Brigades, witness reports, recordings of radio chatter obtained by Israeli news program Hadashot corroborating the story, and the IDFs own report the operation proceeded as follows:


=== Intrusion into Gaza ===
On 11 November, Israeli special forces entered Gaza in a blue Volkswagen van through one of the official border crossings, either through Israel's Erez Crossing or Egypt's Rafah Crossing, and the group provided identity documents. Following the crossing, the group passed through two checkpoints; one controlled by the Palestinian Authority and one controlled by Hamas using forged IDs with the names of well-known local Palestinian families. The group were dressed in traditional Palestinian Muslim attire and two of them disguised as women.


=== Spotting by Nour Baraka and questioning ===
A local Hamas commander named Nour Baraka spotted the van outside his window in Khan Yunis three kilometers into Gazan territory. The van was then stopped at a Hamas checkpoint for questioning. The Israelis claimed that they were NGO workers, part of a medical team ferrying patients in the area and that they had a wheelchair in the back of the van. According to the sources, the questioning lasted for 40 to 45 minutes.
Several things didn't seem right to the Palestinians. The accents of the Israelis didn't match the location their identity cards stated that they were from. A woman sat between two men even though their IDs said they were members of different families, something that was frowned upon under local customs. Furthermore, the Israelis told Hamas that they were going to visit a woman who does not live in the area.
Senior commanders were summed to the scene and they decided to bring the Israelis into custody for further questioning. At this point, the operative identified as "Lt. Col. A" opened fire. He shot and killed Baraka and his deputy, Mohammad Majed Al-Qara, with his silenced gun. Here the sources diverge. IDF sources claim that stray bullets from Lt. Col. A's gun hit and killed his colleague Lt. Col. Mahmoud Kheireddine, in Israeli media identified as "Lt. Col. M", and wounded another Israeli surrounded by Hamas members. Hamas sources claim that Kheireddine was shot in the head by one of their fighters. The van proceeded to speed away.


=== Hamas takes up the chase ===
One Hamas vehicle took up the chase while other units scrambled to set up a roadblock. At that point, the Palestinians believed that they were dealing with a criminal gang or a rival faction. The van opened fire and sped through the roadblock.
During the pursuit, Israeli tanks and aircraft opened fire in the area to provide cover for the van's escape. Some time later the operatives stepped out of the van and faced their pursuers in a gunfight killing them all. They pulled their dead comrade's body out of the car and continued the flight on foot towards an olive grove where a Sikorsky CH-53 helicopter from the Israeli Air Force's elite Unit 669 was waiting. After extracting the soldiers, the van was struck by dozens of Israeli rockets and completely destroyed.
According to the IDFs report, the evacuation from the time Lt. Col. A killed Baraka to the helicopter landing in Israel took 20 minutes.


=== Immediate aftermath ===
Gazan Health Ministry identified the killed as the aforementioned Nour Baraka, Omar Jani Abu Hatar, Mohammad Majed Al-Qara, Ala Adin Koidar, Mustafa Hassan Abu Odeh, Mahmoud Atallah Masabach and Ala Fasifis. The firs`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the November 2018 Gaza–Israel clashes

*Part of the Gaza-Israel conflict* conflict.`
    ),
  }),
};
const _2019_indiapakistan_border_skirmishes_tool = {
  name: "_2019_indiapakistan_border_skirmishes",
  description: `Conflict name: 2019 India–Pakistan border skirmishes

*Part of the Indo−Pakistani conflicts and the Kashmir conflict*
Start date: 2019
End date (if applicable): 2019

Description: Page: 2019 India–Pakistan border skirmishes
Summary: The 2019 India–Pakistan border skirmishes were a series of armed clashes consisting of cross-border airstrikes and exchanges of gunfire between India and Pakistan across the de facto border in the disputed Kashmir region, which is subject to extensive territorial claims by both countries.
The heightened tensions stemmed from the 14 February 2019 Pulwama attack in Jammu and Kashmir, which killed 40 Indian Central Reserve Police Force personnel. Responsibility for the attack was claimed by a Pakistan-based militant group, Jaish-e-Mohammed. India blamed Pakistan for the attack and promised a robust response, while the latter condemned the attack and denied having any connection to it.
Twelve days later, in the early morning of 26 February 2019, India carried out a cross-border airstrike near Balakot, Khyber Pakhtunkhwa, Pakistan.
Pakistan's military, the first to announce the airstrike that same morning, claimed that Indian warplanes had crossed the international border and dropped their payload in an uninhabited wooded hilltop area near Balakot in Khyber Pakhtunkhwa. India, confirming the airstrike later that day, characterized it to be a preemptive strike directed against a terrorist training camp, and claimed that it had caused the deaths of a "large number" of terrorists.
The second airstrike, a retaliatory one by Pakistan, was conducted in the daytime on 27 February, inside Indian-administered Kashmir. A dogfight between Indian and Pakistani fighter jets during this airstrike resulted in the downing of an Indian MiG-21 Bison by the Pakistan Air Force, following which its pilot, Wing Commander Abhinandan Varthaman, was taken prisoner by the Pakistani military before being returned to India on 1 March.
On the same hours of PAF retaliatory strikes on 27 February 2019, an Indian Mi-17 helicopter was brought down by friendly fire in which all IAF airmen on board were killed, including Squadron Leaders Siddharth Vashisht and Ninad Mandavgan. IAF Chief RKS Bahaduria acknowledged IAF's failure only a year latter on 4 October 2019, terming friendly fire as "a big mistake". Resultantly Group Captain Suman Roy Choudhry Chief Operations Officers (COO) of Srinagar Air Force Station was dismissed from his service in 2023.
Aftermath analysis of open-source satellite imagery by the American Atlantic Council's Digital Forensics Laboratory, San Francisco-based Planet Labs, European Space Imaging and the Australian Strategic Policy Institute concluded that India did not hit any targets of significance on the Jaba hilltop site near Balakot in Pakistan.
On 10 April 2019, one and a half months later, a group of international journalists, who were taken to the Jaba hilltop in a tightly controlled trip arranged by the Pakistani government, although unable to make a knowledgeable evaluation, found the largest building there to show no evidence of damage or recent rebuilding efforts.
The US count of PAF's F-16 fleet confirmed PAF lost no aircraft during its dogfight with IAF. The claim of IAF of shooting down a F-16 was also rejected by various international observers.


== Background ==

India and Pakistan have long been at odds with each other, having engaged in several wars, conflicts, and military standoffs. The roots of the continued tension are complex, but have centred mainly around the erstwhile princely state of Jammu and Kashmir. After the 1947 Partition of India, the newly formed independent states of Pakistan and India squabbled over it, which led to the Indo-Pakistani War of 1947–1948 and a subsequent sharing of the state. The settlement was non-agreeable to both the parties and since then, this had become an ongoing intractable issue leading to a war in 1965. The nations also partook in another war in 1971 which led to the formation of Bangladesh. Both countries developed nuclear weapons in the 1990s and this had a sobering effect on the next major conflict – the 1999 Kargil War.
As o`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2019 India–Pakistan border skirmishes

*Part of the Indo−Pakistani conflicts and the Kashmir conflict* conflict.`
    ),
  }),
};
const may_2019_gazaisrael_clashes_tool = {
  name: "may_2019_gazaisrael_clashes",
  description: `Conflict name: May 2019 Gaza–Israel clashes

*Part of the Gaza–Israel conflict*
Start date: 2019
End date (if applicable): 2019

Description: Page: May 2019 Gaza–Israel clashes
Summary: A Gaza–Israel conflict escalation began on 3 May 2019 after two Israeli soldiers were injured by sniper fire from the Gaza Strip during the weekly protests at the Gaza–Israel border. In response, the Israeli Air Force carried out an airstrike, killing two Palestinians. Following this, hundreds of rockets were launched from Gaza at Israel, while the Israeli Air Force struck numerous targets within the Gaza Strip. In addition, Israel increased its troop presence near the Israel–Gaza barrier.
A ceasefire facilitated by Egyptian mediators went into effect on 6 May.


== Exchanges of fire ==


=== Friday, 3 May ===
On 3 May, during the weekly protests at the Gaza–Israel border, two Israeli soldiers were injured in an attack by a Gazan sniper who, according to Israel Defense Forces (IDF), was connected to Palestinian Islamic Jihad (PIJ). In response, the Israel Air Force targeted a nearby Hamas post with an airstrike, killing two people and injuring two others. The men killed were identified as Abdullah Ibrahim Mahmoud Abu Salouh, 33 and Alaa Ali Hasan al-Boubli, 29. Hamas pledged to respond to the "Israeli aggression". In addition, two other Palestinians were killed and 60 wounded, 36 of them by Israeli gunfire.


=== Saturday, 4 May ===
According to IDF, more than 250 rockets were launched from Gaza into Israel, causing serious injury to at least one person.
The Israeli Air Force and IDF struck more than 120 sites in the Gaza Strip. According to the Health Ministry of the Gaza Strip, these airstrikes killed four people – two men, and a woman with a toddler. According to Palestinian officials, the woman and toddler who died were identified as Falestine Abu Arar, 37, and her niece Siba Abu Arar, 14-months old. Thirteen other Palestinians were reportedly injured during the day. The IDF denied responsibility, stating that the woman and toddler were killed by Palestinian rocket fire. Al-Risala News run by Hamas also denied the claims against the IDF, saying that the PIJ was responsible for the deaths.


=== Sunday, 5 May ===
At least 200 more projectiles were launched from Gaza towards Israel, killing four people and injuring several others. An Israeli man was killed when a rocket struck in front of his home. The man was identified as Moshe Agadi, a 58-year-old father of four. A rocket fired overnight damaged an empty kindergarten in Sderot, after landing in its yard and exploding. Later that day, a rocket directly struck a factory in the city of Ashkelon, leaving a man dead and two others injured. A Kornet anti-tank missile hit a private van in the kibbutz community of Yad Mordechai, killing the Israeli driver. Three people were injured in the Eshkol Regional Council – two lightly when a mortar shell landed in a yard, and a Thai worker was moderately wounded by a rocket that exploded in a field where he was working. A 35-year-old man was killed by shrapnel from a rocket that hit his Ashdod home later that day.
In response, the IDF struck over 210 sites in the Gaza Strip during the day. A Hamas commander was killed by an airstrike during the day while travelling in a car down a street, marking the first targeted killing carried out by Israel in several years. The man was identified as Hamed Ahmed Abed Khudri, and was accused of transferring funds from Iran to Gaza. Palestinian factions threatened to use long-range rockets to attack Israel if the "aggression" continues. During the day, Israel deployed the 7th Armored Brigade and the Golani Brigade to the Gaza–Israel border. Later that day, an Israeli airstrike killed 3 people in the northern Gaza town of Beit Lahiya, including a pregnant woman, according to the Health Ministry of the Gaza Strip. The woman was identified as 33-year old Amani al-Madhoun.


=== Monday, 6 May ===
In the early morning of 6 May, a ceasefire agreement mediated by Egypt in its capital city Cairo was reached, taking effect at 4:30 A.M (1:30 UTC). At 7:00 A.M., Israel a`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the May 2019 Gaza–Israel clashes

*Part of the Gaza–Israel conflict* conflict.`
    ),
  }),
};
const benishangulgumuz_conflict_tool = {
  name: "benishangulgumuz_conflict",
  description: `Conflict name: Benishangul-Gumuz conflict

*Part of the Ethiopian civil conflict (2018–present)*
Start date: 2019
End date (if applicable): 2022

Description: Page: Benishangul-Gumuz conflict
Summary: The Benishangul-Gumuz conflict was an armed conflict mostly in the Metekel Zone of the Benishangul-Gumuz Region in Ethiopia that started in 2019, until peace agreement signed between the rebel groups and the government of Ethiopia in October 2022.


== Background ==


=== Ethnic tensions ===
Benishangul-Gumuz is home to several different ethnicities including the Gumuz, Berta, Shinasha, Mao, Komo and Fadashi. The Gumuz have had tensions with agricultural Amhara, Oromos, Tigrayans and Agaw migrants, who in Metekel Zone constitute minority ethnic groups. Large scale land acquisitions by both local and foreign investors have pushed the Gumuz off the land. The Benishangul-Gumuz constitution was revised in 2002 to designate the Gumuz, Shinasha, Berta, Komo, and Mao as “owners” and disenfranchised all other ethnic groups as residents, but not citizens, limiting their prospects in economic participation and political representation. Gumuz are alleged to have formed militias such as Buadin and the Gumuz Liberation Front that have staged attacks against those seen as "settlers". Local officials admitted and then apologized for orchestrating ethnic killings as a way to push back against the ruling Prosperity Party which was alleged to be planning to eliminate self rule for the country's ethnic groups. Some Amhara groups calling for Metekel to be incorporated into Amhara. The Chairman of an Amhara group called Fano, Solomon Atanaw, said in March 2020 that Fano would not disarm without Metekel zone being part of Amhara Region. At a public meeting with prime minister Abiy Ahmed on 22 December, Zebid Budna of Kamashi Zone attributed the violence to the Oromo Liberation Army.
Around this time, the federal government was waging a war with the Tigray People's Liberation Front (TPLF) and has often blamed the TPLF for problems around the country. Ashadli Hussein, president of the Benishangul-Gumuz Region, blamed the (TPLF) as holding the main responsibility and stated that there were many groups associated with political parties encouraging the armed conflict. He blamed the TPLF as holding the main responsibility.


=== Regional tension ===
Benishangul-Gumuz is also home to the Grand Ethiopian Renaissance Dam (GERD), which has caused tensions with neighboring Sudan and Egypt because of the dam's effect on the Nile river downstream. Sudan recently laid claim to Guba district in the Metekel zone closest to Sudan where the GERD lies, citing the belief that Guba was gifted to Emperor Menelik II by Khalifa Abdullahi. The government has blamed Egypt of assisting the Gumuz militia. The federal Ethiopian government, run by Prosperity Party (PP), attributed major responsibility for massacres to the TPLF and to the Egyptian government in relation to the GERD, with Towabeb Mehret of the PP stating, "The groups who are benefiting from this [violence] are terrorists getting orders from the TPLF". Assosa University researcher Tsegaye Berhanu criticised this point of view, stating that the government "should not externalise problems and point fingers at political opposition parties. It should try to understand the real causes [of the violence] and address [them]."


== Course of the conflict ==


=== 2019 ===


==== June ====
The Amhara Region coup d'état attempt took place on 22 June 2019. Early on the morning of 23 June, armed men suspected to be supportive of the leader of the attempted coup killed 37 people and wounded 18 in the Metekel Zone.


=== 2020 ===


==== September ====
Weeks of attacks on civilians took place in Metekel Zone in early September, especially in Bulan. Online social media estimated 150 deaths, which Atinkut Shitu, administrator of Metekel Zone, disputed. According to social media as summarised by Addis Standard, the targets were ethnic Amharans. Officials stated that the attacks had no ethnic motivations.


==== October ====
12–40 people were killed over a personal dispute over a stolen firea`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Benishangul-Gumuz conflict

*Part of the Ethiopian civil conflict (2018–present)* conflict.`
    ),
  }),
};
const _20202021_chinaindia_skirmishes_tool = {
  name: "_20202021_chinaindia_skirmishes",
  description: `Conflict name: 2020–2021 China–India skirmishes
Start date: 2020
End date (if applicable): 2021

Description: Page: 2020–2021 China–India skirmishes
Summary: Beginning on 5 May 2020, Chinese and Indian troops engaged in aggressive melee, face-offs, and skirmishes at locations along the Sino-Indian border, including near the disputed Pangong Lake in Ladakh and the Tibet Autonomous Region, and near the border between Sikkim and the Tibet Autonomous Region. Additional clashes also took place at locations in eastern Ladakh along the Line of Actual Control (LAC).
In late May, Chinese forces objected to Indian road construction in the Galwan river valley. According to Indian sources, melee fighting on 15–16 June 2020 resulted in the deaths of Chinese and Indian soldiers. Media reports stated that soldiers were taken captive on both sides and released in the coming few days while official sources on both sides went on to deny this. On 7 September, for the first time in 45 years, shots were fired along the LAC, with both sides blaming each other for the firing. Indian media also reported that Indian troops fired warning shots at the PLA on 30 August.
Partial disengagement from Galwan, Hot Springs, and Gogra occurred in June–July 2020 while complete disengagement from Pangong Lake north and south bank took place in February 2021. Following disengagement at Gogra in August 2021, Indian analysts pointed out that the LAC has shifted westwards at patrol point 17A (PP 17A).
Amid the standoff, India reinforced the region with approximately 12,000 additional workers, who would assist India's Border Roads Organisation in completing the development of Indian infrastructure along the Sino-Indian border. Experts have postulated that the standoffs are Chinese pre-emptive measures in responding to the Darbuk–Shyok–DBO Road infrastructure project in Ladakh. China has also extensively developed its infrastructure in these disputed border regions and is continuing to do so. The revocation of the special status of Jammu and Kashmir, in August 2019, by the Indian government has also troubled China. However, India and China have both maintained that there are enough bilateral mechanisms to resolve the situation. This includes multiple rounds of colonel, brigadier, and major general rank dialogue, special representatives' meetings, meetings of the 'Working Mechanism for Consultation and Coordination on China-India Border Affairs' (WMCC), and meetings and communication between their respective foreign and defense ministers. On 12 January 2022, the 14th corps-commander-level meeting at Chushul-Moldo Border Personnel Meeting (BPM) point took place.
Following the Galwan Valley skirmish on 15 June, some Indian campaigns about boycotting Chinese products were started. Action on the economic front included cancellation and additional scrutiny of certain contracts with Chinese firms, and calls were also made to stop the entry of Chinese companies into strategic markets in India. By November 2020, the Indian government had banned over 200 Chinese apps, including apps owned by Alibaba, Tencent, Baidu, Sina, and Bytedance.


== Background ==

The border between China and India is disputed at multiple locations. There is "no publicly available map depicting the Indian version of the LAC," and the Survey of India maps are the only evidence of the official border for India. The Chinese version of the LAC mostly consists of claims in the Ladakh region, but China also claims Arunachal Pradesh in northeast India.
China and India previously fought over the border in 1962 and 1967 with China gaining victory in the former and India gaining victory in the latter.
Since the 1980s, there have been over 50 rounds of talks between the two countries related to these border issues. Only 1 to 2 percent of border incidents between 2010 and 2014 had received any form of media coverage. In 2019, India reported over 660 LAC violations and 108 aerial violations by the People's Liberation Army which were significantly higher than the number of incidents in 2018. Despite the disputes, skirmishes, `,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2020–2021 China–India skirmishes conflict.`
      ),
  }),
};
const western_togoland_rebellion_tool = {
  name: "western_togoland_rebellion",
  description: `Conflict name: Western Togoland Rebellion
Start date: 2020
End date (if applicable): Ongoing

Description: Page: Western Togoland Rebellion
Summary: The Western Togoland Rebellion is an ongoing separatist revolt led by the Ewe nationalist organization Western Togoland Restoration Front (WTRF) against the government of Ghana. The group seeks the independence of former British Togoland. 
The Ewe make up most of the support for the independence movement and mainly inhabit the southern part of Western Togoland, especially around the cities of Ho, Kpandu, and Hohoe. Consequently, in the centre and northern areas of Western Togoland, where there is less of a presence of Ewes, support for independence is much more limited.
The independence movement can be traced back to the colonial era, with Ewe-dominated organizations such as the Togoland Congress campaigning for the unification of the Ewe people in British Togoland and French Togoland. More recently, groups such as the Homeland Study Group Foundation, a member of Unrepresented Nations and Peoples Organization, have advocated for Western Togoland independence. The WTRF is the first of these organizations to revolt against the Ghanaian government.


== Background ==


=== Pre-Integration with Ghana ===
During World War I, the Allies conquered German Schutzgebiet Togoland and divided the country into British Togoland (Western Togoland) and French Togoland (Eastern Togoland). The British Togoland territory had been a League of Nations mandate, then a United Nations Trust Territory under British control.
In 1954, the British government informed the UN that it would be unable to administer the Trust Territory after 1957. In response, in December 1955, the UN General Assembly passed a resolution advising the British government to hold a plebiscite on the future of British Togoland.

On 9 May 1956, this plebiscite was held under UN supervision and gave two alternatives to the people: union with soon-to-be Ghana or continuation as a Trust Territory until neighbouring French Togoland had decided upon its future. A third option, independence, was not listed. The Ewe-based Togoland Congress campaigned against integration with Ghana and preferred amalgamation with French Togoland, with the aim of forming a single, Ewe-majority country. The eventual result was reported to be 58% in favour of integration, although in the southern part of the territory, where the Togoland Congress had campaigned vigorously, 55% of voters had voted for separation from Gold Coast and continued UN Trusteeship.
Despite concerns over the lawfulness of the referendum and questions about Britain's concerns for the peoples of southern Western Togoland and their will for independence, unification with Ghana as an administrative region became a reality and in 1956 British Togoland was incorporated into Ghana.


=== Post-Integration with Ghana ===
There have been several independence organisations in Western Togoland since the plebiscite including the Togoland Congress and National Liberation Movement of Western Togoland (also known as Tolimo), the latter of the two was declared illegal in the 1970s.
In 1973, 120 Chiefs of the Volta Regional House of Chiefs who demonstrated their opposition to the extension of the Eastern Region of Ghana into the Volta Region faced a violent crackdown by the military forces.
In 2017, 7 members of the Homeland Study Group Foundation HSGF were arrested for wearing T-shirts with the inscription "9 May 2017 is OUR DAY Western Togoland", referring to the date when the organisation attempted to declare independence.
On 5 May 2019, 9 leaders of the HSGF who were calling for the independence of parts of Volta Region were picked up for planning to declare parts of the Volta Region an independent state.
On 8 May 2019, The Volta Regional Police Command in collaboration with the 66 Artillery Regiment arrested an additional 81 members of the HSGF for their involvement in planning a protest against the arrest of their leaders. 54 of the suspects were arrested aboard a bus whilst entering Ho from Aflao directi`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Western Togoland Rebellion conflict.`
      ),
  }),
};
const second_nagornokarabakh_war_tool = {
  name: "second_nagornokarabakh_war",
  description: `Conflict name: Second Nagorno-Karabakh War

*Part of the Nagorno-Karabakh conflict*
Start date: 2020
End date (if applicable): 2020

Description: Page: Second Nagorno-Karabakh War
Summary: The Second Nagorno-Karabakh War was an armed conflict in 2020 that took place in the disputed region of Nagorno-Karabakh and the surrounding occupied territories. It was a major escalation of an unresolved conflict over the region, involving Azerbaijan, Armenia and the self-declared Armenian breakaway state of Artsakh. The war lasted for 44 days and resulted in Azerbaijani victory, with the defeat igniting anti-government protests in Armenia. Post-war skirmishes continued in the region, including substantial clashes in 2022.
Fighting began on the morning of 27 September, with an Azerbaijani offensive along the line of contact established in the aftermath of the First Nagorno-Karabakh War (1988–1994). Clashes were particularly intense in the less mountainous districts of southern Nagorno-Karabakh. Turkey provided military support to Azerbaijan.
The war was marked by the deployment of drones, sensors, long-range heavy artillery and missile strikes, as well as by state propaganda and the use of official social media accounts in online information warfare. In particular, Azerbaijan's widespread use of drones was seen as crucial in determining the conflict's outcome. Numerous countries and the United Nations strongly condemned the fighting and called on both sides to de-escalate tensions and resume meaningful negotiations. Three ceasefires brokered by Russia, France, and the United States failed to stop the conflict.
Following the capture of Shusha, the second-largest city in Nagorno-Karabakh, a ceasefire agreement was signed, ending all hostilities in the area from 10 November 2020. The agreement resulted in a major shift regarding the control of the territories in Nagorno-Karabakh and the areas surrounding it. Approximately 2,000 Russian soldiers were deployed as peacekeeping forces along the Lachin corridor connecting Armenia and Nagorno-Karabakh, with a mandate of at least five years. Following the end of the war, an unconfirmed number of Armenian prisoners of war were held captive in Azerbaijan, with reports of mistreatment and charges filed against them, leading to a case at the International Court of Justice.


== Naming ==
The war has been referred to as the "Second Nagorno-Karabakh War", and has also been called the "44-Day War" in both Armenia and Azerbaijan.
In Armenia and Artsakh, it has been called the "Second Artsakh War" (Armenian: Արցախյան երկրորդ պատերազմ, romanized: Arts'akhyan yerkrord paterazm), "Patriotic War" and the "Fight for Survival" (Armenian: Գոյամարտ, romanized: Goyamart).
In Azerbaijan, it has been called the "Second Karabakh War" (Azerbaijani: İkinci Qarabağ müharibəsi) and "Patriotic War". The Azerbaijani government referred to it as an "operation for peace enforcement" and "counter-offensive operation". It later announced it had initiated military operations under the code-name "Operation Iron Fist" (Azerbaijani: Dəmir Yumruq əməliyyatı).


== Background ==

The territorial ownership of Nagorno-Karabakh is fiercely contested between Armenians and Azerbaijanis. The current conflict has its roots in events following World War I and today the region is de jure part of Azerbaijan, although large parts are de facto held by the internationally unrecognised Republic of Artsakh, which is supported by Armenia.


=== Soviet era ===

During the Soviet era, the predominantly Armenian-populated region was governed as an autonomous oblast within the Azerbaijan SSR. As the Soviet Union began to disintegrate during the late 1980s the question of Nagorno-Karabakh's status re-emerged, and on 20 February 1988 the parliament of the Nagorno-Karabakh Autonomous Oblast passed a resolution requesting transfer of the oblast from the Azerbaijan SSR to the Armenian SSR. Azerbaijan rejected the request several times, and ethnic violence began shortly thereafter with a series of pogroms between 1988 and 1990 against Armenians in Sumgait, Ganja and Baku, and against Azerbaijanis in Guga`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Second Nagorno-Karabakh War

*Part of the Nagorno-Karabakh conflict* conflict.`
    ),
  }),
};
const afarsomali_clashes_tool = {
  name: "afarsomali_clashes",
  description: `Conflict name: Afar–Somali clashes

*Part of the Ethiopian civil conflict (2018–present)*
Start date: 2020
End date (if applicable): Ongoing

Description: Page: Afar–Somali clashes
Summary: The Afar–Somali clashes are territorial conflicts between the Afar and Somali Regions of Ethiopia. The current conflict which began in 2014, is centered around three special Kebeles inhabited by ethnic Somalis from the Issa Clan. These three special Kebeles include the Adaytu (Afar: Qadaytu, Somali: Cadayto) in Mille woreda, Undufo (Afar: Qundafaqo, Somali: Cundhufo) in Gewane woreda, and Gedamaytu (Afar: Gadamaytu, Somali: Garba-Ciise) in Amibara Woreda.   


== History ==
In 2014, the federal government, headed by the Ethiopian People’s Revolutionary Democratic Front (EPRDF), redrew the boundary between the two regions. As a result the Somali Region lost three villages to the Afar Region. Since then they have been trying to get the villages back under their control.
According to Crisis Group since the conflicts began between the groups dozens of lives have been claimed. In October 2020, 27 people were killed. On 2 April 2021, 100 cattle herders were reportedly shot dead.
On 24 July 2021, clashes erupted in the town of Garbaiisa. The clashes, killing 300, were followed by massive protests in the Somali region, with roadblocks put on the only road out of the settlement, and the partial destruction of the Ethio-Djibouti Railways, where 95% of Ethiopia's maritime trade goes through. The conflict spilled over to Djibouti itself, where Afars and Somalis clashed in the Balbala suburb of Djibouti city. As a result, on 1 August the American embassy in Djibouti issued a demonstration alert warning of riots in Djibouti city's Balbala and Arhiba areas.
On 15 May 2022, both regions agreed to withdraw their forces from the disputed territory and support the return of displaced people. However, conflict flared up again on 9 November the same year, where fighting between local militias killed at least 18 people and injured at least 28 others in Dheymeed woreda, Sitti Zone.
Somali Region protesters blocked the Ethio-Djibouti Railways on 27 March 2023, believing that the Ethiopian National Defense Force (ENDF) "was implicitly supporting" the Afar Region in the border dispute. Local officials eventually convinced the protesters to unblock the road, but alleged that shortly afterward, the ENDF "suddenly opened fire" and killed 3 of the protesters, while wounding another 6. Days later, on 30 March, there were reports that Afar and Somali militia groups clashed around areas surrounding the road.


== See also ==
Afar Region
Somali Region


== References ==`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Afar–Somali clashes

*Part of the Ethiopian civil conflict (2018–present)* conflict.`
    ),
  }),
};
const tigray_war_tool = {
  name: "tigray_war",
  description: `Conflict name: Tigray War

*Part of the Ethiopian civil conflict (2018–present)*
Start date: 2020
End date (if applicable): 2022

Description: Page: Tigray War
Summary: The Tigray War was an armed conflict that lasted from 3 November 2020 to 3 November 2022. It was a civil war that was primarily fought in the Tigray Region of Ethiopia between forces allied to the Ethiopian federal government and Eritrea on one side, and the Tigray People's Liberation Front (TPLF) on the other.
After years of increased tensions and hostilities between the TPLF and the governments of Ethiopia and Eritrea, fighting began when TPLF forces attacked the Northern Command headquarters of the Ethiopian National Defense Force (ENDF), alongside a number of other bases in Tigray. The ENDF counterattacked from the south – while Eritrean Defence Forces (EDF) began launching attacks from the north – which Prime Minister Abiy Ahmed described as a "law enforcement operation". Federal allied forces captured Mekelle, the capital of the Tigray Region, on 28 November, after which Abiy declared the operation "over." However, the TPLF stated soon afterwards that it would continue fighting until the "invaders" were out, and on 28 June 2021, the Tigray Defense Forces (TDF) retook Mekelle; by July the same year, they had also advanced into the Amhara and Afar regions. In early November 2021, the TDF, together with the Oromo Liberation Army (OLA), took control of several towns on the highway south from Tigray Region towards Addis Ababa, and the TPLF stated that it considered "marching on [the capital]." Together with seven smaller rebel groups, the TPLF and OLA declared a coalition aiming to "dismantle Abiy's government by force or by negotiations, and then form a transitional authority."
After a successful government counter-offensive in response, and then a series of negotiations with the TPLF, Ethiopia declared an indefinite humanitarian truce on 24 March 2022, in order to allow the delivery of humanitarian aid into Tigray. However, fighting dramatically re-escalated in late August 2022, after peace talks broke down. Rapid mobilization of troops soon followed, with Ethiopia, Eritrea and Tigray reportedly organizing hundreds of thousands of troops against each other by October the same year. After a number of peace and mediation proposals in the intervening years, Ethiopia and the Tigrayan rebel forces agreed to a cessation of hostilities on 2 November, which went into effect the day after; Eritrea was not a party to the agreement, however, and they largely continued to occupy parts of Tigray as of 2023.
All sides, particularly the ENDF, EDF, Amhara forces and TDF, committed war crimes during the conflict. Mass extrajudicial killings of civilians took place throughout, including in Axum, Bora, Chenna, Kobo, the Hitsats refugee camp, Humera, Mai Kadra, the Mahbere Dego, and Zalambessa. Between 162,000 and 600,000 people were killed, and war rape became a "daily" occurrence, with girls as young as 8 and women as old as 72 being raped, often in front of their families. A major humanitarian crisis developed as a result of the war, which led to a widespread famine. It also inflicted immense economic damage on the region, with the cost of rebuilding alone estimated to be roughly $20 billion.


== Background ==


=== Historical and political context ===

Following the end of the Ethiopian Civil War in 1991, Ethiopia became a dominant-party state under the rule of the Ethiopian People's Revolutionary Democratic Front (EPRDF), a coalition of four ethnically based parties. The founding and most influential member was the Tigray People's Liberation Front (TPLF), led by Meles Zenawi, who was the prime minister of Ethiopia until his death in 2012. He was succeeded by Deputy Prime Minister Hailemariam Desalegn, the chairman of the Southern Ethiopian People's Democratic Movement (SEPDM), a coalition member. On 15 February 2018, Hailemariam announced his resignation as both prime minister and chairman of the EPRDF, owing to a growing discontent within the public, fueled by a reaction to 27 years of repressive governance.
On`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Tigray War

*Part of the Ethiopian civil conflict (2018–present)* conflict.`
    ),
  }),
};
const western_saharan_clashes_2020present_tool = {
  name: "western_saharan_clashes_2020present",
  description: `Conflict name: Western Saharan clashes (2020–present)

*Part of the Western Sahara conflict*
Start date: 2020
End date (if applicable): Ongoing

Description: Page: Western Saharan clashes (2020–present)
Summary: Clashes between military forces belonging to the Kingdom of Morocco and the self-proclaimed Sahrawi Arab Democratic Republic (SADR), represented at the United Nations by the Polisario Front, broke out in the disputed region of Western Sahara in November 2020. It was the latest escalation of an unresolved conflict over the region, which is largely occupied by Morocco, but 20–25% is administered by the SADR. The violence ended a ceasefire between the opposing sides that had held for 29 years in anticipation of a referendum of self-determination that would have settled the dispute. Despite the establishment of the United Nations Mission for the Referendum in Western Sahara in 1991, the referendum was never held.
Tensions between Morocco and the Polisario Front deepened in mid-October 2020 when Sahrawi peaceful protesters blocked a controversial road connecting Moroccan-occupied Western Sahara to sub-Saharan Africa. The protesters camped on the road near the small village of Guerguerat, where it passes through a 5-kilometre-wide buffer strip monitored by the UN. Despite the controversy, the route had grown in economic importance, such that the protest stranded about 200 Moroccan truck drivers on the Mauritanian side of the border. According to the MINURSO, both Morocco and Polisario deployed forces near the area in late October, with Mauritanian forces reinforcing their positions along its border with Western Sahara.
On 13 November, Morocco launched a military operation from the Berm into the demilitarized buffer strip of Western Sahara to clear the protesters near Guerguerat and restore the free movement of goods and people. The Polisario Front urged the United Nations to intervene, noting that the Moroccan military operation violated the ceasefire agreements of the 1990s, and furthermore accused the Moroccan security forces of shooting at unarmed civilians in the buffer strip. Morocco denied there had been any armed clashes between the sides and said the truce remained in place, while SADR authorities declared the ceasefire over. Clashes spread that same day along the Moroccan Berm, with Morocco claiming that it had repelled a Sahrawi incursion near Al Mahbes. The SADR declared war on Morocco the next day. Since the beginning of the conflict, both countries have begun mass mobilisation and the SADR Ministry of Defense claims to be carrying out daily bombardments on military objectives along the Moroccan Berm. It is the first major clash in the region since 1991.


== Background ==


=== Western Sahara War ===

The disputed region of Western Sahara is a sparsely-populated area mostly comprising desert territories, situated in the Maghreb region of Africa's northwest coast. The region was a Spanish colony until February 1976, when the Spanish government informed the United Nations that it withdrew from the territory. Since then, the region has been the subject of a long-running territorial dispute between Morocco, supported by a number of its prominent Arab allies, including Saudi Arabia and Jordan, and the Saharawi Republic (SADR), an African Union member state established by the Algerian-backed pro-independence Polisario Front, which is recognized by the United Nations as the legitimate representative of the indigenous Sahrawi people. Some commentators have connected Morocco's interests over the region with the idea of Greater Morocco, which encompasses Western Sahara and parts of both Mauritania, Mali, and Algeria, and according to the narrative, was divided up by the French and Spanish colonizers. Morocco, claiming Tindouf and Béchar provinces, invaded Algeria in 1963, resulting in the brief Sand War, which ended in a military stalemate.

While the Polisario Front had waged a low-intensity war of national liberation against Spanish colonial authorities since May 1973, the Western Sahara War began in October 1975, just weeks before the death of long-time Spanish dictator Fra`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Western Saharan clashes (2020–present)

*Part of the Western Sahara conflict* conflict.`
    ),
  }),
};
const _20202022_ethiopiansudanese_clashes_tool = {
  name: "_20202022_ethiopiansudanese_clashes",
  description: `Conflict name: 2020–2022 Ethiopian–Sudanese clashes
Start date: 2020
End date (if applicable): 2022

Description: Page: Al-Fashaga conflict
Summary: The Al-Fashaga conflict was a conflict between Sudan and Amhara militants from Ethiopia in the disputed border region of al-Fashaga (an area of Sudan east of the Atbarah River and south of the Tekezé River). Since 2008, Ethiopia has dropped all claims to the al-Fashaga as long as Sudan allowed Ethiopian farmers and militants to stay in the area undisturbed. With the outbreak of the Tigray War, Sudanese forces were able to move into the region due to an agreement with Ethiopia just three days before. When Amhara militants left to assist the federal government in the war, Sudanese forces started to drive out Ethiopian farmers, effectively breaking the 2008 compromise. Ethiopia has also accused Sudan of killing Amhara farmers. The Government of Sudan claims the involvement of ENDF and Eritrean troops in the border dispute while the Ethiopian government denies this and regards the conflict as skirmishes between Sudanese forces and ethnic militias from the Amhara region. External media coverage has tended to conflate the Amhara militias with federal soldiers from the Ethiopian National Defence Forces (ENDF). There is some evidence to suggest that the ENDF has been involved in the conflict, although the capacity in which they are doing so is unclear. It is likely that they have had a peripheral role in the actual fighting.
In 2007 Sudan and Ethiopia signed a treaty which will allow Ethiopian farmers to stay in Al-Fashaga and keep cultivate the land. After more than a decade which the treaty remain, in 2020 when the Tigray war broke, Sudan’s army took advantage of the fact that Amhara militiamen and Ethiopian military were deployed north as result, and broke the treaty by invading Al-Fashaga and expelling thousands of Amhara farmers from their home.


== Background ==
In 1902, British-ruled Sudan and the Ethiopian Empire signed a treaty to properly demarcate the border, but it failed, as some areas along the border were left unresolved. In both the 1902 and a later 1907 treaty, the international boundary runs to the east, which means the land of al-Fashaga is Sudanese but Ethiopians had already settled the area and had been cultivating there, along with paying taxes to the Ethiopian government.

After the Eritrean–Ethiopian War, Ethiopia and Sudan began long-dormant talks to settle the exact location of their 744 km-long (462 miles) border, with the most difficult area to agree on being the al-Fashaga region.
In 2008, they reached a compromise. Ethiopia agreed to the al-Fashaga region being a part of Sudan but Amhara farmers would still be allowed to continue living there undisturbed. Tigrayan farmers in the northern regions of al-Fashaga were also allowed to stay.
Once the Tigray People's Liberation Front (TPLF) was removed from power in 2018, Amhara Region-leaders, whose sub-national territory al-Fashaga is located in, condemned the deal as a secret bargain and said they were not properly consulted when the deal was made.


== Prelude ==
At the start of the Tigray War, the head of Sudan's ruling Sovereign Council, Lt. General Abdel Fattah, dispatched over 6,000 soldiers to the Ethiopian border as part of an agreement reached with Ethiopia on 1 November 2020 to prevent Tigrayan rebels from using Sudan as a supply route. With Sudanese troops finally being deployed to the border, the 2008 compromise was practically dissolved, and once Amhara militants were re-deployed to Tigray to help the federal government, Sudanese soldiers began removing potentially thousands of Amhara and Tigrayan farmers from the region. Complicating matters further was a rapid exodus of refugees fleeing to Sudan from the Tigray Region's Western Zone, many of them attempting to escape the wartime violence. The number of refugees increased from around 7,000 on 11 November to almost 44,000 by the end of the month.
Sudanese troops made rapid progress in consolidating their hold on the disputed territory. On 2 December, the Sudanes`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2020–2022 Ethiopian–Sudanese clashes conflict.`
      ),
  }),
};
const insurgency_in_southeastern_nigeria_tool = {
  name: "insurgency_in_southeastern_nigeria",
  description: `Conflict name: Insurgency in Southeastern Nigeria

*Part of the herder–farmer conflicts in Nigeria and the conflict in the 
Niger Delta*
Start date: 2021
End date (if applicable): Ongoing

Description: Page: Insurgency in Southeastern Nigeria
Summary: The insurgency in Southeastern Nigeria is a military conflict that broke out in the city of Orlu, Imo State, Nigeria on 16 January 2021, when the Nigerian Army moved to crush the paramilitary wing of the Indigenous People of Biafra (IPOB), the Eastern Security Network (ESN). The conflict escalated after the ESN managed to repulse the initial push by the Nigerian Army, but IPOB ended the initial crisis by unilaterally withdrawing the ESN from Orlu. After a few weeks of quiet, Nigeria launched a military offensive in the area to destroy the ESN. On 19 February 2021, IPOB declared that as of the day before, a state of war existed between Nigeria and Biafra. Three weeks later, another separatist group declared the formation of a Biafran interim government which was subsequently endorsed by IPOB. Since then, the Biafran separatists have begun to form alliances with other separatist groups in Nigeria and Cameroon. Despite these developments, the separatists claimed that their militant operations were mainly aimed at defending local communities from armed herders and bandits instead of fighting the Nigerian government. In late June, IPOB leader Nnamdi Kanu was arrested by Interpol and handed over to Nigerian authorities.


== Background ==

In 1967, separatists in Nigeria's southeast declared the formation of the independent state of Biafra. The subsequent Nigerian Civil War lasted two and a half years, led to over a million dead, and ended with the defeat of Biafra. Over the following decades, Nigeria continued to suffer from regional instability and revolts, but Biafra separatism was mostly dormant until the 2000s. Some Niger Delta communities such as the Ijaw people even integrated anti-Biafran sentiment into their own popular narratives, as they had mostly sided with the central government during the Nigerian Civil War.
From the 1990s, a growing number of people in southeastern Nigeria such as Igbo and Niger Delta natives felt marginalized by the Nigerian central government. This resulted in the violent conflict in the Niger Delta, and previously anti-Biafran communities such as Ijaw began to reevaluate their commitment to Nigeria. Coupled with disaffection among the youth due to high unemployment, this contributed to a resurgence of Biafran nationalism in the entire southeast. While most of the local political leadership distanced themselves from separatism, radical Biafran nationalists organized in the secessionist group IPOB. Other hardline Biafran groups included the Movement for the Actualization of the Sovereign State of Biafra (MASSOB), the Biafra Nations League (BNL; initially known as Biafra Nations Youth League / BNYL), and the Biafran National Guard (BNG). The latter already declared war on the Nigerian Army in 2017.
At the same time, Nigerians became disaffected as the central government failed to suppress the destructive Boko Haram insurgency as well as banditry in the north, while the Nigerian security forces faced accusations of corruption, ineffectiveness, and abuse. Journalists Cai Nebe and Muhammad Bello argued that "swathes of Nigeria remain near-ungovernable" as of Muhammadu Buhari's second presidency. Tensions in the southeast continued to rise after the local economy, heavily dependent on exporting oil, suffered under worldwide low oil prices. By 2020, IPOB had managed to rally substantial following to its cause, although polls showcased that Biafran separatism was not widely supported in the southeast. Non-IPOB groups also began to support separatism such as the Niger Delta People's Salvation Force led by "warlord" Asari-Dokubo. However, there were tensions within the Biafran separatist movement, with Kanu having been accused of intolerance toward non-Jews. The IPOB leader self-identifies as Jew and claims that Judaism is the Igbo's traditional religion.
In August 2020, Nigerian police forces went to an IPOB meeting in Enugu and executed 21 unarmed IPOB memb`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Insurgency in Southeastern Nigeria

*Part of the herder–farmer conflicts in Nigeria and the conflict in the 
Niger Delta* conflict.`
    ),
  }),
};
const _2021_kyrgyzstantajikistan_clashes_tool = {
  name: "_2021_kyrgyzstantajikistan_clashes",
  description: `Conflict name: 2021 Kyrgyzstan–Tajikistan clashes
Start date: 2021
End date (if applicable): 2021

Description: Page: 2021 Kyrgyzstan–Tajikistan clashes
Summary: A three-day border conflict between Kyrgyzstan and Tajikistan began on 28 April 2021. The clashes stemmed from a long-running dispute over a water supply facility near the village of Kök-Tash. Tajik media raised some concern over military drills in Batken prior to the conflict.


== Timeline ==


=== Pre-ceasefire ===


==== April ====

On 28 April, forces of Kyrgyzstan and Tajikistan on the Kyrgyzstan–Tajikistan border between Kök-Tash and Khojai A'lo, started the clashes, resulting in four deaths and dozens of injuries. The initial clashes were fought with fists and thrown stones, but quickly escalated to gunfire, with reports of heavy weaponry. The following day clashes resumed, with reported incidents in the Kyrgyz village of Kok-Terek and some other villages in the Batken and Leylek Districts, and with at least 41 people killed from both sides and roughly 10,000 people evacuated. The same day the foreign ministers of Kyrgyzstan and Tajikistan agreed to a ceasefire at the border. On 30 April, Tajikistan acknowledged the ceasefire in a statement published by its state information service. The ceasefire was broken twice by Tajiks during the conflict, however, including the night of 29 April.


==== May ====

On 1 May, the President of Kyrgyzstan Sadyr Japarov signed a decree that declares a two-day nationwide mourning, accusing Tajikistan of building-up troops and military equipment on the border. The Kyrgyz side also accused Tajik forces of opening fire on Kyrgyz vehicles in the area, while a Tajik spokesman speaking from Dushanbe said that the country was sticking to the ceasefire and pull-out of troops. Musurmanbek Tursumatov, representative of the regional administrator of the Batken Region, said that Tajik forces had blocked the Osh-Batken-Isfana road to Vorukh despite the ceasefire coming into effect. That same day both countries also agreed to a new ceasefire following minor new border clashes, which includes withdrawing troops from the border. Russian Foreign Minister Sergei Lavrov urged both countries to honor the new agreement.
On 2 May, around 33,388 civilians in Kyrgyzstan were evacuated from the Batken Region near the border. The Kyrgyz Ministry of the Interior and Tajikistan report that the situation at the border is stable and calm. Nonetheless, an unexploded air-to-land rocket was later discovered at a house near the border in Batken.
On 3 May, both countries completed the withdrawal of troops from the border. The President of Tajikistan Emomali Rahmon also ordered that all residential buildings destroyed in Chorku be restored. On 6 May, the Ministry of Emergency Situations reports that 136 houses and 84 facilities in the Batken region have been destroyed. On 10 May, citizens in the Batken region returned home for the first time since evacuating the region. On 18 May, officials in both countries announced that they had agreed to joint security controls along disputed border.


=== Post-ceasefire ===


==== July ====
On 9 July, despite the ceasefire, a clash between Tajik and Kyrgyz border guards killed one Kyrgyz serviceman. According to the Kyrgyz side, their patrol unit on horseback was fired upon by the Tajiks in Leylek.


== Casualties ==
During the four-day conflict, at least 55 people were confirmed killed: 36 died in Kyrgyzstan and 19 in Tajikistan. At least 163 people were wounded in Kyrgyzstan. More than 33,000 people had been evacuated from the area where fighting was taking place.
The Kyrgyz Ministry of Health and Social Development stated that overall both military and civilian were killed in the clashes. It also stated that most of the dead and wounded were civilians. Some of the civilian deaths occurred when Kyrgyz villagers fled their homes in panic under Tajik mortar fire. Among the killed were a sixth-grader girl and her mother, who, according to Kyrgyz reports, were shot. On 3 May, the death toll for Kyrgyzstan reached to 36 after a 4-year-ol`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2021 Kyrgyzstan–Tajikistan clashes conflict.`
      ),
  }),
};
const myanmar_civil_war_2021present_tool = {
  name: "myanmar_civil_war_2021present",
  description: `Conflict name: Myanmar civil war (2021–present)

*Part of the Internal conflict in Myanmar*
Start date: 2021
End date (if applicable): Ongoing

Description: Page: Myanmar civil war (2021–present)
Summary: The Myanmar Civil War, also known as the Burmese Civil War, Burmese Spring Revolution,  or People's Defensive War, is an ongoing civil war following Myanmar's long-running insurgencies, which escalated significantly in response to the 2021 military coup d'état and the subsequent violent crackdown on anti-coup protests. The exiled National Unity Government and major ethnic armed organisations repudiated the 2008 Constitution and called instead for a democratic federal state. Besides engaging this alliance, the ruling government of the State Administration Council, or SAC, also contends with other anti-SAC forces in areas under its control. Hannah Beech of The New York Times observed the insurgents are apportioned into hundreds of armed groups scattered across the country.
As of March 2023 the United Nations estimated that since the coup in February 2021, 17.6 million people in Myanmar required humanitarian assistance, while 1.6 million were internally displaced, and over 55,000 civilian buildings had been destroyed. the United Nations Office for the Coordination of Humanitarian Affairs (UNOCHA) said that over 40,000 people had fled into neighboring countries, such as Bangladesh, India and Thailand.
As of October 2023 Myanmar's military, the Tatmadaw, controlled under 40% of the country, although they maintained that they controlled around two-thirds of the country's 330 townships. 
 In the second half of 2023, Chinland Defense Forces in the state of Chin had captured a majority of the state, with a few holdouts in urban areas and along the India–Myanmar border remaining. In October 2023, the Tatmadaw began facing manpower issues, with desertions and low morale being extremely common. This coincided with a major offensive by the People's Defence Force and Three Brotherhood Alliance in the west of the country, which was successful in taking 80 bases, 220 SAC positions and several towns by 28 November 2023.
October and November 2023 saw a series of concurrent anti-SAC offensives, including Operation 1111 besieging the state capital of Loikaw and renewed conflict by anti-SAC forces in northern Rakhine and Chin states. In Operation 1027, anti-SAC forces seized Laukkai, the capital of Kokang Self-Administered Zone, in early January 2024. Operation 1027 continued past a ceasefire in northern Shan State with Mrauk U, among others, falling to the Arakan Army in February 2024. As of February 2024, thousands of the SAC's soldiers have surrendered without a fight, including six generals of the Tatmadaw. The SAC used terror tactics against the population, including burnings, beheadings, mutilations, war rape, torching villages, and a massive aerial bombing campaign that has displaced nearly 3 million people. The Myanmar Air Force has dropped more bombs per capita than have been dropped in the Russian invasion of Ukraine. A group of observers write that the SAC's forces remain "formidable and well-equipped", with "external allies and economic resources".
In late March 2024 anti-SAC forces in southeastern Myanmar captured Demoso and Papun,  bringing the number of district-level towns captured by anti-SAC forces up to eight. The ninth district-level town, Matupi, was captured by Chin resistance in mid June 2024. In late June 2024 the Three Brotherhood Alliance restarted Operation 1027 after claiming that Tatmadaw forces had broken the ceasefire, capturing the tenth district level town, Kyaukme, by the end of the month. On 17 July two more district level towns were captured by the Brotherhood Alliance, Thandwe and Mongmit, bringing the number up to twelve. On 3 August, the MNDAA as part of a wider effort from the Three Brotherhood Alliance and other resistance groups captured Lashio, the largest town in northern Shan State, as well as the headquarters of the SAC's Northeastern Command.


== Background ==


=== Internal conflict in Myanmar ===

Insurgencies have been ongoing in Myanmar since 1948 a`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Myanmar civil war (2021–present)

*Part of the Internal conflict in Myanmar* conflict.`
    ),
  }),
};
const _2021_israelpalestine_crisis_tool = {
  name: "_2021_israelpalestine_crisis",
  description: `Conflict name: 2021 Israel–Palestine crisis

*Part of the Israeli–Palestinian conflict*
Start date: 2021
End date (if applicable): 2021

Description: Page: 2021 Israel–Palestine crisis
Summary: The 2021 Gaza War, sometimes called the Unity Intifada, was a major outbreak of violence in the Israeli–Palestinian conflict that mainly commenced on 10 May 2021, and continued until a ceasefire came into effect on 21 May. It was marked by protests and police riot control, rocket attacks on Israel by Hamas and Palestinian Islamic Jihad (PIJ), and Israeli airstrikes in the Gaza Strip. The crisis was triggered on 6 May, when Palestinians in East Jerusalem began protesting over an anticipated decision of the Supreme Court of Israel on the eviction of six Palestinian families in the East Jerusalem neighborhood of Sheikh Jarrah. Under international law, the area, effectively annexed by Israel in 1980, is a part of the Israeli-occupied West Bank; On 7 May, according to Israel's Channel 12, Palestinians threw stones at Israeli police forces, who then stormed the Al-Aqsa Mosque compound using tear gas, rubber bullets, and stun grenades. The crisis prompted protests around the world as well as official reactions from world leaders.
The violence coincided with Qadr Night (8 May), observed by Muslims, and Jerusalem Day (9–10 May), an Israeli national holiday. The confrontations occurred ahead of a planned Jerusalem Day parade known as the Dance of Flags by far-right Jewish nationalists, which was later canceled. More than 600 people were injured, mostly Palestinians, drawing international condemnation. Israel's Supreme Court ruling on evictions from Sheikh Jarrah was then delayed for 30 days as Avichai Mandelblit, the erstwhile attorney general of Israel, sought to reduce tensions.
On the afternoon of 10 May, Hamas gave Israel an ultimatum to withdraw its security forces from both the Temple Mount complex and Sheikh Jarrah by 6 p.m. When the ultimatum expired without a response, both Hamas and PIJ launched rockets from the Gaza Strip into Israel; some of these rockets hit Israeli residences and a school. Israel then began a campaign of airstrikes against Gaza; by 16 May, some 950 targets had been attacked, demolishing completely or partially 18 buildings, including four high-rise towers, 40 schools and four hospitals, while also striking the al-Shati refugee camp. Additionally, at least 19 medical facilities were damaged or destroyed by the Israeli bombardment. By 17 May, the United Nations estimated that Israeli airstrikes had destroyed 94 buildings in Gaza, comprising 461 housing and commercial units, including the al-Jalaa Highrise; housing offices of the Associated Press, the Al Jazeera Media Network, and other news outlets; and 60 condominiums.
As a result of the violence, at least 256 Palestinians, including 66 children, were killed (including at least seven from friendly fire). In Israel, at least 13 people were killed, including two children. The Gaza Ministry of Health reported that more than 1,900 Palestinians were injured, and as of 12 May, at least 200 Israelis were reported to have been injured. As of 19 May, at least 72,000 Palestinians have been displaced. Around 4,360 Palestinian rockets were fired towards Israel, of which 680 landed within the Gaza Strip, and over 90 percent of rockets bound towards populated areas were intercepted by Israel's Iron Dome. Israel conducted around 1,500 aerial, land, and sea strikes on the Gaza Strip. Calls for a ceasefire were first proposed on 13 May by Hamas, but rejected by Israeli prime minister Benjamin Netanyahu. On 18 May, France, along with Egypt and Jordan, announced the filing of a United Nations Security Council resolution for a ceasefire. Egypt mediated a ceasefire between Israel and Hamas, which came into effect on 21 May 2021, ending 11 days of fighting in which both sides claimed victory. On 16 June 2021, incendiary balloons were launched from Gaza into Israel, which the Israeli Air Force responded to with multiple airstrikes in the Gaza Strip, resuming the fighting.


== Background ==


=== April–May 2021 Ramadan events ===
At the`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2021 Israel–Palestine crisis

*Part of the Israeli–Palestinian conflict* conflict.`
    ),
  }),
};
const armeniaazerbaijan_border_crisis_tool = {
  name: "armeniaazerbaijan_border_crisis",
  description: `Conflict name: Armenia–Azerbaijan border crisis
Start date: 2021
End date (if applicable): Ongoing

Description: Page: Armenia–Azerbaijan border crisis (2021–present)
Summary: The military forces of Armenia and Azerbaijan have been engaged in a border conflict since 12 May 2021, when Azerbaijani soldiers crossed several kilometers into Armenia in the provinces of Syunik and Gegharkunik. Despite international calls for withdrawal from the European Parliament, the United States, and France, Azerbaijan has maintained its presence on Armenian soil, occupying at least 215 square kilometres (83 sq mi) of internationally recognized Armenian territory. This occupation follows a pattern of Azerbaijan provoking cross-border fights and instigating ceasefire violations when its government is unhappy with the pace of negotiations with Armenia.
There have been repeated escalations, with significant incursions occurring along the Armenia–Nakhchivan border in July 2021 and in the Gegharkunik–Kalbajar area in November 2021. In a further provocation, Azerbaijani forces blockaded southern Armenia in August 2021 by closing the main north–south highway, effectively isolating Armenia from Iran and forcing the creation of alternative transportation routes. The most severe confrontation took place in September 2022, marking the largest attack by Azerbaijan on Armenia in the history of their conflict, resulting in casualties on both sides.
Despite Armenia's appeals for assistance from the Collective Security Treaty Organisation (CSTO) and Russia during Azerbaijan's incursions in May 2021 and September 2022, both entities declined to assist, leaving Armenia on its own. Officials from the European Parliament, the United States, and Russia have condemned Azerbaijan's military operations as violations of the ceasefire agreement. Azerbaijan's incursions have been combined with threats and territorial claims referring to Armenia as "Western Azerbaijan" made by the president of Azerbaijan: "Armenia must accept our conditions" if Armenians wish to "live comfortably on an area of 29,000 square kilometers," (11,000 sq. mi.).

In response to the ongoing aggression, Armenia allocated additional defense areas to border guards of the Russian Federal Security Service. Additionally, the EU dispatched a CSDP civilian monitoring mission to Armenia to promote border stability and deter future Azerbaijani offensives, despite criticism from Azerbaijani and Russian officials. The enduring conflict has heavily militarized the Armenian-Azerbaijani border, drastically affecting the lives of local Armenian residents. Communities have faced direct targeting, with restricted access to essential resources, farmlands, and social infrastructures, leading to a significant displacement of civilians.
In April 2024, Armenia and Azerbaijan reached an agreement according to which the border between the two states is to be demarcated on the basis of the Alma-Ata declaration.


== Background ==

Armenia and Azerbaijan have not officially demarcated their mutual borders since becoming independent states following collapse of the Soviet Union in 1991. There were also major clashes in 2012, 2014, 2018 and 2020.
The issue of border demarcation between Armenia and Azerbaijan arose immediately after the defeat of Armenia in the Second Nagorno-Karabakh War, and Azerbaijan regaining control over its occupied territories. Before the 2020 war, there was no mutually agreed upon border between Armenia and Azerbaijan, with certain Armenian villages and agricultural workers crossing over into Azerbaijan. During Soviet times, cross-border interactions and movements were common.
The issue of exclaves/enclaves is another border-related issue; there is an exclave called Artsvashen which is formally part of Soviet-era Armenia but controlled by and situated entirely within the current Republic of Azerbaijan; likewise, there are 4 Azerbaijani exclave villages of Karki, Yukhari Askipara, Barxudarlı and Sofulu that were formally part of Soviet-era Azerbaijan but are controlled by and situated entirely within the current Re`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Armenia–Azerbaijan border crisis conflict.`
      ),
  }),
};
const republican_insurgency_in_afghanistan_tool = {
  name: "republican_insurgency_in_afghanistan",
  description: `Conflict name: Republican insurgency in Afghanistan

*Part of the Afghanistan conflict (1978–present)*
Start date: 2021
End date (if applicable): Ongoing

Description: Page: Republican insurgency in Afghanistan
Summary: The republican insurgency in Afghanistan is an ongoing low-level guerrilla war between the National Resistance Front and allied groups which fight under the banner of the Islamic Republic of Afghanistan on one side, and the Islamic Emirate of Afghanistan (the state controlled by the Taliban) on the other side. On 17 August 2021, former first vice president of Afghanistan Amrullah Saleh declared himself the "caretaker" president of Afghanistan and announced the resistance. On 26 August, a brief ceasefire was declared. On 1 September, talks broke down and fighting resumed as the Taliban attacked resistance positions.
As of 3 September 2021, in addition to the opposition in the Panjshir, there were also districts in the centre of Afghanistan that still resisted the Taliban, supported by ethnic and religious minorities. On 6 September, the Taliban took control of most of the Panjshir province, with resistance fighters retreating to the mountains to continue fighting within the province. Clashes in the valley mostly ceased mid-September, while resistance leaders Amrullah Saleh and Ahmad Massoud fled to neighboring Tajikistan. Despite these developments, NRF holdouts continued to fight, still waging a guerrilla campaign in several provinces including Baghlan, Balkh, Badakhshan, and Faryab by early 2022. In addition, an independent anti-Taliban militia still held territory in Samangan Province as of December 2021.
As of December 2022, the NRF controls no territory but continues to carry out hit and run guerrilla attacks. As of December 2023, NRF leader Ahmad Massoud claimed that the NRF was conducting attacks against the Taliban in 20 out of Afghanistan's 34 provinces.


== Background ==

Historically, the Panjshir Valley was known for its natural defences. Surrounded by the Hindu Kush mountains, Panjshir never fell to the Soviets during the invasion of the 1980s nor to the Taliban during the civil war of the early 1990s. In the war of 1996–2001, Panjshir was a center of the anti-Taliban Northern Alliance. In these conflicts, Panjshir was under the leadership of Ahmad Shah Massoud who was killed by a suicide bomber in 2001. Soon after, the United States invasion of Afghanistan resulted in the overthrow of the previously dominant, Taliban-led Islamic Emirate of Afghanistan and the eventual establishment of the Islamic Republic of Afghanistan. Massoud and his family remained highly respected in Panjshir in the next two decades.
The traditional anti-Taliban sentiment of the Panjshiris has an ethnic dimension: A majority of the population of the Panjshir Valley are ethnic Tajik people, while the majority of the Taliban are Pashtuns. However, these ethnic differences became less pronounced in course of the Taliban insurgency, as the Taliban began to recruit Tajiks into their ranks.
In 2021, the Taliban overran most of Afghanistan in a lightning offensive; Panjshir Province was the only area which was able to resist until the offensive's conclusion. However, the valley's ability to withstand future Taliban assaults was hampered by it being cut off from outside support. In the 1980s and 1990s, Panjshir's forces had been able to keep supply lines to Tajikistan open. These were not accessible in the 2021 conflict, as the Taliban had successfully taken most of northern Afghanistan. Regardless, the former Islamic Republic of Afghanistan initially continued to exercise de facto control over the Panjshir Valley, which was described by The Week as "the only region out of [the] Taliban's hands" as of August 2021. Former loyalists to the old republic fled to Panjshir, hoping to transform it into an anti-Taliban stronghold.


== Saleh and Massoud's announcements ==
On 17 August 2021, Saleh—citing provisions of the Constitution of Afghanistan—declared himself President of Afghanistan from the Panjshir Valley, and vowed to continue military operations against the Taliban from there. His claim to the p`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Republican insurgency in Afghanistan

*Part of the Afghanistan conflict (1978–present)* conflict.`
    ),
  }),
};
const _2021_afghanistaniran_clashes_tool = {
  name: "_2021_afghanistaniran_clashes",
  description: `Conflict name: 2021 Afghanistan–Iran clashes
Start date: 2021
End date (if applicable): 2021

Description: Page: 2021 Afghanistan–Iran clashes
Summary: The 2021 Afghanistan–Iran clashes took place between the Islamic Emirate Armed Forces and the Iranian Border Guard Command along checkpoints on the Afghanistan–Iran border. The clashes occurred on the 1st of December, the cross-border fighting saw troops of the Islamic Emirate of Afghanistan capture several checkpoints on the Iranian side of the international border. The clashes ended later that day, after the two sides promptly came to an agreement that saw the Taliban force withdraw from all captured Iranian territory. Iran and the Islamic Emirate of Afghanistan subsequently referred to the incident as a "misunderstanding" and denied suffering any casualties, while various media reports reported casualties on both sides.


== Background ==
Relations between Iran, a primarily Shiite country, and the Taliban, dominated by Sunni fundamentalists, have historically been highly volatile. During the Taliban's rule of Afghanistan between 1996–2001, 10 Iranian diplomats from the consulate in Mazar-i-Sharif, were executed by the Taliban. This led to a military mobilization by Iran, which was resolved with the mediation of the United Nations. During the 2001 U.S. Invasion of Afghanistan, Iran cooperated with the U.S. forces and Iranian special forces supported the Northern Alliance during the capture of Herat.
During the 2001–2021 War in Afghanistan Iran improved its relations with the Taliban, during the war the U.S. and the Islamic Republic of Afghanistan accused Iran of providing sanctuaries and material support to the Taliban. In 2010, an Iranian Quds Force officer, who described as a "key Taliban weapons facilitator" was captured by NATO forces in Afghanistan. In 2017, the Islamic Republic of Afghanistan accused Iran of directly aiding the Taliban in their offensive against the Afghan government forces in western Afghanistan and claimed that Iran had tried to destroy a dam in Herat province. Iran has denied the accusations of providing support to the Taliban.
In the summer of 2021 the Taliban reestablished its rule over Afghanistan following the U.S. withdrawal from the country. In November 2021, National Resistance Front of Afghanistan's leader Ahmad Massoud and former warlord Ismail Khan met in Iran as part of their attempts to strengthen the Afghan opposition.


== Clashes ==
On 1 December 2021, clashes took place between the border guards of the two countries on the Afghanistan-Iran border. The semi-official Iranian news agency Tasnim, said that the clashes had started after the Taliban forces opened fire on Iranian farmers who had crossed the border wall between the two countries, which prompted the Iranian soldiers to intervene with heavy and medium weapons as well as artillery fire. During the ensuing clashes the Taliban fighters launched an attack on the Dahraes border checkpoint and overran it along with multiple other checkpoints in the Iranian territory. According to media reports, an unspecified number of combatants were killed on both sides during the clashes, while both sides denied suffering any casualties in the incident. The clashes ended later in the day after the two sides came to an agreement and the Taliban withdrew from all captured territory.


== Reactions ==


=== Afghanistan ===
Taliban spokesman Zabiullah Mujahid said that "a misunderstanding at the local level" had triggered the clash between the border guards of two countries. Mujahid added that "the situation was now under control with the understanding of both sides" and that the Taliban leaders in the area have been issued the "necessary instructions" to prevent such misunderstandings from happening again. The Taliban also did not report any casualties on their side.


=== Iran ===
Iran’s foreign ministry spokesman, Saeed Khatibzadeh, said in a statement that a "misunderstanding between border residents" had caused the fighting, without naming the Taliban.  The semi-official Iranian news agency Fars, made`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2021 Afghanistan–Iran clashes conflict.`
      ),
  }),
};
const russian_invasion_of_ukraine_tool = {
  name: "russian_invasion_of_ukraine",
  description: `Conflict name: Russian invasion of Ukraine

*Part of the Russo-Ukrainian War*
Start date: 2022
End date (if applicable): Ongoing

Description: Page: Russian invasion of Ukraine
Summary: On 24 February 2022, Russia invaded Ukraine in a major escalation of the Russo-Ukrainian War, which started in 2014. The invasion, the largest conflict in Europe since World War II, has caused hundreds of thousands of military casualties and tens of thousands of Ukrainian civilian casualties. As of 2024, Russian troops are occupying about 20% of Ukraine. From a population of 41 million, about 8 million Ukrainians had been internally displaced and more than 8.2 million had fled the country by April 2023, creating Europe's largest refugee crisis since World War II.
In late 2021, Russia massed troops near Ukraine's borders but denied any plan to attack. On 24 February 2022, Russian president Vladimir Putin announced a "special military operation", stating that it was to support the Russian-backed breakaway republics of Donetsk and Luhansk, whose paramilitary forces had been fighting Ukraine in the Donbas conflict since 2014. Putin espoused irredentist views challenging Ukraine's legitimacy as a state, falsely claimed that Ukraine was governed by neo-Nazis persecuting the Russian minority, and said that Russia's goal was to "demilitarise and denazify" Ukraine. Russian air strikes and a ground invasion were launched on a northern front from Belarus towards Kyiv, a southern front from Crimea, and an eastern front from the Donbas and towards Kharkiv. Ukraine enacted martial law, ordered a general mobilisation and severed diplomatic relations with Russia.
Russian troops retreated from the northern front, including from the outskirts of Kyiv, by April 2022 after encountering logistical challenges and stiff resistance. On the southern and southeastern fronts, Russia captured Kherson in March and Mariupol in May, the latter after a destructive siege. Russia launched a renewed offensive in the Donbas and continued to bomb military and civilian targets far from the front, including the energy grid through the winter months. In late 2022, Ukraine launched successful counteroffensives in the south and east. Soon after, Russia announced the illegal annexation of four partly-occupied oblasts. In November, Ukraine retook parts of Kherson Oblast, including Kherson city. In June 2023, Ukraine launched another counteroffensive in the southeast, which by the end of the year had failed with only small amounts of territory retaken. After small but steady gains for Russia in eastern Ukraine in the first half of 2024, Ukraine launched a cross-border incursion into Russia's Kursk Oblast in August of that year.
War-related disruption to Ukrainian agriculture and shipping contributed to a world food crisis, while extensive environmental damage caused by the conflict have been described as an ecocide. The Russian attacks on civilians have led to allegations of genocide. The invasion was met with widespread international condemnation. The United Nations General Assembly passed a resolution condemning the invasion and demanding a full Russian withdrawal in March 2022. The International Court of Justice ordered Russia to suspend military operations and the Council of Europe expelled Russia. Many countries imposed sanctions on Russia and its ally Belarus, and provided humanitarian and military aid to Ukraine. The Baltic states all declared Russia a terrorist state. Protests occurred around the world, with anti-war protesters in Russia being met by mass arrests and greater media censorship. The International Criminal Court (ICC) opened an investigation into war crimes, crimes against humanity, abduction of Ukrainian children, and genocide against Ukrainians. The ICC issued six arrest warrants: for Putin and Maria Lvova-Belova, and for military officials Sergey Kobylash, Viktor Sokolov, Sergei Shoigu and Valery Gerasimov.


== Background ==


=== Post-Soviet relations ===
After the dissolution of the Soviet Union in December 1991, the newly independent states of the Russian Federation and Ukraine maintained cordial rela`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Russian invasion of Ukraine

*Part of the Russo-Ukrainian War* conflict.`
    ),
  }),
};
const m23_offensive_tool = {
  name: "m23_offensive",
  description: `Conflict name: M23 offensive

*Part of the Kivu conflict*
Start date: 2022
End date (if applicable): Ongoing

Description: Page: M23 offensive (2022–present)
Summary: In late March 2022, the March 23 Movement (M23), supported by Rwanda, launched an offensive in North Kivu against the Armed Forces of the Democratic Republic of the Congo (FARDC) and MONUSCO. The fighting displaced hundreds of thousands of civilians and caused renewed tensions between the Democratic Republic of the Congo and Rwanda.


== Background ==

The March 23 Movement waged a rebellion in the northeastern Democratic Republic of the Congo (DRC) from 2012 to 2013. M23 was formed by deserters of the DRC Armed Forces (FARDC) who had previously been members of the CNDP rebel group and been dissatisfied with the conditions of their service. Both the CNDP as well as the March 23 Movement's first rebellion were supported by Rwanda and Uganda. The uprising was defeated by a joint campaign of the DRC and MONUSCO, the local United Nations peacekeeping force. After agreeing to a peace deal, M23 was largely dismantled, its fighters disarmed and moved into refugee camps in Uganda.
Despite the agreement, hostilities between M23 and the DR Congo continued. In 2017, M23 commander Sultani Makenga and about 100 to 200 of his followers fled from Uganda to resume their insurgency, setting up camp at Mount Mikeno in the border area between Rwanda, Uganda, and the DR Congo. Makenga's force launched a minor offensive against the FARDC in 2021; however, this operation achieved little, as M23 no longer enjoyed significant international support. Uganda and the DR Congo had greatly improved their relations, cooperating against a common enemy, the Allied Democratic Forces, during Operation Shujaa. In early 2022, a growing number of M23 combatants began leaving their camps and move back to the DR Congo; the rebel movement launched more attacks in February 2022, but these were repelled. The M23 leadership argued that parts of their movement had resumed the insurgency because the conditions of the 2013 peace deal were not being honored by the DRC government. The rebels also argued that they were attempting to defend Kivu's Tutsi minority from attacks by Hutu militants such as the Democratic Forces for the Liberation of Rwanda (FDLR).
The situation was further complicated by the factionalism within M23, as the movement was split into rival groups, namely the "Alliance for the Salvation of the People" headed by Jean-Marie Runiga, and the "Revolutionary Army of Congo" of Bertrand Bisimwa respectively. In addition, Makenga's group was de facto separate from the other M23 forces which were still mainly based in Uganda. Later research organized by the United Nations Security Council suggested that Makenga's return to an insurgency had started the gradual rearmament and restoration of M23, with Bisimwa's "Revolutionary Army of Congo" joining these efforts in late 2021 by reorganizing its remaining fighters and recruiting new ones in cooperation with Makenga. The headquarters of the restored M23 is believed to be located at Mount Sabyinyo.
By 2022, M23 was just one of 120 armed groups that operate in the eastern DR Congo. Before March 2022, the Congoloese government made attempts to reinforce its position against the resurgent M23 by sending more troops. However, such measures weakened its presence in other areas, such as those affected by the Allied Democratic Forces insurgency.


== Offensive ==


=== Initial rebel attacks ===
In the night of 27 March 2022, M23 rebels launched a new offensive in North Kivu, first attacking the villages of Tshanzu and Runyoni in the Rutshuru Territory from their strongholds at the surrounding hills. The two villages had been important strongholds of the M23 Movement during the 2012–13 rebellion. The rebel attack was reportedly led by Sultani Makenga. The DRC government claimed that Rwanda supported the insurgent operation, a claim which was denied by the Rwandan government and the rebels. International Crisis Group researcher Onesphore Sematumba argued that claims about Rwandan aid `,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the M23 offensive

*Part of the Kivu conflict* conflict.`
    ),
  }),
};
const _2022_alshabaab_invasion_of_ethiopia_tool = {
  name: "_2022_alshabaab_invasion_of_ethiopia",
  description: `Conflict name: 2022 al-Shabaab invasion of Ethiopia

*Part of the Somali Civil War*
Start date: 2022
End date (if applicable): 2022

Description: Page: 2022 al-Shabaab invasion of Ethiopia
Summary: On 20 July 2022, the Islamist militant group al-Shabaab launched an invasion from Somalia into Ethiopia's Somali Region. Taking advantage of the ongoing Tigray War, the goal of the operation was to establish a presence for the group within southern Ethiopia. 
The incursion began with over a thousand Al-Shabaab fighters staging diversionary attacks on four Ethiopian-Somali border towns in order to allow a force of 500 to 800 fighters to penetrate the Ethiopian security zone and advance into the region. During the initial days of fighting, Al-Shabaab primarily fought against the Somali Region's security forces. Further cross-border attacks continued in the following days, while Ethiopian National Defense Force (ENDF) carried out counter-offensives in response. 
Al-Shabaab forces advanced 150 kilometers into the Ogaden. After two weeks of intense clashes and airstrikes, the ENDF and Somali Region security forces began to reassert control. A battalion of around 500 al-Shabaab fighters succeeded in evading the Ethiopian army and reached its main target, the Bale Mountains. Several weeks after the operation was over, clashes continued to break out in border regions.
Al-Shabaab was able to successfully establish a presence in Bale following the incursion and created several training camps. It is the largest attack by al-Shabaab in Ethiopian territory to date.


== Background ==

Historically, the Somali inhabited Ogaden (organized into the Somali Region in 1995), along with the adjacent Ethiopian-Somali border, has been disputed and been the place of several interstate wars and insurgencies (both nationalist and Islamist). In addition, eastern Ethiopia has been affected by a number of ethno-nationalist rebellions, some of which were motivated by separatism in Oromia. During the 1960's, Bale Province, inhabited by the Oromo and Somali people, saw a major revolt against Emperor Haile Selassie lasting nearly a decade. Common Islamic faith provided a basis for cooperation between Oromo and Somalis when the insurgency broke out against the Ethiopian Empire in 1963. In 1991, the Somali government collapsed and Somalia was embroiled in a full-scale civil war. During 1992, the Ethiopian government attacked Al-Itihaad al-Islamiya (AIAI), a rising Islamist political-military group in the Ogaden that was a registered political party; in a bid to crush the movement. This sparked a jihad between the Ethiopians and AIAI. Al-Itihaad began to launch raids into Ethiopia. In doing so, it possibly forged links with local rebels such as the Islamic Front for the Liberation of Oromia (IFLO). In 1996, Ethiopia responded to these raids by launching its first armed intervention into Somalia. 
In 2006, Ethiopia invaded Somalia to depose the Islamic Courts Union (ICU). In the following two years most of the country fell to an Islamist insurgency and Ethiopia withdrew in 2009. The invasion and military occupation led to the rise of Al-Shabaab, a youth militia within the wider military wing of the ICU, which became an independent faction in early 2007 and began governing territory in 2008. In early 2007, an al-Shabaab force led by Aden Ayro launched an incursion into Ethiopia in retaliation for the invasion, but was quickly repelled. Al-Shabaab has also had hostile relations with insurgents fighting for independence in the Somali Region. During December 2007, an al-Shabaab force in the Somali Regions Degahbur Zone fought with the Ogaden National Liberation Front. Instead of eliminating "Jihadist" activity the invasion led to its rise in Somalia. By the time of the ENDF withdrawal in early 2009, Al-Shabaab's forces had grown significantly in numbers, swelling from just six hundred to several thousand fighters strong since the invasion began. Al-Shabaab later pledged allegiance to Al-Qaeda in 2012. The group has also voiced support for pan-Somali ideas, describing the Ethiopian-Somali border as "artificial". 
Ov`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2022 al-Shabaab invasion of Ethiopia

*Part of the Somali Civil War* conflict.`
    ),
  }),
};
const _2022_gazaisrael_clashes_tool = {
  name: "_2022_gazaisrael_clashes",
  description: `Conflict name: 2022 Gaza–Israel clashes

*Part of the Israeli–Palestinian conflict*
Start date: 2022
End date (if applicable): 2022

Description: Page: 2022 Gaza–Israel clashes
Summary: The 2022 Gaza–Israel clashes code-named as Operation Breaking Dawn lasted from 5 to 7 August 2022. The Israel Defense Forces (IDF) conducted some 147 airstrikes in Gaza and Palestinian militants fired approximately 1,100 rockets towards Israel. The operation, ordered by Prime Minister Yair Lapid and Defense Minister Benny Gantz without prior Cabinet discussion or approval, followed a raid in Jenin in the Israeli-occupied West Bank, in which Israeli forces arrested Bassam al-Saadi, a leader of the Palestinian Islamic Jihad (PIJ) in that area.  On 6 August, Israel arrested 20 people in the West Bank of whom 19 were members of PIJ and a further 20 on 7 August according to an unnamed Israeli official.
The initial attack included the targeted killing of Tayseer al-Jabari, a military leader of the group. On the second day, the PIJ commander of the Southern area of the Strip, Khaled Mansour, was also targeted and killed. Islamic Jihad stated that the Israeli bombardments were a 'declaration of war' and responded with retaliatory rocket fire towards Israel.
The clashes resulted in the death of at least 49 Palestinians, including 17 children, according to the Gaza health ministry. The IDF stated that over a dozen of these deaths, including 12 of the children, were caused by failed PIJ rocket launches. This was disputed by the father of one of the victims, while other Gaza residents and journalists state they saw the misfires by PIJ and called for an investigation of the misfires. On 13 August, Haaretz reported that misfires killed 14 civilians, including seven children. Some 20% of rockets fell short and into Gaza.
The clashes ended with a truce that was confirmed by both sides on the night of 7 August 2022.


== Background ==

Both the Islamic Jihad Movement in Palestine (PIJ) and Hamas are designated terrorist organizations by Israel, the US, and the EU. However, the PIJ has usually been overshadowed by the larger Hamas movement which administers Gaza. PIJ has been growing in strength since the 2014 Gaza War, and receives weapons and funding from Iran. It is considered by Israel as one of the "most dangerous and radical Palestinian armed groups".
PIJ has a strong presence in West Bank cities like Jenin and Nablus. During the period between March and May, attacks by Israeli Arabs and Palestinians killed 17 Israelis, most of them civilians, and two Ukrainians. As a result, the IDF increased its raids against armed Palestinian factions throughout the West Bank. By July, at least 30 Palestinians were killed, including journalist Shireen Abu Akleh and 3 of those responsible for killings in Israel. On 1 August, Israeli forces arrested the PIJ West Bank leader Bassem al-Saadi. In the aftermath of that operation, amid heightened tensions, roads were closed in the south of Israel by the Israeli-Gaza border wall and reinforcements were sent south after threats of attack were made by PIJ sources in Gaza. The same day, Israeli communities in southern Israel were placed in lockdown by the military as a security precaution against potential attacks from Gaza, as, according to Israel, the PIJ had positioned anti-tank missiles and snipers at the border to kill Israeli civilians and soldiers.
Haaretz reported on 2 August that Egyptian intelligence officials "are holding talks with the leaders of the factions in Gaza in order to prevent escalation"  and that "all parties told Cairo they aren't looking for escalation." On 3 August, Khaled al-Batsh, head of the politburo of the PIJ in Gaza said: "We have every right to bomb Israel with our most advanced weapons, and make the occupier pay a heavy price. We will not settle for attacking around Gaza, but we will bomb the center of the so-called State of Israel."
The operation was ordered by Prime Minister Yair Lapid and Defense Minister Benny Gantz without prior Cabinet discussion or approval.
Early on 5 August, Tor Wennesland, the United Nations Special Coordinator `,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2022 Gaza–Israel clashes

*Part of the Israeli–Palestinian conflict* conflict.`
    ),
  }),
};
const _2022_armenianazerbaijani_clashes_tool = {
  name: "_2022_armenianazerbaijani_clashes",
  description: `Conflict name: 2022 Armenian-Azerbaijani clashes

*Part of the 2021–2023 Armenia–Azerbaijan border crisis*
Start date: 2022
End date (if applicable): 2022

Description: Page: September 2022 Armenia–Azerbaijan clashes
Summary: On 12 September 2022, a series of clashes erupted between Armenian and Azerbaijani troops along the Armenia–Azerbaijan border, marking a major escalation in the current border crisis between Armenia–Azerbaijan and resulting in nearly 300 deaths and dozens of injuries on both sides by 14 September. A number of human rights organizations and governments – including the United States, European Parliament, Canada, France, Uruguay, Cyprus – stated that Azerbaijan had launched an attack on positions inside the Republic of Armenia.
Azerbaijani forces attacked military and civilian positions in Vardenis, Goris, Sotk, Jermuk, and other cities with artillery, drones, and heavy weapons. Azerbaijan claimed that Armenian forces had staged "large-scale subversive acts" using "saboteurs" who planted landmines, an allegation the government spread during the days following the invasion and also echoed by Azerbaijan's ally Turkey. Various journalists, politicians, and political analysts scrutinized these allegations and considered them unfounded or unverifiable. 
The fighting ended with Azerbaijani troops taking control of strategic positions deep inside Armenia, with at least 7600 civilians displaced from Armenian provinces. Russia said on 13 September that it had brokered a ceasefire, but both sides confirmed it was broken minutes after coming into effect. On 14 September, Armenia and Azerbaijan brokered a new ceasefire. Armenia requested that the CSTO provide military support; however, the military alliance refused to provide support. The clashes erupted shortly after Russia suffered serious setbacks in the Kharkiv counteroffensive during the invasion of Ukraine, weakening its force projection in the Caucasus.  
Following a meeting between leaders of Azerbaijan and Armenia at the invitation of the President of France, and the President of the European Council, an EU civilian monitoring mission consisting of 40 people was deployed on the Armenian side of the border (Azerbaijan did not grant access to its side), and an OSCE assessment mission will be sent to Armenia.


== Background ==

On 12 May 2021, Azerbaijani soldiers crossed several kilometers into Armenia in the provinces of Syunik and Gegharkunik and occupied about 41 square kilometres (16 sq mi) of Armenian territory. The European Parliament, as well as the United States and France – two of the three co-chairs of the OSCE Minsk Group – called on Azerbaijan to withdraw its troops from internationally recognised Armenian territory.
Further clashes took place in July 2021 and in November 2021, with casualties being reported from both sides. In a joint statement on 17 November 2021, EU rapporteurs called the military operation launched by Azerbaijan on 16 November 2021 the worst violation to date of the 2020 Nagorno-Karabakh ceasefire agreement.
Turkey and Azerbaijan carried out joint military exercises in the days before the September 2022 attacks on Armenia. In the days and hours up running up until September 13, Armenian officials warned that they feared an attack.


== Timeline ==


=== 12–13 September ===

On the morning of 12 September 2022, Azerbaijan initiated an unprovoked invasion of Armenia, striking positions along a 200 km stretch of their shared border.
On the evening of 12 September, the Armenian Ministry of Defense reported that units of the Azerbaijani Armed Forces had started firing intensively with artillery and heavy weapons in the direction of Armenian positions and civilian areas in Goris, Artanish, Sotk, Jermuk, Kapan, and Ishkhanasar. The Armenian MoD also mentioned that the Azerbaijani side had used UAVs, and was undertaking positional advancement operations in some directions. The Azerbaijani Defence Ministry said that Armenia had staged "large-scale provocations" near the Dashkasan, Kalbajar, and Lachin regions and had laid mines along the army's supply roads. The Azerbaijani MoD reported that they were ta`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2022 Armenian-Azerbaijani clashes

*Part of the 2021–2023 Armenia–Azerbaijan border crisis* conflict.`
    ),
  }),
};
const _2022_kyrgyzstantajikistan_clashes_tool = {
  name: "_2022_kyrgyzstantajikistan_clashes",
  description: `Conflict name: 2022 Kyrgyzstan–Tajikistan clashes
Start date: 2022
End date (if applicable): 2022

Description: Page: 2022 Kyrgyzstan–Tajikistan clashes
Summary: A series of sporadic border clashes resumed between Kyrgyzstan and Tajikistan on 27 January 2022, following a series of clashes in 2021 between the two countries.
Kyrgyzstan officials said that the clashes escalated on 14 September 2022, with Tajik forces using tanks, APCs, and mortars to enter at least one Kyrgyz village and shelling the airport of the Kyrgyz town of Batken and adjacent areas. Both nations blamed each other for the fighting. The border conflict continued for two days, after which the parties were able to agree to a ceasefire on the night of 16 September 2022, which only held for about a day.
Kyrgyzstan's President Sadyr Japarov said in a televised address that his country would continue efforts to resolve the Kyrgyz–Tajik border issues in a purely peaceful way. Tajikistan's foreign ministry stated that the key to resolving the conflict lay in negotiations, and it reiterated its position that Kyrgyzstan had instigated the fighting. Russian news agencies reported that both Kyrgyzstan and Tajikistan had agreed to pull out additional military hardware and forces from the border, citing a statement from the head of the Sughd Region of Tajikistan. On 20 September 2022, Tajikistan and Kyrgyzstan signed a peace deal.


== Background ==


=== Historical context ===
The territories that comprise present-day Kyrgyzstan and Tajikistan, both formerly part of the Khanate of Kokand, were conquered by the Russian Empire in the 19th century. In the 1920s, the Soviet Union imposed delimitation in the two regions which resulted in enclaves. Both countries became independent in 1991 when the Soviet Union dissolved. Both countries are also members of the Shanghai Cooperation Organization (SCO) and Collective Security Treaty Organization (CSTO), and are theoretically allied to each other.


=== Previous clashes ===

A border conflict started between Kyrgyzstan and Tajikistan on 28 April 2021. The events surrounding the conflict's outbreak are disputed, but clashes reportedly began due to an old water dispute between the two countries, near the Vorukh enclave. Some sources report an immediate reason for the conflict was the dissatisfaction of the local population with the installation of surveillance cameras near Kyrgyzstan–Tajikistan border. At least 55 people were killed in the events and more than 40,000 civilians were displaced.
On 3 May 2021, both countries completed the withdrawal of troops from the border, and on 18 May 2021, officials in both countries announced that they had agreed to joint security controls along their disputed border. Apart from a small-scale incident on 9 July 2021, the ceasefire held until January 2022.


== Timeline ==


=== Sporadic clashes ===
On 27 January 2022, clashes resulted in the deaths of two civilians and the wounding of several more. Tajikistan's State Committee for National Security said in a statement that ten of its citizens were injured, six of them servicemen, the rest civilians. On the other side, Kyrgyzstan's Health Ministry said that at least 11 of its citizens were being treated for moderately serious injuries. Kyrgyzstan authorities stated that the blocking of a road between the provincial center of Batken and the Kyrgyz village of Isfana by Tajik citizens was the cause of the clashes.
On 10 March, an armed incident between border guards at the Kyrgyzstan–Tajikistan border, in the area of Teskey, Batken District, killed a Tajik border guard. Following the incident, officials from the Batken Region in Kyrgyzstan and the Sughd Region in Tajikistan held talks.
According to Tajik sources, a border clash occurred on 3 June after Kyrgyz soldiers crossed the Kyrgyzstan–Tajikistan border close to Vorukh. Two weeks later, on 14 June, a Tajik border guard was killed and three others injured in a clash with Kyrgyz border troops.


=== Escalation ===
On 14 September, one Tajik border guard was killed and two others were wounded during clashes`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2022 Kyrgyzstan–Tajikistan clashes conflict.`
      ),
  }),
};
const _2023_las_anod_conflict_tool = {
  name: "_2023_las_anod_conflict",
  description: `Conflict name: 2023 Las Anod conflict
Start date: 2023
End date (if applicable): Ongoing

Description: Page: Las Anod conflict (2023–present)
Summary: The Las Anod conflict (Somali: Dagaalkii Laascaanood) is an ongoing armed conflict between the Somaliland National Army and the SSC-Khatumo forces of the Dhulbahante in Las Anod, the capital of the Sool region. 
Fighting erupted on 6 February 2023 after Somaliland security forces held a violent crackdown on civil protests. Several days later the supreme Garad of Dhulbahante, Garad Jama Garad Ali, declared an intent to secede and reunite with the Federal Government of Somalia. Under the leadership of President Muse Bihi, the Somaliland Army engaged in an extended military operation aimed at subduing the city of Las Anod through artillery bombardment over a period of six months. However, in August 2023, the army was compelled to retreat from the environs of Las Anod.
SSC-Khaatumo was recognized and acknowledged as an interim administration by the Federal Government of Somalia on 19 October 2023. 
By May 2023, the conflict had killed over 300 people among the local population and displaced 153,000–203,000 as refugees. It is not known how many have been killed in all. Citizens have been displaced en-masse externally to Buuhodle and the Ethiopian border, internally to SSC-Khatumo territories of Taleh, Hudun, Buuhodle, or to Puntland cities – most commonly Garowe, Galkacyo and Burtinle. An Amnesty International report determined that Somaliland security forces' engaged in indiscriminate shelling of Las Anod - resulting in the damage of schools, mosques, hospitals, and deaths and injury of civilians.


== Background ==

During 1991, Somaliland declared an independent state within the borders of the former British Somaliland. The Somali Dhulbahante clan populates the east of this territory – primarily in the Sool, Sanaag and Buuhoodle regions. The Dhulbahante were largely opposed to the attempt to secede from Somalia and  did not fully participate in Somaliland’s elections in protest. Ideologically, the Dhulbahante nearly unanimously rejected secession. In 2003, Las Anod came under the control of the unionist Puntland state.
During October 2007, the Somaliland army took over the city during the Battle of Las Anod against Puntland forces. The city had been controlled by Somaliland since then. Local Puntland militia switched loyalties. The clan militias supporting Somaliland were loyal to Ahmed Abdi Habsade, a Puntland minister who defected to Somaliland and then returned to Puntland. In particular, the security situation reported to have severely declined under Somaliland's control. The Raad Peace Research Institute in Mogadishu reported that "120 prominent clan and community leaders were assassinated" between 2007 and 2022 in the city proper.
In December 2022, civil demonstration and unrest began to spread northwest across the Sool region, from Taleh to Kalabaydh, Hudun, Boocame and Tukaraq, driven by perceived political marginalization in Somaliland. The protests were triggered by the death of Abdifatah Abdulli Hadrawi, a popular politician in the Waddani opposition party. When the mass civil demonstration reached Las Anod, Somaliland security forces held a violent crackdown on the protestors in the final week of December 2022 which killed 20 people. Following bilateral talks, Somaliland troops retreated from the city to their Sool outposts to prevent further violence.
Following mass protest that continued from December into January 2023, the retreat of the Somaliland troops paved the way for the return of the supreme Garad of Dhulbahante, Garad Jama Garad Ali – a community leader exiled from Las Anod since 2007. Rumor spread of a grand meeting of all Dhulbahante clan elders, followed by speculation that the elders would vote to exile Somaliland security forces from the city.


== Declaration of SSC government and start of war ==
Before the war had started, most Dhulbahante commanders and their troops serving in the Somaliland security forces had quit or deserted. Before the fighting ha`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2023 Las Anod conflict conflict.`
      ),
  }),
};
const war_in_amhara_tool = {
  name: "war_in_amhara",
  description: `Conflict name: War in Amhara
*Part of the Ethiopian civil conflict (2018-present)*
Start date: 2023
End date (if applicable): Ongoing

Description: Page: War in Amhara
Summary: The War in Amhara is an armed conflict in the Amhara Region of Ethiopia that began in April 2023 between the Amhara regional forces along with the Fano militia, and the Ethiopian government. The conflict began after the Ethiopian military raided the Amhara Region to disarm the Amhara Special Forces and other regional allies, which resulted in resistance of local armed forces and a series of protests in Gondar, Kobo, Sekota, Weldiya and other cities on 9 April.
On 27 April, the head of Prosperity Party in the Amhara Region Girma Yeshitila was assassinated in Menz, North Shewa. The Ethiopian government accused the Fano militia's eastern faction for the assassination and plotting the overthrow of the government. The Ethiopian security forces said on 30 April that 47 suspects were arrested by the Ethiopian government in connection with an alleged assassination plot. The Ethiopian Human Rights Commission (EHRC) stated on 4 May 2023 that militarized situations were present in four towns of the North Gondar, North Wollo and North Shewa zones. 
Further escalation erupted on 1 August between Fano and ENDF troops in Gondar, Debre Tabor and Debre Markos. Following the seizure of Lalibela on 2 August by Fano fighters, the Amhara regional government under Yilkal Kefale requested help from the federal government, resulting in a six-month state of emergency on 4 August. The ENDF retook Gondar and Lalibela on 8 August. Just after controlling much parts of the region, ENDF carried out a drone strike in Finote Selam on 13 August, killing 26 people according to the hospital source. The Europe External Programme with Africa (EEPA) reported that the ENDF conducted door-to-door searches and began extrajudicial killing against residents, mostly young men. At least 70 civilians were killed by the execution. 
The war exploited massive human rights violations and property damages carried out by Ethiopian authority according to numerous human rights groups including the Ethiopian Human Rights Commission (EHRC) and Amnesty International. EHRC said that 45 civilians were killed in Amhara region by security forces for allegedly supporting Fano in late January 2024. Amnesty International verified the extrajudicial killings of ENDF troops between 10 and 11 October 2023 against health workers, including threatening them with gunpoint. 
Despite perceived popular support, the absence of unified leadership within the Fano groups has raised questions regarding the insurgency's long-term sustainability.


== Background ==
The Amhara regional forces played a crucial role during the Tigray War, fighting alongside the Ethiopian National Defense Force against the TPLF-led Tigray Defense Forces. Amid the Tigray War in early 2021, there was strife in the Oromia Special Zone of the Amhara Region where fighting occurred between the Oromo Liberation Army (OLA) and Amhara Special Forces. Local witnesses told that the OLA, along with other ethnic Oromo militants, overwhelmingly took control of Ataye town on 20 March 2021. The OLA was actively allied with the Tigrayan rebels at the time.

The November 2022 peace agreement which was signed between the Tigrayan and Ethiopian government counterparts opened the door for the OLA insurgency to intensify amidst security and provisional reform in Tigray. As a result, OLA had participated in massacres of ethnic Amharas in the Oromia region. In May 2022, Abiy Ahmed government arrested 4,000 people in Amhara to undermine Fano militia rebellion who were critical to his power.
Initial Fano objectives as of March 2020 was for Benishangul-Gumuz Region's Metekel Zone, the northern districts of Welkait and Raya in Tigray, as well as the southern district of Dera to be placed under the control of the Amhara Region. The military stalemate that preceded the November 2022 peace agreement precluded any land swap in the region, as Ethiopian leaders no longer were interested in supporting Fano's territorial goals. This, `,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the War in Amhara
*Part of the Ethiopian civil conflict (2018-present)* conflict.`
    ),
  }),
};
const _2023_afghanistaniran_clash_tool = {
  name: "_2023_afghanistaniran_clash",
  description: `Conflict name: 2023 Afghanistan–Iran clash
Start date: 2023
End date (if applicable): 2023

Description: Page: 2023 Afghanistan–Iran clash
Summary: On 27 May 2023, Armed Forces of the Islamic Emirate of Afghanistan and Iranian border guards clashed along the Afghanistan–Iran border between the Afghan Nimruz Province and the Iranian Sistan and Baluchestan Province. After a brief clash, the two sides de-escalated the situation.


== Background ==


=== Iran's rights to the Helmand water ===
 
Disputes between Iran and Afghanistan over rights to the water of the Helmand River first occurred in the 1870s, flaring again after the river changed course in 1896. In 1939, the kings of the two countries signed an accord to share water rights, which was signed but never ratified. According to a 1973 treaty between the prime ministers of both nations, Iran is supposed to receive a share of 820 million cubic meters of the river each year. In 1978 Afghanistan turned Communist following the Saur Revolution, Iran would undergo its own revolution overthrowing the Pro Western Shah and turning Iran into a Shia theocracy. Relations between the Democratic Republic of Afghanistan and the newly formed Islamic Republic of Iran soured as in July 1979 Hafizullah Amin announced that the DRA was not bound by old treaties with Iran regarding the distribution of water from the Helmand River. Amin's statements provoked a sharp response from Iran which interpreted the Afghan position as using Soviet backing to assert themselves in the region. The issue of water rights were an issue of great importance between the two nations, during Ashraf Ghani's presidency, Afghanistan began building a number of new dams, such as the Salma Dam across the Harirud river and the Kamal Khan Dam across the Helmand river. Taliban-linked historian Mustafa Hamid stated that the Kamal Khan dam was expressly designed by the American government to complicate future relations between Iran and Afghanistan, and did not benefit Afghanistan. Afghan officials have been discussing water sharing arrangements with the Iranian side since the Taliban came to power. On 18 May 2023, Iranian president Ebrahim Raisi warned the Taliban not to violate Iran's rights to the Helmand river's water, urging them to implement the 1973 treaty.


=== Iran–Taliban relations ===
Relations between Iran, a primarily Shiite country, and the Taliban, dominated by Sunni fundamentalists, have historically been highly volatile. During the Taliban's rule of Afghanistan between 1996–2001, 10 Iranian diplomats and an Iranian journalist from the consulate in Mazar-i-Sharif were executed, in an incident condemned by the Taliban. This led to a military mobilization by Iran, which was resolved with the mediation of the United Nations. During the 2001 U.S. Invasion of Afghanistan, Iran cooperated with the U.S. forces and Iranian special forces supported the Northern Alliance during the Herat uprising.
After George W. Bush's 2002 "axis of evil" speech, Iran improved its relations with the Taliban. During the war, the U.S., UK, and the Islamic Republic of Afghanistan accused Iran of providing sanctuaries and material support to the Taliban. In 2017, the Islamic Republic of Afghanistan accused Iran of aiding the Taliban in their offensive against the Afghan government forces in western Afghanistan and claimed that Iran had tried to destroy a dam in Herat province. Iran has denied all accusations of providing support to the Taliban.
In mid-2021, the Taliban, allegedly supported by Iran, reestablished its rule over Afghanistan following the U.S. withdrawal from the country. On 1 December 2021, the 2021 Afghanistan–Iran clashes occurred between the Islamic Emirate of Afghanistan and the Islamic Republic of Iran. Both sides called it an accident.


== Clashes ==
Official statement issued by both sides as to how the clashes took place differed significantly, with each side blaming the other. Inayatullah Khwarazmi, spokesperson for the Afghan Ministry of Defence, stated: "Unfortunately, today once again in the border areas of Kang distri`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2023 Afghanistan–Iran clash conflict.`
      ),
  }),
};
const war_in_sudan_2023_tool = {
  name: "war_in_sudan_2023",
  description: `Conflict name: War in Sudan (2023)
Start date: 2023
End date (if applicable): Ongoing

Description: Page: Sudanese civil war (2023–present)
Summary: A civil war between two major rival factions of the military government of Sudan, the Sudanese Armed Forces (SAF) under Abdel Fattah al-Burhan, and the paramilitary Rapid Support Forces (RSF) and its allies (collectively the Janjaweed coalition) under the Janjaweed leader Hemedti, began during Ramadan on 15 April 2023. Three minor (neutral) factions have participated in the fighting: Darfur Joint Protection Force, SLM (al-Nur) under Abdul Wahid al-Nur, and SPLM-N under Abdelaziz al-Hilu. Fighting has been concentrated around the capital city of Khartoum (largest and initial battle of the war) and the Darfur region. As of 21 January 2024, at least 13,000–15,000 people had been killed and 33,000 others were injured. As of 5 July 2024, over 7.7 million were internally displaced and more than 2.1 million others had fled the country as refugees, and many civilians in Darfur have been reported dead as part of the Masalit Genocide.
The war began with attacks by the RSF on government sites as airstrikes, artillery, and gunfire were reported across Sudan. The cities of Khartoum and Omdurman were divided between the two warring factions, with al-Burhan relocating his government to Port Sudan as RSF forces captured most of Khartoum's government buildings. Attempts by international powers to negotiate a ceasefire culminated in the Treaty of Jeddah in May 2023, which failed to stop the fighting and was ultimately abandoned.
Over the next few months, a stalemate occurred, during which the two sides were then joined by rebel groups who had previously fought against Sudan's government. By mid-November, the Minni Minnawi and Mustafa Tambour factions of the Sudan Liberation Movement officially joined the war in support of the SAF, alongside the Justice and Equality Movement (JEM). In contrast, the Tamazuj movement joined forces with the RSF, while the Abdelaziz al-Hilu faction of the Sudan People's Liberation Movement–North attacked SAF positions in the south of the country.
Starting in October 2023, momentum began to swing toward the RSF, as the paramilitary defeated army forces in Darfur and made gains in Khartoum State, Kordofan, and Gezira State. Since February 2024, the SAF has made gains in Omdurman. Since June 2024, the RSF has made gains in Sennar State. Further negotiations between the warring sides have so far produced no significant results, while many countries have provided military or political support for either al-Burhan or Hemedti.


== Background ==

Sudan has been inhabited since prehistory and has seen many conflicts, with foreign invasions and resistance, ethnic tensions, religious disputes, and disputes over resources throughout antiquity and the middle ages. Sudan was conquered by Egypt in 1821, and in 1881 the religious leader Muhammad Ahmad led a nationalist revolt and established an "Islamic and national" Mahdist State in much of the territory of modern Sudan. After Ahmad's death, a British-Egyptian force commanded by Lord Kitchener retook Sudan. In 1899, the country became a condominium of Egypt and the United Kingdom, but was de facto ruled by the UK alone and would remain under British control until 1956, when it gained independence and inherited its pre-1911 borders. Since gaining independence, Sudan has experienced more than 19 military coup attempts, the most of any African nation. Sudan has usually been ruled by the military, interspersed with short periods of democratic parliamentary rule.
Two civil wars – the first from 1955 to 1972 and the second, 1983 to 2005 – between the central government and the southern regions, which led to the independence of South Sudan in 2011, killed 1.5 million people, and a conflict in the western region of Darfur displaced two million people and killed more than 200,000 others.


=== War in Darfur and the formation of the RSF ===
By the turn of the 21st century, Sudan's western Darfur region had endured prolonged instability and s`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the War in Sudan (2023) conflict.`
      ),
  }),
};
const wagner_group_rebellion_tool = {
  name: "wagner_group_rebellion",
  description: `Conflict name: Wagner Group rebellion
*Part of the Russian invasion of Ukraine*
Start date: 2023
End date (if applicable): 2023

Description: Page: Wagner Group rebellion
Summary: On 23 June 2023, the Wagner Group, a Russian private military company, engaged in a major uprising against the Government of Russia. It marked the climax of the Wagner Group–Ministry of Defense conflict, which had begun about six months earlier. Russian oligarch Yevgeny Prigozhin, who had been leading Wagner Group activities in Ukraine, stood down after reaching an agreement a day later.
Amidst the Russian invasion of Ukraine, Prigozhin had come to publicly express his resentment towards Minister of Defence Sergei Shoigu and Chief of the General Staff Valery Gerasimov; he frequently blamed both men for Russia's military inadequacies, especially during the Wagner-led Battle of Bakhmut, and accused them of handing over "Russian territories" to the Ukrainians. He portrayed the Wagner Group's rebellion as his response to the Russian Armed Forces allegedly attacking and killing hundreds of his Wagner mercenaries, which the Russian government denied. Characterizing it as a "march of justice" against the Russian military establishment, he demanded that Shoigu and Gerasimov be removed from their positions, and eventually stated that Russia's justification for attacking Ukraine was a lie. In the early morning of 24 June, President of Russia Vladimir Putin appeared in a televised address to denounce the Wagner Group's actions as treason before pledging to quell their uprising.
Wagner mercenaries first seized Rostov-on-Don, where the Southern Military District is headquartered, while an armored column of theirs advanced through Voronezh Oblast and towards Moscow. Armed with mobile anti-aircraft systems, they repelled the Russian military's aerial attacks, which ultimately failed to deter the Wagner column's progress. Ground defenses were concentrated on the approach to Moscow, but before Wagner Group could reach them, President of Belarus Alexander Lukashenko brokered a settlement with Prigozhin, who subsequently agreed to halt the rebellion. In the late evening of 24 June, Wagner troops abandoned their push to Moscow and those who remained in Rostov-on-Don began withdrawing.
In accordance with Lukashenko's agreement, Russia's Federal Security Service, which had initiated a case to prosecute the Wagner Group for armed rebellion against the Russian state under Article 279 of the Criminal Code, dropped all charges against Prigozhin and his Wagner fighters on 27 June. By the end of the hostilities, at least thirteen Russian soldiers had been killed and several Wagner mercenaries had been injured; Prigozhin stated that two defectors from the Russian military had been killed on Wagner's side as well. On 23 August 2023, exactly two months after the rebellion, Prigozhin was killed in a plane crash alongside other senior Wagner officials.


== Background ==


=== Yevgeny Prigozhin and the Wagner Group ===

In the early 1990s, Prigozhin, having served a decade in prison before embarking on an entrepreneurial career, emerged as a prominent figure in Saint Petersburg's business life, gaining recognition for a string of highly regarded restaurants. This connection facilitated a financial association with Putin, who was actively engaged in municipal politics during that period. Prigozhin gradually evolved into a trusted and intimate confidant of Putin, forging a close personal bond.
In 2014, Prigozhin founded the Wagner Group, a Russian private military company. Despite the legal prohibition of private military companies in Russia, Wagner operated unimpeded with implicit endorsement and funding from the Russian government. Many analysts have said the government employed Wagner services to allow for plausible deniability and obscure the actual toll in terms of casualties and financial costs of Russia's foreign interventions.
Serving as a tool of Russian foreign and military policy, Wagner emerged as a formidable combat force in various regions, including the Donbas conflict. It played a significant role during Rus`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the Wagner Group rebellion
*Part of the Russian invasion of Ukraine* conflict.`
    ),
  }),
};
const _2023_azerbaijani_offensive_in_nagornokarabakh_tool = {
  name: "_2023_azerbaijani_offensive_in_nagornokarabakh",
  description: `Conflict name: 2023 Azerbaijani offensive in Nagorno-Karabakh
*Part of the Nagorno-Karabakh conflict*
Start date: 2023
End date (if applicable): 2023

Description: Page: 2023 Azerbaijani offensive in Nagorno-Karabakh
Summary: Between 19 and 20 September 2023, Azerbaijan launched a large-scale military offensive against the self-declared breakaway state of Artsakh, a move seen as a violation of the ceasefire agreement signed in the aftermath of the Second Nagorno-Karabakh War in 2020. The offensive took place in the disputed region of Nagorno-Karabakh, which is de jure a part of Azerbaijan, and was a de facto independent republic. The stated goal of the offensive was the complete disarmament and unconditional surrender of Artsakh, as well as the withdrawal of all ethnic Armenian soldiers present in the region. The offensive occurred in the midst of an escalating crisis caused by Azerbaijan blockading Artsakh, which has resulted in significant scarcities of essential supplies such as food, medicine, and other goods in the affected region.
One day after the offensive started on 20 September, a ceasefire agreement described as a written agreement for the surrender of Artsakh was reached at the mediation of the Russian peacekeeping contingent where it was agreed that the Artsakh Defence Army, the armed forces of Artsakh would be disarmed. Ceasefire violations by Azerbaijan were nonetheless reported by both Artsakhi residents and officials until early October. On 28 September, the president of Artsakh, Samvel Shahramanyan signed a decree to dissolve all state institutions by 1 January 2024, bringing the existence of the breakaway state to an end.
The offensive and subsequent surrender resulted in a flight of Nagorno-Karabakh Armenians, in which nearly the entire population of Nagorno-Karabakh fled the region for neighboring countries, primarily Armenia. Human rights organizations and experts in genocide prevention issued multiple alerts that the region's Armenian population was at risk or actively being subjected to ethnic cleansing and genocide, as well as war crimes and crimes against humanity. Luis Moreno Ocampo, the inaugural prosecutor of the International Criminal Court, has classified the ethnic cleansing of Nagorno-Karabakh Armenians as a second Armenian genocide, and opined that the inaction of the international community encouraged Azerbaijan to act with impunity.


== Background ==

The Nagorno-Karabakh conflict is an ethnic and territorial conflict between Armenia and Azerbaijan over the region of Nagorno-Karabakh, inhabited mostly by ethnic Armenians until the offensive. The Nagorno-Karabakh region was once entirely claimed by, and partially de facto controlled by the breakaway Republic of Artsakh, but is recognized internationally as part of Azerbaijan.
The conflict escalated in 1988, when the Karabakh Armenians demanded the transfer of the region from Soviet Azerbaijan to Soviet Armenia, triggering the First Nagorno-Karabakh War that ended in 1994 with Azerbaijan losing control of about 13.6% of its territory, including Nagorno-Karabakh, to Karabakh Armenians and the army of the Republic of Armenia. In 1993, the United Nations Security Council adopted four resolutions that supported the territorial integrity of Azerbaijan and demanded the immediate withdrawal of the occupying Armenian forces from Azerbaijan, which was reaffirmed by the 2008 United Nations General Assembly Resolution 62/243.
In late 2020, the large-scale Second Nagorno-Karabakh War resulted in thousands of casualties and a significant Azerbaijani victory. An armistice was established by a tripartite ceasefire agreement on 10 November, resulting in Armenia and Artsakh ceding the territories surrounding Nagorno-Karabakh as well as one-third of Nagorno-Karabakh itself to Azerbaijan Ceasefire violations in Nagorno-Karabakh and on the Armenian–Azerbaijani border occurred following the 2020 war, leading to several casualties.
Subsequent to the 2020 war, Azerbaijan rescinded its offer of granting special status and autonomy to its ethnic Armenian residents and insisted on their "integration" into Azerbaijan. Some intern`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2023 Azerbaijani offensive in Nagorno-Karabakh
*Part of the Nagorno-Karabakh conflict* conflict.`
    ),
  }),
};
const _2023_israelhamas_war_tool = {
  name: "_2023_israelhamas_war",
  description: `Conflict name: 2023 Israel–Hamas war
*Part of the Gaza–Israel conflict*
Start date: 2023
End date (if applicable): Ongoing

Description: Page: Israel–Hamas war
Summary: An armed conflict between Israel and Hamas-led Palestinian militant groups has been taking place in the Gaza Strip and Israel since 7 October 2023. The fifth war of the Gaza–Israel conflict since 2008, it has been the deadliest for Palestinians in the entire Israeli–Palestinian conflict, and the most significant military engagement in the region since the Yom Kippur War in 1973.
The war began when Hamas-led militant groups launched a surprise attack on Israel on 7 October, which involved a rocket barrage and a few thousand militants breaching the Gaza–Israel barrier and attacking Israeli civilian communities and military bases. During this attack, 1,139 Israelis and foreign nationals were killed, including 815 civilians. In addition, 251 Israelis and foreigners were taken captive into Gaza, with the stated goal to force Israel to release Palestinian prisoners. Hamas said its attack was in response to Israel's continued occupation, blockade of Gaza, and expansion of settlements, as well as alleged threats to the Al-Aqsa Mosque and the general plight of Palestinians. After clearing militants from its territory, Israel launched one of the most destructive bombing campaigns in modern history and invaded Gaza on 27 October with the stated objectives of destroying Hamas and freeing hostages.
Since the start of the Israeli invasion, the Gaza Health Ministry has stated more than 40,000 Palestinians in Gaza have been killed, of whom 52% of those identified were women and children. Israel's tightened blockade cut off basic necessities and attacks on infrastructure have caused healthcare collapse and an impending famine. By early 2024, Israeli forces had destroyed or damaged more than half of Gaza's houses, at least a third of its tree cover and farmland, most of its schools and universities, hundreds of cultural landmarks, and at least a dozen cemeteries. Nearly all of the strip's 2.3 million residents have been forcibly displaced. Over 100,000 Israelis remain internally displaced.
The war continues to have significant regional and international repercussions. Large, primarily pro-Palestinian protests have taken place across the world, calling for a ceasefire. The International Court of Justice is reviewing a case accusing Israel of committing genocide in Gaza. The United States has given Israel extensive military aid and vetoed multiple UN Security Council ceasefire resolutions. Meanwhile, the Axis of Resistance has engaged, with its groups attacking American military bases in the Middle East; the Yemeni Houthi movement attacking commercial ships allegedly linked to Israel, incurring a US-led military response; and the ongoing exchange of strikes between Lebanon's Hezbollah and Israel risking the eruption of another full-scale war.


== Background ==

The 1948 Palestine war saw the establishment of Israel over most of what had been Mandatory Palestine, with the exception of two separated territories that became known as the West Bank and the Gaza Strip, which were held by Jordan and Egypt respectively. Following the 1967 Six-Day War, Israel occupied the Palestinian territories of the West Bank and the Gaza Strip. The upcoming period witnessed two popular uprisings by Palestinians against the Israeli occupation; the First and Second Intifadas in 1987 and 2000 respectively, with the latter's end seeing Israel's unilateral withdrawal from Gaza in 2005.
Since 2007, the Gaza Strip has been governed by Hamas, an Islamist militant group, while the West Bank remained under the control of the Fatah-led Palestinian Authority. After Hamas' takeover, Israel imposed a blockade of the Gaza Strip, that significantly damaged its economy. The blockade was justified by Israel citing security concerns, but international rights groups have characterized the blockade as a form of collective punishment. Due to the Israeli blockade of the Gaza Strip, UNRWA reported that 81% of people were living below the poverty level in 2023`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2023 Israel–Hamas war
*Part of the Gaza–Israel conflict* conflict.`
    ),
  }),
};
const _2023_israellebanon_border_clashes_tool = {
  name: "_2023_israellebanon_border_clashes",
  description: `Conflict name: 2023 Israel–Lebanon border clashes
*Part of the Israeli–Lebanese conflict, and the spillover of the 2023 
Israel–Hamas war*
Start date: 2023
End date (if applicable): Ongoing

Description: Page: Israel–Hezbollah conflict (2023–present)
Summary: Exchange of strikes between Israel and Lebanese militant group Hezbollah have been occurring along the Israel–Lebanon border and in Syria and the Israeli-occupied Golan Heights since 8 October 2023. It is currently the largest escalation of the Hezbollah–Israel conflict to have occurred since the 2006 Lebanon War, and part of the spillover of the Israel-Hamas war.
On 8 October 2023, Hezbollah started firing guided rockets and artillery shells at Israeli positions in the occupied Shebaa Farms, which it said was in solidarity with Palestinians following the Hamas attack on Israel that took place a day earlier. Israel retaliated by launching drone strikes and artillery shells at Hezbollah positions near Lebanon's boundary with the Israeli-occupied Golan Heights. 
In northern Israel, the ongoing conflict has forced approximately 96,000 individuals to leave their homes, while in Lebanon, approximately 111,940 individuals have been displaced. Between 21 October 2023 and 20 February 2024 the United Nations Interim Force in Lebanon (UNIFIL) recorded an estimated 7,948 incidents of artillery fire from the south of the Blue Line (from Israel to Lebanon) and 978 incidents of artillery fire from the north side (from Lebanon to Israel).


== Background ==

Hezbollah is a Shiite militant organization that controls southern Lebanon and is supported and funded by Iran and reportedly serves as their proxy in regional wars. Elimination of the state of Israel has been a primary goal for Hezbollah, from its inception to the present. Hezbollah opposes the government and policies of the State of Israel, and Jewish civilians who arrived following 1948. Its 1985 manifesto reportedly states "our struggle will end only when this entity [Israel] is obliterated. We recognize no treaty with it, no ceasefire, and no peace agreements." Hezbollah has fought many conflicts with Israel including the South Lebanon conflict, the Shebaa Farms conflict, and the 2006 Lebanon War.
Since the 1948 Palestinian expulsion and flight, Palestinian refugees have had a presence in southern Lebanon and numerous refugee camps were established, which brought many Palestinian factions into south Lebanon, with it being often used as a center to launch rockets into northern Israel. The Palestine Liberation Organization was based in Lebanon after being expelled from Jordan they were involved in an insurgency until they were expelled to Tunis after the 1982 Lebanon War.
The outbreak of the Hamas-Israel war coincided with Hezbollah's declaration of support and praise for the Hamas attack on Israel, which took place on 7 October.  Exchanges of artillery and rocket fire in the disputed Shebaa Farms region occurred on 8 October.


=== April and July 2023 skirmishes ===

On 6 April 2023, in response to the 2023 Al-Aqsa clashes, dozens of rockets were fired from Lebanon into Israel, injuring three Israeli civilians. The Israel Defense Forces said that it intercepted 25 rockets fired from Lebanon, which it said were fired by Palestinian factions Hamas and PIJ with Hezbollah's approval.
The attacks were the largest escalation between the two countries since the 2006 Lebanon War. The United Nations Interim Force in Lebanon (UNIFIL) described the situation as "extremely serious" and urged restraint.
On 15 July, the IDF fired warning shots and used riot dispersal means at 18 people, including journalists and parliamentarians that crossed the border from Lebanon and walked 80 meters into Israeli-occupied territory.


== Events ==


=== Shebaa farms attack and response ===

In the morning of 8 October, Hezbollah fired rockets and shells at the Shebaa Farms region in support of Hamas' attack onto Israel; in response, the Israel Defense Forces (IDF) fired artillery shells and a drone into southern Lebanon. Two Lebanese children were reportedly injured by broken glass.
The next day, Israel exchanged a series of airstrikes on southern Lebanon n`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2023 Israel–Lebanon border clashes
*Part of the Israeli–Lebanese conflict, and the spillover of the 2023 
Israel–Hamas war* conflict.`
    ),
  }),
};
const _2023_americanmiddle_east_conflict_tool = {
  name: "_2023_americanmiddle_east_conflict",
  description: `Conflict name: 2023 American–Middle East conflict
*Spillover of the 2023 Israel–Hamas war*
Start date: 2023
End date (if applicable): Ongoing

Description: Page: Attacks on U.S. bases in Iraq, Jordan, and Syria during the Israel–Hamas war
Summary: Starting on 17 October 2023, and in response to United States support for Israel in the Israel–Hamas war, Iran-backed militias initiated a coordinated series of more than 170 attacks on U.S. military bases and assets in Syria, Iraq, and Jordan. These attacks resulted in injuries to dozens of U.S. service members. In retaliation, the U.S. has launched multiple counterattacks, resulting in the death of over 30 militants including a senior commander of the Nujaba Movement, Mushtaq Talib al-Saidi. In February 2024, following U.S. airstrikes in Iraq and Syria, militia attacks against U.S. forces were halted.


== Attacks ==


=== Iraq ===


==== Al-Asad air base ====
On 17 October 2023, amid the Israel–Hamas war, Iraqi militants launched a drone strike on al-Asad Airbase, a United States base in northern Iraq. The airstrike was intercepted. The next day, a false alarm in the airbase caused the death of a civilian contractor from cardiac arrest. On 20 October, the US ordered all non-emergency staff to leave their embassy in Baghdad and consulate in Erbil. 
On 20 November, eight US and coalition soldiers were injured from a ballistic missile attack, and there was minor infrastructural damage after the air base was attacked by a ballistic missile.
On 20 January 2024, the Islamic Resistance in Iraq claimed responsibility for striking the base with dozens of missiles which injured several US military personnel and an Iraqi service member. At 6:30 p.m. Baghdad time, the IRI launched multiple ballistic missiles and other rockets at the Al-Asad Airbase. The United States military attempted to defend the base with Patriot missiles. More than 15 MIM-104 Patriot missiles were launched to defend the base.
On August 5, 2024, a missile attack targeted the Al-Asad airbase in western Iraq, resulting in injuries to at least five US servicemembers and two contractors. The attack involved the firing of two Katyusha rockets, which landed inside the base. One of the injured servicemembers sustained serious injuries. The incident is seen as a potential escalation in the ongoing tensions between Iran and the United States.


==== Al-Harir air base ====
On 8 November 2023, an armed drone targeted al-Harir air base hosting U.S. forces in northern Iraq. On 25 December 2023, the Islamic Resistance in Iraq claimed responsibility for a drone attack on the base which injured three US soldiers, one being critical.


==== Other attacks in Iraq ====
On 9 November, US forces were struck three separate times in 24 hours, including drone strikes in Al-Asad Airbase and Al-Harir Air Base, as well as an IED attack on a patrol near the Mosul Dam.
On 18 January 2024, the Islamic Resistance of Iraq shot down a US MQ-9 Reaper drone after it took off from Kuwait near Muqdadiyah, Diyala Governorate.


=== Syria ===


==== Al-Tanf garrison ====

On 18 October 2023, a drone strike by an Iranian proxy on the al-Tanf garrison resulted in over 20 injuries. On 1 November, a minor drone strike was reported at the al-Tanf garrison.


==== Al-Omar field ====
On 4 February 2024, a drone struck a training ground in Al-Omar field in Deir ez-Zor, eastern Syria, which houses US troops, according to the Syrian Democratic Forces. Though no casualties were reported among US forces, at least seven Kurdish fighters were killed and 18 injured. The Islamic Resistance in Iraq claimed responsibility for the attack. The SDF condemned the attack, and said it had "every right to respond".


==== Other attacks in Syria ====
On 24 October 2023, the Islamic Resistance of Iraq claimed responsibility for multiple drone strikes on US bases in eastern Syria, notably al-Omar oil field in Deir ez-Zor Governorate and al-Shaddadi in the Al-Hasakah Governorate.
On 10 January 2024, the Islamic Resistance of Iraq claimed responsibility for an attack on Hemo base in north of Hasakah province. As a result of this attack, the U`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the 2023 American–Middle East conflict
*Spillover of the 2023 Israel–Hamas war* conflict.`
    ),
  }),
};
const _2024_ecuadorian_conflict_tool = {
  name: "_2024_ecuadorian_conflict",
  description: `Conflict name: 2024 Ecuadorian conflict
Start date: 2024
End date (if applicable): Ongoing

Description: Page: 2024 Ecuadorian conflict
Summary: On 9 January 2024, an armed conflict broke out in Ecuador involving the country's government against several organized crime groups, most notably the Los Choneros cartel.
Reports of armed attacks throughout Guayaquil and other parts of the country were widespread, occurring primarily in prisons, markets, roads, and universities. The large-scale attacks were a combination of responses to the escape of Los Choneros leader José Adolfo Macías Villamar in Guayaquil, and President Daniel Noboa declaring a state of emergency and then an internal state of war.


== Background ==

The homicide rate in Ecuador rose from 5 to 46 per 100,000 inhabitants between 2017 and 2023. According to political analyst Fernando Carrion, from the Latin American Faculty of Social Sciences, the turning point came when Lenín Moreno came into office in 2017. The new president embarked on a policy of austerity and the security apparatus was weakened by merging several ministries into a single one with a reduced budget. Expenditure on prison security was slashed by a third between 2017 and 2021, despite an increase in the prison population.
The deterioration in social indicators has also made it easier for gangs to recruit. While the poverty rate had fallen from 35% to 21% between 2007 and 2017, the combined effects of a reduction in public spending under the presidencies of Moreno and Guillermo Lasso and the COVID-19 pandemic have pushed it back up to 27% in 2023. Unemployment and the lack of study grants mean that a third of young people aged between 15 and 25, mostly from disadvantaged backgrounds, are neither studying nor working, making them vulnerable to recruitment by criminal groups.
Geographically, Ecuador is located between Colombia and Peru, the two main cocaine producing countries in the world. It also possesses the port of Guayaquil, an important gateway that suffers from poor oversight by Ecuadorian authorities. Until 2016, the Revolutionary Armed Forces of Colombia (FARC) controlled cocaine trafficking operations between Colombia and Ecuador. Following a peace agreement between FARC and the Colombian government that year which led to the former withdrawing from main cocaine producing areas, some dissident FARC members founded their own drug gangs. Due to better control of the Colombian government over transportation hubs, drug trafficking from Colombia decreased and its operations moved to Ecuador.
According to Vox, the lower demand for cocaine in the United States alongside the Colombian peace process created a power vacuum that saw Albanian, Mexican and Venezuelan criminal groups attempt to control drug trafficking routes out of Ecuador. Former interior minister and head of the National Police of Peru, Eduardo Pérez Rocha, said after the conflict began that the increased violence in Ecuador was due to the presence of the international Venezuelan gang Tren de Aragua, resulting with a higher intensity of criminal activity. Since 2018, Ecuador has faced a historic wave of violence as the country has become a critical cocaine transit point, and organized crime groups compete for control of drug routes and prisons. Hundreds of prison inmates have been killed in prison fights.
In 2019 massive riots broke out in response to austerity measures. On 10 October, the capital Quito was overrun by the protesters forcing president Moreno to relocate the government to Guayaquil. Returning the fuel subsidies ended these clashes.
On 2 November 2022 President Guillermo Lasso declared a state of emergency in the provinces of Guayas and Esmeraldas for the next 45 days following the killings of five police officers and the abduction of several prison guards by organized crime members.


== Escape of gang leaders ==
On 7 January 2024, Los Choneros leader José Adolfo Macías Villamar escaped from prison in Guayaquil on the day of his scheduled transfer to a maximum-security prison. The events were reported the next day by auth`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2024 Ecuadorian conflict conflict.`
      ),
  }),
};
const dongo_conflict_tool = {
  name: "dongo_conflict",
  description: `Conflict name: Dongo conflict
Start date: 2009
End date (if applicable): 2009

Description: Page: Dongo conflict
Summary: The Dongo conflict was a minor conflict centered in the town of Dongo, on the left bank of the Ubangi River in Sud-Ubangi District, Democratic Republic of the Congo. Violence initially broke out in late October 2009 after a local dispute over fishing rights. This destabilised the region and led to a spiral of violence, and an exodus of civilians attempting to flee from the fighting. By December 2009, this conflict was one of the biggest conflicts of the United Nations Mission in the Democratic Republic of Congo (MONUC) and the United Nations; more than 168,000 people had fled their homes, many of them crossing into the neighbouring Republic of the Congo. An intervention by the Congolese army and MONUC brought the conflict to an end by 13 December 2009.


== Violence ==


=== Initial attacks ===
Dongo is a small town on the Ubangi River in the Democratic Republic of the Congo on its frontier with the Republic of the Congo. The conflict at Dongo began in July 2009 with a dispute over the ownership of fish ponds claimed by people from Enyele and Monzaya villages which had been disputed since 1946. In the confrontation, seven policemen were killed and ethnic tensions increased. By 5 November 2009 at least 16,000 civilians had fled to the neighbouring Republic of the Congo (ROC) and Dongo had become a ghost town.


=== Escalation ===
Further to the south, in Saba-Saba and in the Bomboma area, new fighting started on 17 November and the residents and the refugees from Dongo had to flee. The refugees included members of the Congolese navy, which patrols the Ubangi River; they had to flee with their families because they had neither weapons nor ammunition to protect themselves. More clashes occurred in the village of Buburo on 20 November. Although the inhabitants had already fled, the attackers destroyed the houses there, including the UNHCR offices, which had also earlier evacuated its staff. By 30 November 2009 more than 70,000 people had been displaced. About half of the displaced remained in DRC, taking temporary shelter in locations such as Kungu, Bokonzi, Bomboma and Bonzene. The rest of the displaced crossed the Ubangi River into ROC.
The unrest was led by an animist priest called Udjani whose followers apparently included former members of the Movement for the Liberation of Congo led by Jean-Pierre Bemba which fought the Congolese government during the Second Congo War (1998–2003). Udjani's supporters patrolled the Ubangi river, shooting at barges filled with people trying to escape.
 By 10 December the conflict had left 100 dead and forced 115,000 people to flee their homes, two thirds of them into the Republic of the Congo, according to the UNHCR. Amid growing violence, the creation of an anti-government rebel group called the "Resistance Patriots of Dongo" (Patriotes-Résistants de Dongo) was declared by Ambroise Lobala Mokobe but appears to have had little presence on the ground.
The United Nations Mission in the Democratic Republic of Congo (MONUC) rushed peacekeeping troops to Dongo in an effort to protect the local population. First peace keepers to reach Dongo were a MILOB team led by Maj Sankha Jayamaha (Sri Lanka Army) from Gemina team site with some Ghana peace keepers to provide real time information and to compromise the prevailing situation. Peace keepers were able to reached to Dongo and also were able to facilitate UN official to reach Dongo by heli by making favorable and safe atmosphere. after some days a MONUC helicopter that was restocking the 20 troops stationed came under gunfire from armed men. The helicopter crew, all of Russian nationality, evacuated 25 people, including five injured people who were taken to Brazzaville for emergency medical treatment.


=== Recapture of Dongo ===
The Congolese army (FARDC) recaptured Dongo on 13 December. According to the Congolese press among the rebels who had captured several towns in the area were former soldiers of the Congolese army`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the Dongo conflict conflict.`
      ),
  }),
};
const november_2019_gazaisrael_clashes_tool = {
  name: "november_2019_gazaisrael_clashes",
  description: `Conflict name: November 2019 Gaza-Israel clashes

*Part of the Gaza–Israel conflict*
Start date: 2019
End date (if applicable): 2019

Description: Page: November 2019 Gaza–Israel clashes
Summary: The Gaza–Israel clashes (November 2019) code-named by Israel as Operation Black Belt (Hebrew: מבצע חגורה שחורה), took place between the Israel Defense Forces (IDF) and Palestinian Islamic Jihad (PIJ) following the targeted killing of senior PIJ commander Baha Abu al-Ata in Gaza, and the attempted killing of senior PIJ commander Akram al-Ajouri in Damascus, Syria by the IDF. PIJ responded with rocket fire into Israel, including long-range rockets fired towards Tel Aviv, leading to several civilians being wounded. In response to the rocket fire, Israel carried out airstrikes and artillery shelling in the Gaza Strip, killing and wounding several militants as well as civilians.
A ceasefire went into effect after 48 hours of clashes, though it was breached by some Palestinian militants.


== Background ==


=== Palestinian Islamic Jihad and Baha Abu al-Ata ===
Palestinian Islamic Jihad is the second-largest militant group in Gaza after Hamas – the ruling military and political party. PIJ had financial problems in the year prior to the clashes. The group is funded by Iran, but these funds are reportedly insufficient and the leadership struggles to pay salaries to group members. In 2018 Ziyad al-Nakhalah was appointed leader of PIJ after his predecessor resigned due to bad health. Iran had put pressure on PIJ not to appoint Mohammed al-Hindi as Nakhalah's second-in-command because he wanted the group to form ties with more parties such as Turkey, Qatar and Egypt. Although he was not appointed as a deputy, he is regarded as such. Instead, Akram al-Ajouri, who was also a target of an Israeli attempted assassination on 12 November, was appointed. Within these power struggles in the group, Baha Abu al-Ata, the main target of the Israeli attack, stands out as a separatist. He is the commander of the PIJ's northern sector of the Gaza Strip and held responsible by Israel for rocket attacks on Israel.


=== Israel–Hamas talks ===
The clashes erupted during a time of talks between Israel and Hamas, the military and political leader of the Gaza Strip, on a future settlement to the conflict between the two. In the second half of October 2019, an envoy of the PIJ officials, headed by PIJ leader Al-Nakhalah, was invited to the Egyptian capital to discuss the future calm with Israel. Officials from abroad and from Gaza, including Abu al-Ata, whose killing sparked the November clashes, were invited. Egypt had made attempts to invite members of both the military and political branches of the group, in sight of its internal disputes. The PIJ officials reported that the talks were good and planted roots for further cooperation with Hamas and between both groups and Egypt for the sake of an agreement with Israel. The Egyptian government had made a gesture for the group when it released 25 imprisoned members of the group and let them return to Gaza, a move that was coordinated with Israel.
Ten days after the talks the PIJ fired rockets on Israeli communities near Gaza. Hamas and Egypt were angered with this act. This caused disagreements among the Egyptian side on the future of ties with the PIJ. Egypt also threatened to stop the mediation with Israel if Hamas could not restrain the PIJ. Israel held Abu al-Ata responsible for the rocket attacks.


=== Targeted killing of Baha Abu al-Ata ===
Before dawn on 12 November, the Israeli Air Force carried out a targeted killing airstrike on Baha Abu al-Ata in Gaza. The airstrike struck the top floor of an apartment building where he was sleeping, killing him and his wife. Two other people were injured. Simultaneously, Syrian state media stated that Israel had fired 3 missiles at a house in Damascus, targeting Akram al-Ajouri. The strikes failed to kill al-Ajouri, but 2 people including his son were killed and 6 others injured. Later that day, Israel confirmed the strike on al-Ata, saying that he was responsible for several attacks on Israel during 2019, including`,
  schema: z.object({
    question: z.string().describe(
      `The question to ask in regards to the November 2019 Gaza-Israel clashes

*Part of the Gaza–Israel conflict* conflict.`
    ),
  }),
};
const _2024_iranpakistan_border_skirmishes_tool = {
  name: "_2024_iranpakistan_border_skirmishes",
  description: `Conflict name: 2024 Iran-Pakistan border skirmishes
Start date: 2024
End date (if applicable): 2024

Description: Page: 2024 Iran–Pakistan border skirmishes
Summary: On 16 January 2024, Iran conducted a series of missile strikes in Pakistan, asserting that it had targeted militants of the Baloch separatist group Jaish ul-Adl in the Pakistani province of Balochistan. This attack occurred one day after a similar series of Iranian missile strikes in Iraq and Syria, which the Iranian government had stated were in response to the Kerman bombings by the Islamic State on 3 January. Pakistan's government condemned the strikes as an "unprovoked violation" of Pakistani airspace and stated that two children had been killed.
Two days later, on 18 January, Pakistan conducted a retaliatory series of missile strikes in Iran, asserting that it had targeted militants of the Balochistan Liberation Army and the Balochistan Liberation Front in the Iranian province of Sistan and Baluchestan. Iran's government condemned the strikes and stated that nine people had been killed, including four children. Pakistani airstrikes marked the first known instance of foreign country launching attacks on Iranian soil since the end of Iran-Iraq war 1988.
Communicating through diplomatic channels on 19 January, both countries agreed to de-escalate and cooperate along the Iran–Pakistan border. Pakistan recalled the Iranian ambassador to Islamabad and reinstated the Pakistani ambassador in Tehran.
Foreign Minister of Iran Hossein Amir-Abdollahian visited Pakistan on 29 January 2024 at the invitation of Foreign Minister Jalil Abbas Jilani in a push to diffuse the standoff.


== Background ==


=== Iran–Pakistan border ===

The Iran–Pakistan border, spanning across Iran's Sistan and Baluchestan and Pakistan's Balochistan, faces significant challenges due to its high porosity, making it susceptible to extensive smuggling and terrorist activities, primarily orchestrated by Baloch insurgents. Despite maintaining a generally positive relationship, both countries have consistently accused each other of harboring terrorists and falling short in ensuring security on their respective sides of the border. These concerns prompted the establishment of the Iran–Pakistan border barrier, with construction commencing on the Iranian fortifications in 2011 and on the Pakistani fortifications in 2019.


=== Iranian missile strikes in Iraq and Syria ===

On 15 January 2024, Iran launched a barrage of 15 missiles directed at Iraq and Syria. Erbil, the capital of the Kurdistan Region, suffered most from the assault, with all but four missiles hitting the city. The remaining four struck Syria's Idlib Governorate, specifically targeting areas under the control of the Syrian opposition.
The Iranian government asserted that it aimed to strike Israel in Iraq by destroying the regional headquarters of Mossad. However, both the Iraqi government and the autonomous Kurdish government refuted this claim and condemned the attack. The Iranian missile attack occurred almost two weeks after the Kerman bombings, for which the Islamic State claimed responsibility.


== Iranian missile strikes in Pakistan ==

After conducting airstrikes in Iraq and Syria, the Islamic Revolutionary Guard Corps (IRGC) of Iran targeted Koh-e-Sabz, a locality in the Panjgur District of Pakistan's Balochistan province, which resulted in the death of two Pakistani children. Pakistan swiftly denounced the attack, taking diplomatic measures by expelling the Iranian ambassador from Islamabad, recalling its own ambassador from Tehran, and issuing a stern warning to Iran regarding potential retaliatory actions.
Iran justified its actions by claiming that it had aimed at Jaish ul-Adl, a Baloch insurgent group involved in the Sistan and Baluchestan insurgency. This group had previously claimed responsibility for the 2019 Khash–Zahedan suicide bombing that targeted the IRGC.


== Pakistani strikes in Iran ==

On 18 January, In a tit for tat move, Pakistan launched a retaliatory strike, codenamed Operation Marg Bar Sarmachar, carried out by the Pa`,
  schema: z.object({
    question: z
      .string()
      .describe(
        `The question to ask in regards to the 2024 Iran-Pakistan border skirmishes conflict.`
      ),
  }),
};
export const ALL_TOOLS = [
  war_in_darfur_tool,
  iraq_war_tool,
  sinaloa_cartelgulf_cartel_conflict_tool,
  south_thailand_insurgency_tool,
  insurgency_in_khyber_pakhtunkhwa_tool,
  iranpjak_conflict_tool,
  conflict_in_the_niger_delta_tool,
  kivu_conflict_tool,
  houthi_insurgency_in_yemen_tool,
  central_african_republic_bush_war_tool,
  sistan_and_baluchestan_insurgency_tool,
  _2005_bangladesh_india_border_clash_tool,
  insurgency_in_paraguay_tool,
  chadian_civil_war_20052010_tool,
  mount_elgon_insurgency_tool,
  fatahhamas_conflict_tool,
  iraqi_civil_war_tool,
  operation_astute_tool,
  bakassi_conflict_tool,
  _2006_lebanon_war_tool,
  eelam_war_iv_tool,
  mexican_drug_war_tool,
  war_in_somalia_200609_tool,
  operation_juniper_shield_tool,
  tuareg_rebellion_200709_tool,
  _2007_lebanon_conflict_tool,
  hamas_takeover_of_gaza_tool,
  war_in_ingushetia_tool,
  _2008_invasion_of_anjouan_tool,
  _2008_lebanon_conflict_tool,
  djiboutianeritrean_border_conflict_tool,
  cambodianthai_border_dispute_tool,
  _2008_bangladesh_india_border_clash_tool,
  russogeorgian_war_tool,
  _2008_kufra_conflict_tool,
  gaza_war_tool,
  somali_civil_war_2009present_tool,
  sudanese_nomadic_conflicts_tool,
  insurgency_in_the_north_caucasus_tool,
  _2009_peruvian_political_crisis_tool,
  boko_haram_insurgency_tool,
  _2009_boko_haram_uprising_tool,
  south_yemen_insurgency_tool,
  operation_scorched_earth_tool,
  _2010_south_kyrgyzstan_ethnic_clashes_tool,
  _2010_kingston_unrest_tool,
  tajikistan_insurgency_tool,
  second_ivorian_civil_war_tool,
  sinai_insurgency_tool,
  shia_insurgency_in_bahrain_tool,
  first_libyan_civil_war_tool,
  syrian_civil_war_tool,
  sudanese_conflict_in_south_kordofan_and_blue_nile_tool,
  syrian_civil_war_spillover_in_lebanon_tool,
  ethnic_violence_in_south_sudan_2011present_tool,
  operation_linda_nchi_tool,
  factional_violence_in_libya_201114_tool,
  iraqi_insurgency_20112013_tool,
  mali_war_tool,
  heglig_crisis_tool,
  m23_rebellion_tool,
  _2012_abyan_offensive_tool,
  baragoi_clashes_tool,
  central_african_republic_civil_war_tool,
  lahad_datu_standoff_tool,
  batwaluba_clashes_tool,
  renamo_insurgency_20132021_tool,
  zamboanga_city_crisis_tool,
  south_sudanese_civil_war_tool,
  war_in_iraq_20132017_tool,
  russoukrainian_waroutline_tool,
  _2014_aswan_tribal_clashes_tool,
  second_libyan_civil_war_tool,
  war_against_the_islamic_state_tool,
  _2014_gaza_war_tool,
  yemeni_civil_war_2014present_tool,
  houthi_takeover_in_yemen_tool,
  islamic_state_insurgency_in_tunisia_tool,
  kurdishturkish_conflict_2015present_tool,
  _2016_niger_delta_conflict_tool,
  _2016_nagornokarabakh_conflict_tool,
  pool_war_tool,
  kamwina_nsapu_rebellion_tool,
  conflict_in_rakhine_state_tool,
  kasese_clashes_tool,
  insurgency_in_northern_chad_tool,
  _2017_afghanistanpakistan_border_skirmish_tool,
  _20172020_qatif_unrest_tool,
  marawi_crisis_tool,
  anglophone_crisis_tool,
  insurgency_in_cabo_delgado_tool,
  _2017_iraqikurdish_conflict_tool,
  islamic_state_insurgency_in_iraq_2017present_tool,
  catatumbo_campaign_tool,
  _2018_armenianazerbaijani_clashes_tool,
  november_2018_gazaisrael_clashes_tool,
  _2019_indiapakistan_border_skirmishes_tool,
  may_2019_gazaisrael_clashes_tool,
  benishangulgumuz_conflict_tool,
  _20202021_chinaindia_skirmishes_tool,
  western_togoland_rebellion_tool,
  second_nagornokarabakh_war_tool,
  afarsomali_clashes_tool,
  tigray_war_tool,
  western_saharan_clashes_2020present_tool,
  _20202022_ethiopiansudanese_clashes_tool,
  insurgency_in_southeastern_nigeria_tool,
  _2021_kyrgyzstantajikistan_clashes_tool,
  myanmar_civil_war_2021present_tool,
  _2021_israelpalestine_crisis_tool,
  armeniaazerbaijan_border_crisis_tool,
  republican_insurgency_in_afghanistan_tool,
  _2021_afghanistaniran_clashes_tool,
  russian_invasion_of_ukraine_tool,
  m23_offensive_tool,
  _2022_alshabaab_invasion_of_ethiopia_tool,
  _2022_gazaisrael_clashes_tool,
  _2022_armenianazerbaijani_clashes_tool,
  _2022_kyrgyzstantajikistan_clashes_tool,
  _2023_las_anod_conflict_tool,
  war_in_amhara_tool,
  _2023_afghanistaniran_clash_tool,
  war_in_sudan_2023_tool,
  wagner_group_rebellion_tool,
  _2023_azerbaijani_offensive_in_nagornokarabakh_tool,
  _2023_israelhamas_war_tool,
  // OpenAI only allows 128 tools, so we have to comment out some of them
  // _2023_israellebanon_border_clashes_tool,
  // _2023_americanmiddle_east_conflict_tool,
  // _2024_ecuadorian_conflict_tool,
  // dongo_conflict_tool,
  // november_2019_gazaisrael_clashes_tool,
  // _2024_iranpakistan_border_skirmishes_tool,
];
