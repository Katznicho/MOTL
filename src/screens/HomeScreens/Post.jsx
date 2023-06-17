// import * as React from "react";
// import { StyleSheet, View, Text, Pressable,Image,ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Posts = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.motlHomePosts}>
//       <View style={styles.motlHomePostsChild} />

//       <Image
//         style={[styles.blending1685112329194Icon, styles.iconLayout7]}
//         contentFit="cover"
//         source={require("../../assets/blending-16851123291941.png")}
//       />
//       <Image
//         style={[
//           styles.blending1485149163Icon,
//           styles.motlHomePostsItemPosition,
//         ]}
//         contentFit="cover"
//         source={require("../../assets/blending-16851123291941.png")}
//       />

//       <View
//         style={[styles.motlHomePostsItem, styles.motlHomePostsItemPosition]}
//       />

//       <View style={[styles.motlHomePostsInner, styles.rectangleParentLayout1]}>

//         <View style={[styles.rectangleParent, styles.rectangleParentLayout1]}>
//           <View style={[styles.instanceChild, styles.childShadowBox]} />
//           <View style={styles.instanceItem} />
//           <View style={[styles.instanceInner, styles.instanceInnerShadowBox]} />
//           <View style={[styles.rectangleView, styles.instanceInnerShadowBox]} />
//           <View
//             style={[styles.whatsLatestParent, styles.whatsLatestParentLayout]}
//           >
//             <Text style={[styles.whatsLatest, styles.whatsTypo]}>
//               WHAT’S LATEST ONE
//             </Text>
//             <Image
//               style={[styles.iconFilter, styles.iconGroupLayout]}
//               contentFit="cover"
//               source={require("../../assets/-icon-filter1.png")}
//             />
//           </View>
//           <View style={styles.whatsLatestGroup}>
//             <Text style={[styles.whatsLatest1, styles.whatsTypo]}>
//               MUST SEE MOMENTS
//             </Text>
//             <Image
//               style={[styles.iconFilter1, styles.iconLayout6]}
//               contentFit="cover"
//               source={require("../../assets/-icon-filter2.png")}
//             />
//           </View>
//           <Image
//             style={[styles.ellipseIcon, styles.ellipseIconLayout]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-217.png")}
//           />
//           <Image
//             style={[styles.instanceChild1, styles.ellipseIconLayout]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-218.png")}
//           />
//           <View style={styles.instanceChildPosition11} />
//           <View style={styles.instanceChildPosition10} />
//           <View
//             style={[styles.instanceChild4, styles.instanceChildPosition9]}
//           />
//           <View style={styles.instanceChildPosition11} />
//           <View style={styles.instanceChildPosition10} />
//           <View style={[styles.instanceChild7, styles.childBg]} />
//           <View style={[styles.instanceChild8, styles.image1589IconPosition]} />
//           <View style={[styles.instanceChild9, styles.image1590IconPosition]} />
//           <View
//             style={[styles.instanceChild10, styles.image1591IconPosition]}
//           />
//           <Image
//             style={[styles.image1586Icon, styles.iconPosition3]}
//             contentFit="cover"
//             source={require("../../assets/image-1586.png")}
//           />
//           <Image
//             style={[styles.image1587Icon, styles.iconPosition3]}
//             contentFit="cover"
//             source={require("../../assets/image-1586.png")}
//           />
//           <Image
//             style={[styles.image1588Icon, styles.iconPosition3]}
//             contentFit="cover"
//             source={require("../../assets/image-1588.png")}
//           />
//           <Image
//             style={[styles.image1589Icon, styles.image1589IconPosition]}
//             contentFit="cover"
//             source={require("../../assets/image-1589.png")}
//           />
//           <Image
//             style={[styles.image1590Icon, styles.image1590IconPosition]}
//             contentFit="cover"
//             source={require("../../assets/image-1589.png")}
//           />
//           <Image
//             style={[styles.image1591Icon, styles.image1591IconPosition]}
//             contentFit="cover"
//             source={require("../../assets/image-1589.png")}
//           />
//           <Text style={[styles.matchOfThe, styles.motlLayout]}>
//             MATCH OF THE DAY GOES TO BERUGA FC Vs OLYMPIACOS FC.
//           </Text>
//           <Text style={[styles.berugaFcTeam, styles.motlLayout]}>
//             BERUGA FC TEAM TALK DID THE MAGIC, CAME FROM BEHIND TO WIN!
//           </Text>
//           <Text style={[styles.matchHighlightsBeruga, styles.motlLayout]}>
//             MATCH HIGHLIGHTS: BERUGA FC Vs OLYMPIACOS FC.
//           </Text>
//           <Text style={[styles.predictAndWin, styles.motlLayout]}>
//             PREDICT AND WIN BERUGA FC VS OLYMPIACOS FC.
//           </Text>
//           <Text style={[styles.leagueQuiz, styles.motlLayout]}>
//             LEAGUE QUIZ - MOTL DEBUT SEASON FACTS
//           </Text>
//           <Text style={[styles.motlEndOf, styles.motlLayout]}>
//             MOTL END OF YEAR MEET AND GREET TICKETS
//           </Text>

//           <View style={[styles.instanceChild11, styles.instanceChildBg]} />
//           <View style={[styles.instanceChild12, styles.instanceChildBg]} />
//           <View style={[styles.instanceChild13, styles.instanceChildBg]} />
//           <View style={[styles.instanceChild14, styles.instanceChildBg]} />
//           <View style={[styles.instanceChild15, styles.instanceChildBg]} />
//           <View style={[styles.instanceChild16, styles.instanceChildBg]} />
//           <Text style={[styles.likes, styles.likesTypo]}>
//             <Text style={styles.textTypo}>300</Text>
//             <Text style={styles.text1}>{` `}</Text>
//             <Text style={styles.likes1Typo}>Likes</Text>
//           </Text>
//           <Text style={[styles.likes2, styles.likes2Position]}>
//             <Text style={styles.textTypo}>210</Text>
//             <Text style={styles.text1}>{` `}</Text>
//             <Text style={styles.likes1Typo}>Likes</Text>
//           </Text>
//           <Text style={[styles.likes1kContainer, styles.comments4Position]}>
//             <Text style={styles.textTypo}>75</Text>
//             <Text style={styles.text1}>{` `}</Text>
//             <Text style={styles.likes1Typo}>Likes + 1K Views</Text>
//           </Text>
//           <Text style={[styles.like, styles.likeTypo]}>Like</Text>
//           <Text style={[styles.like1, styles.likeTypo]}>Like</Text>
//           <Text style={[styles.like2, styles.likeTypo]}>Like</Text>
//           <Text style={[styles.comment, styles.commentTypo]}>Comment</Text>
//           <Text style={[styles.comment1, styles.commentTypo]}>Comment</Text>
//           <Text style={[styles.comment2, styles.commentTypo]}>Comment</Text>
//           <Text style={[styles.share, styles.shareTypo]}>Share</Text>
//           <Text style={[styles.share1, styles.shareTypo]}>Share</Text>
//           <Text style={[styles.share2, styles.shareTypo]}>Share</Text>
//           <Text style={[styles.comments, styles.commentsPosition]}>
//             <Text style={styles.textTypo}>25</Text>
//             <Text style={styles.text1}>{` `}</Text>
//             <Text style={styles.likes1Typo}>Comments</Text>
//           </Text>
//           <Text style={[styles.comments2, styles.commentsPosition]}>
//             <Text style={styles.textTypo}>30</Text>
//             <Text style={styles.text1}>{` `}</Text>
//             <Text style={styles.likes1Typo}>Comments</Text>
//           </Text>
//           <Text style={[styles.comments4, styles.commentsPosition]}>
//             <Text style={styles.textTypo}>90</Text>
//             <Text style={styles.text1}>{` `}</Text>
//             <Text style={styles.likes1Typo}>Comments</Text>
//           </Text>
//           <View style={[styles.lineView, styles.instanceChildPosition7]} />
//           <View
//             style={[styles.instanceChild17, styles.instanceChildPosition7]}
//           />
//           <View
//             style={[styles.instanceChild18, styles.instanceChildPosition7]}
//           />
//           <View
//             style={[styles.instanceChild19, styles.instanceChildPosition6]}
//           />
//           <View
//             style={[styles.instanceChild20, styles.instanceChildPosition6]}
//           />
//           <View style={styles.instanceChild21} />
//           <Image
//             style={[styles.instanceChild22, styles.instanceChildLayout4]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-219.png")}
//           />
//           <Image
//             style={[styles.instanceChild23, styles.instanceChildPosition3]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-219.png")}
//           />
//           <Image
//             style={[styles.instanceChild24, styles.instanceChildPosition2]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-219.png")}
//           />
//           <Image
//             style={[styles.instanceChild25, styles.instanceChildLayout3]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-222.png")}
//           />
//           <Image
//             style={[styles.instanceChild26, styles.instanceChildLayout3]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-222.png")}
//           />
//           <Image
//             style={[styles.instanceChild27, styles.instanceChildLayout3]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-222.png")}
//           />
//           <Image
//             style={[styles.instanceChild28, styles.instanceChildLayout2]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-225.png")}
//           />
//           <Image
//             style={[styles.instanceChild29, styles.instanceChildLayout2]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-225.png")}
//           />
//           <Image
//             style={[styles.instanceChild30, styles.instanceChildLayout2]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-225.png")}
//           />
//           <Image
//             style={[styles.instanceChild31, styles.instanceChildLayout1]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-228.png")}
//           />
//           <Image
//             style={[styles.instanceChild32, styles.instanceChildLayout1]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-228.png")}
//           />
//           <Image
//             style={[styles.instanceChild33, styles.instanceChildLayout1]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-228.png")}
//           />
//           <View style={[styles.ellipseParent, styles.ellipsePosition]}>
//             <Image
//               style={[styles.groupChild, styles.childIconPosition]}
//               contentFit="cover"
//               source={require("../../assets/ellipse-129.png")}
//             />
//             <Text style={[styles.text12, styles.text12Typo]}>+50</Text>
//           </View>
//           <View style={[styles.ellipseGroup, styles.ellipsePosition]}>
//             <Image
//               style={[styles.groupChild, styles.childIconPosition]}
//               contentFit="cover"
//               source={require("../../assets/ellipse-129.png")}
//             />
//             <Text style={[styles.text12, styles.text12Typo]}>+50</Text>
//           </View>
//           <View style={[styles.ellipseContainer, styles.ellipsePosition]}>
//             <Image
//               style={[styles.groupChild, styles.childIconPosition]}
//               contentFit="cover"
//               source={require("../../assets/ellipse-129.png")}
//             />
//             <Text style={[styles.text12, styles.text12Typo]}>+50</Text>
//           </View>
//           <Image
//             style={[styles.image1592Icon, styles.iconPosition2]}
//             contentFit="cover"
//             source={require("../../assets/image-1592.png")}
//           />
//           <Image
//             style={[styles.image1593Icon, styles.iconPosition2]}
//             contentFit="cover"
//             source={require("../../assets/image-1592.png")}
//           />
//           <View
//             style={[styles.image1342Parent, styles.image1342ParentPosition]}
//           >
//             <Image
//               style={[styles.image1342Icon, styles.iconGroupLayout]}
//               contentFit="cover"
//               source={require("../../assets/image-1342.png")}
//             />
//             <Image
//               style={[styles.image1336Icon, styles.childIconPosition]}
//               contentFit="cover"
//               source={require("../../assets/image-1336.png")}
//             />
//           </View>
//           <View style={[styles.image1342Group, styles.image1342ParentPosition]}>
//             <Image
//               style={[styles.image1342Icon, styles.iconGroupLayout]}
//               contentFit="cover"
//               source={require("../../assets/image-1342.png")}
//             />
//             <Image
//               style={[styles.image1336Icon, styles.childIconPosition]}
//               contentFit="cover"
//               source={require("../../assets/image-1336.png")}
//             />
//           </View>
//           <Image
//             style={[styles.image1594Icon, styles.iconPosition2]}
//             contentFit="cover"
//             source={require("../../assets/image-1594.png")}
//           />
//           <Image
//             style={[styles.groupIcon, styles.iconGroupLayout]}
//             contentFit="cover"
//             source={require("../../assets/group-2698.png")}
//           />
//           <View
//             style={[styles.image1345Parent, styles.image1342ParentPosition]}
//           >
//             <Image
//               style={[styles.image1345Icon, styles.iconGroupLayout]}
//               contentFit="cover"
//               source={require("../../assets/image-1345.png")}
//             />
//             <Image
//               style={[styles.image1336Icon, styles.childIconPosition]}
//               contentFit="cover"
//               source={require("../../assets/image-1336.png")}
//             />
//           </View>
//           <Text style={[styles.remaining, styles.remainingTypo]}>
//             20:40 Remaining
//           </Text>
//           <Text style={[styles.remaining1, styles.remainingTypo]}>
//             20:40 Remaining
//           </Text>
//           <Text style={[styles.thJuly2023, styles.remainingTypo]}>
//             12TH JULY 2023
//           </Text>
//           <View
//             style={[styles.instanceChild34, styles.instanceChildShadowBox]}
//           />
//           <View
//             style={[styles.instanceChild35, styles.instanceChildShadowBox]}
//           />
//           <View
//             style={[styles.instanceChild36, styles.instanceChildShadowBox]}
//           />
//           <Text style={[styles.predictNow, styles.nowTypo]}>Predict Now!</Text>
//           <Text style={[styles.takeQuizNow, styles.nowTypo]}>
//             Take Quiz Now!
//           </Text>
//           <Text style={[styles.ticketsOnSale, styles.nowTypo]}>
//             TICKETS ON SALE HERE!
//           </Text>
//           <View style={[styles.instanceChild37, styles.instanceChildLayout]} />
//           <View style={[styles.instanceChild38, styles.instanceChildLayout]} />
//           <Image
//             style={[styles.iconChat, styles.iconLayout2]}
//             contentFit="cover"
//             source={require("../../assets/-icon-chat.png")}
//           />
//           <Image
//             style={[styles.iconChat1, styles.iconLayout2]}
//             contentFit="cover"
//             source={require("../../assets/-icon-chat.png")}
//           />
//           <Image
//             style={[styles.iconChat2, styles.iconLayout2]}
//             contentFit="cover"
//             source={require("../../assets/-icon-chat1.png")}
//           />
//           <View style={styles.instanceParent}>
//             <View style={[styles.rectangleGroup, styles.groupLayout]}>
//               <Image
//                 style={[styles.rectangleIcon, styles.childIconPosition]}
//                 contentFit="cover"
//                 source={require("../../assets/rectangle-1228.png")}
//               />
//               <Text style={[styles.matchdayPhotosBeruga, styles.matchdayTypo]}>
//                 Matchday photos: BERUGA FC VS Olympiacos FC
//               </Text>
//             </View>
//             <View style={[styles.rectangleContainer, styles.groupLayout]}>
//               <Image
//                 style={[styles.rectangleIcon, styles.childIconPosition]}
//                 contentFit="cover"
//                 source={require("../../assets/rectangle-1228.png")}
//               />
//               <Text style={[styles.matchdayPhotosBeruga1, styles.matchdayTypo]}>
//                 Matchday photos: BERUGA FC VS Olympiacos FC
//               </Text>
//             </View>
//             <View style={[styles.groupView, styles.groupLayout]}>
//               <Image
//                 style={[styles.rectangleIcon, styles.childIconPosition]}
//                 contentFit="cover"
//                 source={require("../../assets/rectangle-1228.png")}
//               />
//               <Text style={[styles.matchdayPhotosBeruga2, styles.matchdayTypo]}>
//                 Matchday photos: BERUGA FC VS Olympiacos FC
//               </Text>
//             </View>
//             <View style={[styles.rectangleParent1, styles.groupLayout]}>
//               <Image
//                 style={[styles.rectangleIcon, styles.childIconPosition]}
//                 contentFit="cover"
//                 source={require("../../assets/rectangle-1228.png")}
//               />
//               <Text style={[styles.matchdayPhotosBeruga3, styles.matchdayTypo]}>
//                 Matchday photos: BERUGA FC VS Olympiacos FC
//               </Text>
//             </View>
//           </View>
//           <Image
//             style={[styles.iconMoreHorizontal, styles.iconGroupLayout]}
//             contentFit="cover"
//             source={require("../../assets/-icon-more-horizontal.png")}
//           />
//           <View style={styles.instanceGroup}>
//             <View
//               style={[styles.rectangleParent2, styles.rectangleParentLayout]}
//             >
//               <Image
//                 style={[styles.instanceChild42, styles.instanceChildPosition1]}
//                 contentFit="cover"
//                 source={require("../../assets/rectangle-1201.png")}
//               />
//               <View
//                 style={[styles.instanceChild43, styles.childIconPosition]}
//               />
//               <Text style={[styles.matchdayPhotosBeruga4, styles.photosTypo]}>
//                 Matchday photos: BERUGA FC VS Olympiacos
//               </Text>
//             </View>
//             <View
//               style={[styles.rectangleParent3, styles.rectangleParentLayout]}
//             >
//               <Image
//                 style={[styles.instanceChild42, styles.instanceChildPosition1]}
//                 contentFit="cover"
//                 source={require("../../assets/rectangle-1201.png")}
//               />
//               <View
//                 style={[styles.instanceChild43, styles.childIconPosition]}
//               />
//               <Text style={[styles.matchdayPhotosBeruga5, styles.photosTypo]}>
//                 Matchday photos: BERUGA FC VS Olympiacos
//               </Text>
//             </View>
//             <View
//               style={[styles.rectangleParent4, styles.rectangleParentLayout]}
//             >
//               <Image
//                 style={[styles.instanceChild42, styles.instanceChildPosition1]}
//                 contentFit="cover"
//                 source={require("../../assets/rectangle-1201.png")}
//               />
//               <View
//                 style={[styles.instanceChild43, styles.childIconPosition]}
//               />
//               <Text style={[styles.trophyHandoverPhotos, styles.photosTypo]}>
//                 Trophy handover photos season 2022-23
//               </Text>
//             </View>
//             <View
//               style={[styles.rectangleParent5, styles.rectangleParentLayout]}
//             >
//               <View
//                 style={[styles.instanceChild48, styles.instanceChildPosition1]}
//               />
//               <View
//                 style={[styles.instanceChild43, styles.childIconPosition]}
//               />
//               <Text style={[styles.leagueQuiz1, styles.liveGameTypo]}>
//                 LEAGUE QUIZ
//               </Text>
//               <View
//                 style={[styles.instanceChild50, styles.instanceChildPosition]}
//               />
//               <View
//                 style={[styles.instanceChild51, styles.instanceChildPosition]}
//               />
//               <Text style={[styles.remaining2, styles.topicTypo]}>
//                 24:40 Remaining
//               </Text>
//               <Text style={[styles.topic, styles.topicTypo]}>TOPIC</Text>
//               <Text
//                 style={[styles.motlDebutSeason, styles.image1590Icon1Position]}
//               >
//                 MOTL debut season fact.
//               </Text>
//               <Image
//                 style={[styles.image1586Icon1, styles.iconGroupLayout]}
//                 contentFit="cover"
//                 source={require("../../assets/image-15861.png")}
//               />
//             </View>

//             <View
//               style={[styles.rectangleParent6, styles.rectangleParentLayout]}
//             >
//               <View
//                 style={[styles.instanceChild48, styles.instanceChildPosition1]}
//               />
//               <View
//                 style={[styles.instanceChild43, styles.childIconPosition]}
//               />
//               <Text style={[styles.liveGame, styles.liveGameTypo]}>
//                 LIVE GAME
//               </Text>
//               <Image
//                 style={[styles.instanceChild54, styles.iconGroupLayout]}
//                 contentFit="cover"
//                 source={require("../../assets/ellipse-2171.png")}
//               />
//               <Image
//                 style={[styles.instanceChild55, styles.iconGroupLayout]}
//                 contentFit="cover"
//                 source={require("../../assets/group-2691.png")}
//               />
//               <View
//                 style={[styles.instanceChild50, styles.instanceChildPosition]}
//               />
//               <Text style={[styles.ht45Mins, styles.ht45MinsTypo]}>
//                 HT: 45 Mins
//               </Text>
//               <Text style={[styles.berugaFc, styles.berugaFcTypo]}>
//                 BERUGA FC
//               </Text>
//               <Text style={[styles.olympiacosFc, styles.berugaFcTypo]}>
//                 Olympiacos FC
//               </Text>
//               <Text style={[styles.vs, styles.vsLayout]}>
//                 <Text style={styles.v}>V</Text>
//                 <Text style={styles.s}>s</Text>
//               </Text>
//               <Image
//                 style={[styles.image1587Icon1, styles.iconLayout1]}
//                 contentFit="cover"
//                 source={require("../../assets/image-1587.png")}
//               />
//               <Image
//                 style={[styles.image1588Icon1, styles.iconPosition1]}
//                 contentFit="cover"
//                 source={require("../../assets/image-15441.png")}
//               />
//             </View>
//             <View
//               style={[styles.rectangleParent7, styles.rectangleParentLayout]}
//             >
//               <View
//                 style={[styles.instanceChild48, styles.instanceChildPosition1]}
//               />
//               <View
//                 style={[styles.instanceChild43, styles.childIconPosition]}
//               />
//               <Text style={[styles.leagueQuiz1, styles.liveGameTypo]}>
//                 PREDICTIONS
//               </Text>
//               <View
//                 style={[styles.instanceChild50, styles.instanceChildPosition]}
//               />
//               <Text style={[styles.remaining2, styles.topicTypo]}>
//                 20:40 Remaining
//               </Text>
//               <Text style={[styles.berugaFc, styles.berugaFcTypo]}>
//                 BERUGA FC
//               </Text>
//               <Text style={[styles.olympiacosFc, styles.berugaFcTypo]}>
//                 Olympiacos FC
//               </Text>
//               <Text style={[styles.vs1, styles.vsLayout]}>
//                 <Text style={styles.v}>V</Text>
//                 <Text style={styles.s}>s</Text>
//               </Text>
//               <Image
//                 style={[styles.image1589Icon1, styles.iconPosition1]}
//                 contentFit="cover"
//                 source={require("../../assets/image-1587.png")}
//               />
//               <Image
//                 style={[styles.image1590Icon1, styles.iconLayout]}
//                 contentFit="cover"
//                 source={require("../../assets/image-15441.png")}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.rectangleParent8, styles.childShadowBox]}>
//         <View style={[styles.groupChild1, styles.childBg]} />
//         <Pressable
//           style={[styles.iconCalendar, styles.iconPosition]}
//           onPress={() => navigation.navigate("MOTLHOMEFIXTURESFIXTURES")}
//         >
//           <Image
//             style={[styles.icon, styles.iconLayout4]}
//             contentFit="cover"
//             source={require("../../assets/-icon-calendar.png")}
//           />
//         </Pressable>
//         <Text style={[styles.homeFixturesMotlContainer, styles.motlLayout]}>
//           <Text style={styles.home}>Home</Text>
//           <Text style={styles.fixtures}> Fixtures MOTL Shop Stats</Text>
//         </Text>
//         <Pressable
//           style={[styles.iconHome, styles.iconPosition]}
//           onPress={() => navigation.navigate("Posts")}
//         >
//           <Image
//             style={[styles.icon, styles.iconLayout4]}
//             contentFit="cover"
//             source={require("../../assets/-icon-home1.png")}
//           />
//         </Pressable>
//         <Image
//           style={[styles.groupChild2, styles.motlPosition]}
//           contentFit="cover"
//           source={require("../../assets/ellipse-139.png")}
//         />
//         <Pressable
//           style={styles.iconShoppingBag}
//           onPress={() => navigation.navigate("SUBSCRIPTIONSSILVER1")}
//         >
//           <Image
//             style={[styles.icon, styles.iconLayout4]}
//             contentFit="cover"
//             source={require("../../assets/-icon-shopping-bag1.png")}
//           />
//         </Pressable>
//         <Image
//           style={[styles.iconStatsUp, styles.iconGroupLayout]}
//           contentFit="cover"
//           source={require("../../assets/-icon-stats-up1.png")}
//         />
//       </View>
//       <Pressable
//         style={styles.image1571}
//         onPress={() => navigation.navigate("MOTLHOMEPOSTS")}
//       >
//         <Image
//           style={styles.iconLayout4}
//           contentFit="cover"
//           source={require("../../assets/image-1682.png")}
//         />
//       </Pressable>

//       <View style={[styles.motlHomePostsChild1, styles.childBg]} />

//       {/* <View style={styles.parent}>
//         <Text style={[styles.text15, styles.text15Layout]}>6:04</Text>
//         <Image
//           style={styles.signalIcon}
//           contentFit="cover"
//           source={require("../../assets/signal.png")}
//         />
//         <View style={styles.groupChild3} />
//         <Image
//           style={[styles.image3Icon, styles.image3IconPosition]}
//           contentFit="cover"
//           source={require("../../assets/image-31.png")}
//         />
//         <Image
//           style={[styles.image2Icon, styles.text15Layout]}
//           contentFit="cover"
//           source={require("../../assets/image-2.png")}
//         />
//       </View> */}

//       {/* <Image
//         style={styles.image1332Icon}
//         contentFit="cover"
//         source={require("../../assets/image-1705.png")}
//       />
//       <Image
//         style={[styles.iconSearchOutline, styles.iconGroupLayout]}
//         contentFit="cover"
//         source={require("../../assets/-icon-search-outline2.png")}
//       /> */}
//       {/* <Text style={[styles.motl, styles.motlPosition]}>MOTL</Text> */}

//       {/* <View style={styles.iconBellParent}>
//         <Image
//           style={[styles.iconBell, styles.iconGroupLayout]}
//           contentFit="cover"
//           source={require("../../assets/-icon-bell1.png")}
//         />
//         <View style={styles.ellipseParent1}>
//           <Image
//             style={[styles.groupChild4, styles.image3IconPosition]}
//             contentFit="cover"
//             source={require("../../assets/ellipse-7.png")}
//           />
//           <Text style={styles.text16}>{`3`}</Text>
//         </View>
//       </View> */}

//       {/* <Pressable
//         style={[styles.posts, styles.motlPosition]}
//         onPress={() => navigation.navigate("Posts")}
//       >
//         <Text style={[styles.posts1, styles.buzz1Typo]}>POSTS</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.posts, styles.motlPosition]}
//         onPress={() => navigation.navigate("Posts")}
//       >
//         <Text style={[styles.buzz1, styles.buzz1Typo]}>BUZZ</Text>
//       </Pressable> */}
//       {/* <View style={[styles.motlHomePostsChild2, styles.instanceChildBg]} /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   iconLayout7: {
//     height: 382,
//     width: 492,
//   },
//   motlHomePostsItemPosition: {
//     // top: 133,
//     // left: 0,
//     // position: "absolute",
//   },
//   rectangleParentLayout1: {
//     width: 434,
//     position: "absolute",
//   },
//   childShadowBox: {
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//   },
//   instanceInnerShadowBox: {
//     left: "1.38%",
//     right: "0%",
//     backgroundColor: "rgba(255, 143, 143, 0.74)",
//     width: "98.62%",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.2)",
//     position: "absolute",
//   },
//   whatsLatestParentLayout: {
//     height: "0.93%",
//     position: "absolute",
//   },
//   whatsTypo: {
//     textAlign: "left",
//     fontFamily: "LeagueGothic-Regular",
//   },
//   iconGroupLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   iconLayout6: {
//     display: "none",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   ellipseIconLayout: {
//     width: "8.53%",
//     height: "1.05%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   instanceChildPosition9: {
//     bottom: "63.8%",
//     top: "32.83%",
//     elevation: 10,
//     shadowRadius: 10,
//     shadowColor: "rgba(0, 0, 0, 0.15)",
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     left: "5.76%",
//     right: "4.84%",
//     width: "89.4%",
//     height: "3.37%",
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//   },
//   childBg: {
//     backgroundColor: "#50165f",
//     position: "absolute",
//   },
//   image1589IconPosition: {
//     bottom: "52.82%",
//     top: "36.78%",
//     borderRadius: 10,
//     height: "10.4%",
//     left: "5.76%",
//     right: "4.84%",
//     width: "89.4%",
//     position: "absolute",
//   },
//   image1590IconPosition: {
//     bottom: "1.95%",
//     top: "87.65%",
//     borderRadius: 10,
//     height: "10.4%",
//     left: "5.76%",
//     right: "4.84%",
//     width: "89.4%",
//     position: "absolute",
//   },
//   image1591IconPosition: {
//     bottom: "13.04%",
//     top: "76.55%",
//     borderRadius: 10,
//     height: "10.4%",
//     left: "5.76%",
//     right: "4.84%",
//     width: "89.4%",
//     position: "absolute",
//   },
//   iconPosition3: {
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//     left: "5.76%",
//     right: "4.84%",
//     width: "89.4%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   motlLayout: {
//     lineHeight: 28,
//     textAlign: "left",
//     position: "absolute",
//   },
//   instanceChildBg: {
//     backgroundColor: "#ff0000",
//     position: "absolute",
//   },
//   likesTypo: {
//     fontSize: 14,
//     left: "30.41%",
//     height: "0.55%",
//     textAlign: "left",
//     position: "absolute",
//   },
//   likes2Position: {
//     top: "73.07%",
//     color: "#000",
//   },
//   comments4Position: {
//     top: "33.41%",
//     color: "#fff",
//   },
//   likeTypo: {
//     fontSize: 15,
//     left: "18.2%",
//     width: "20.05%",
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//     height: "0.55%",
//     textAlign: "left",
//     position: "absolute",
//   },
//   commentTypo: {
//     left: "44.47%",
//     width: "19.82%",
//     fontSize: 15,
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//     height: "0.55%",
//     textAlign: "left",
//     position: "absolute",
//   },
//   shareTypo: {
//     left: "81.8%",
//     width: "12.9%",
//     fontSize: 15,
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//     height: "0.55%",
//     textAlign: "left",
//     position: "absolute",
//   },
//   commentsPosition: {
//     left: "68.66%",
//     width: "25.81%",
//     fontSize: 14,
//     height: "0.55%",
//     textAlign: "left",
//     position: "absolute",
//   },
//   instanceChildPosition7: {
//     borderTopWidth: 0.3,
//     borderColor: "rgba(16, 12, 235, 0.38)",
//     left: "9.18%",
//     right: "9.64%",
//     width: "81.18%",
//     height: "0.01%",
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   instanceChildPosition6: {
//     left: "6.88%",
//     right: "6.42%",
//     width: "86.71%",
//     borderTopWidth: 0.3,
//     borderColor: "rgba(16, 12, 235, 0.38)",
//     borderStyle: "solid",
//     height: "0.01%",
//     position: "absolute",
//   },
//   instanceChildLayout4: {
//     left: "6.91%",
//     right: "85.02%",
//     width: "8.06%",
//     height: "1.02%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   instanceChildPosition3: {
//     bottom: "26.18%",
//     top: "72.81%",
//   },
//   instanceChildPosition2: {
//     bottom: "65.83%",
//     top: "33.15%",
//   },
//   instanceChildLayout3: {
//     left: "10.6%",
//     right: "81.34%",
//     width: "8.06%",
//     height: "1.02%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   instanceChildLayout2: {
//     left: "14.06%",
//     right: "77.88%",
//     width: "8.06%",
//     height: "1.02%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   instanceChildLayout1: {
//     left: "17.74%",
//     right: "74.19%",
//     width: "8.06%",
//     height: "1.02%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   ellipsePosition: {
//     right: "70.74%",
//     left: "21.2%",
//     width: "8.06%",
//     height: "1.02%",
//     position: "absolute",
//   },
//   childIconPosition: {
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   text12Typo: {
//     fontSize: 13,
//     color: "#fff",
//     textAlign: "left",
//   },
//   iconPosition2: {
//     left: "74.19%",
//     right: "19.35%",
//     width: "6.45%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   image1342ParentPosition: {
//     right: "82.49%",
//     width: "8.29%",
//     height: "1.07%",
//     left: "9.22%",
//     position: "absolute",
//   },
//   remainingTypo: {
//     fontFamily: "Poppins-Medium",
//     fontWeight: "500",
//     width: "34.79%",
//     height: "0.58%",
//     lineHeight: 20,
//     fontSize: 15,
//     color: "#fff",
//     left: "9.22%",
//     textAlign: "left",
//     position: "absolute",
//   },
//   instanceChildShadowBox: {
//     borderWidth: 2,
//     shadowColor: "rgba(0, 0, 0, 0.4)",
//     borderRadius: 25,
//     right: "41.24%",
//     width: "49.54%",
//     height: "1.37%",
//     borderColor: "#fff",
//     borderStyle: "solid",
//     left: "9.22%",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     position: "absolute",
//   },
//   nowTypo: {
//     fontSize: 25,
//     textAlign: "center",
//     height: "0.73%",
//     fontFamily: "LeagueGothic-Regular",
//     position: "absolute",
//   },
//   instanceChildLayout: {
//     borderTopWidth: 0.5,
//     width: "98.73%",
//     borderStyle: "solid",
//     height: "0.01%",
//     position: "absolute",
//   },
//   iconLayout2: {
//     left: "43.55%",
//     right: "49.77%",
//     width: "6.68%",
//     height: "0.74%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   groupLayout: {
//     height: 358,
//     width: 222,
//     top: 0,
//     position: "absolute",
//   },
//   matchdayTypo: {
//     lineHeight: 17,
//     fontSize: 17,
//     width: "82.88%",
//     height: "8.66%",
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//     color: "#fff",
//     textAlign: "left",
//     position: "absolute",
//   },
//   rectangleParentLayout: {
//     height: 250,
//     width: 168,
//     top: 0,
//     position: "absolute",
//   },
//   instanceChildPosition1: {
//     left: "2.98%",
//     bottom: "1.6%",
//     right: "2.98%",
//     top: "1.6%",
//     width: "94.05%",
//     height: "96.8%",
//     borderRadius: 10,
//     position: "absolute",
//   },
//   photosTypo: {
//     lineHeight: 12,
//     fontSize: 12,
//     top: "80.8%",
//     height: "8%",
//     fontFamily: "Poppins_regular",
//     color: "#fff",
//     textAlign: "left",
//     position: "absolute",
//   },
//   liveGameTypo: {
//     top: "5.2%",
//     height: "10%",
//     fontSize: 25,
//     color: "#fff",
//     textAlign: "left",
//     fontFamily: "LeagueGothic-Regular",
//     position: "absolute",
//   },
//   instanceChildPosition: {
//     borderColor: "rgba(48, 17, 241, 0.46)",
//     left: "10.57%",
//     right: "10.57%",
//     width: "78.87%",
//     height: "0.2%",
//     borderTopWidth: 0.5,
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   topicTypo: {
//     fontSize: 16,
//     height: "8%",
//     lineHeight: 20,
//     color: "#fff",
//     textAlign: "left",
//     position: "absolute",
//   },
//   image1590Icon1Position: {
//     left: "10.71%",
//     position: "absolute",
//   },
//   ht45MinsTypo: {
//     top: "21.2%",
//     fontFamily: "Poppins-Medium",
//     fontWeight: "500",
//   },
//   berugaFcTypo: {
//     left: "8.93%",
//     width: "83.93%",
//     height: "8%",
//     lineHeight: 20,
//     fontSize: 13,
//     fontFamily: "Poppins-Light",
//     fontWeight: "300",
//     color: "#fff",
//     textAlign: "left",
//     position: "absolute",
//   },
//   vsLayout: {
//     top: "42.4%",
//     width: "10.71%",
//     height: "8%",
//     fontFamily: "Poppins-Medium",
//     fontWeight: "500",
//     lineHeight: 20,
//     color: "#fff",
//     textAlign: "left",
//     position: "absolute",
//   },
//   iconLayout1: {
//     width: "35.71%",
//     height: "22%",
//   },
//   iconPosition1: {
//     bottom: "44.4%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   iconLayout: {
//     width: "25.6%",
//     height: "19.2%",
//   },
//   iconPosition: {
//     top: "30.83%",
//     position: "absolute",
//   },
//   iconLayout4: {
//     height: "100%",
//     width: "100%",
//   },
//   motlPosition: {
//     left: "50%",
//     position: "absolute",
//   },
//   text15Layout: {
//     height: 27,
//     position: "absolute",
//   },
//   image3IconPosition: {
//     height: 16,
//     top: 6,
//     position: "absolute",
//   },
//   buzz1Typo: {
//     height: 23,
//     textAlign: "center",
//     lineHeight: 20,
//     fontSize: 15,
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//     color: "#fff",
//   },
//   motlHomePostsChild: {
//     width: 428,
//     backgroundColor: "#fff",
//     left: 0,
//     top: 0,
//     position: "absolute",
//     height: 926,
//   },
//   blending1685112329194Icon: {
//     top: 451,
//     left: 0,
//     position: "absolute",
//   },
//   blending1485149163Icon: {
//     height: 382,
//     width: 492,
//   },
//   motlHomePostsItem: {
//     backgroundColor: "rgba(140, 39, 166, 0.72)",
//     height: 699,
//      width: 428,
//   },
//   instanceChild: {
//     height: "8.11%",
//     width: "99.08%",
//     top: "0.26%",
//     bottom: "91.63%",
//     left: "0.46%",
//     backgroundColor: "#ff8f8f",
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.2)",
//     right: "0.46%",
//     position: "absolute",
//   },
//   instanceItem: {
//     height: "38.99%",
//     top: "8.57%",
//     bottom: "52.44%",
//     left: "0.92%",
//     backgroundColor: "rgba(255, 143, 143, 0.74)",
//     width: "98.62%",
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.2)",
//     right: "0.46%",
//     position: "absolute",
//   },
//   instanceInner: {
//     height: "12.46%",
//     top: "47.79%",
//     bottom: "39.74%",
//   },
//   rectangleView: {
//     height: "39.02%",
//     top: "60.52%",
//     bottom: "0.46%",
//   },
//   whatsLatest: {
//     color: "#511760",
//     letterSpacing: -0.6,
//     fontSize: 30,
//     top: "12.5%",
//     width: "42.58%",
//     height: "78.13%",
//     fontFamily: "LeagueGothic-Regular",
//     left: "0%",
//     position: "absolute",
//   },
//   iconFilter: {
//     height: "88.3%",
//     width: "7.14%",
//     right: "2.2%",
//     bottom: "-16.42%",
//     left: "90.66%",
//     top: "28.13%",
//     position: "absolute",
//   },
//   whatsLatestParent: {
//     width: "83.87%",
//     top: "8.8%",
//     right: "7.37%",
//     bottom: "90.27%",
//     left: "8.76%",
//   },
//   whatsLatest1: {
//     color: "#50165f",
//     letterSpacing: -0.6,
//     fontSize: 30,
//     top: "12.5%",
//     width: "42.58%",
//     height: "78.13%",
//     fontFamily: "LeagueGothic-Regular",
//     left: "0%",
//     position: "absolute",
//   },
//   iconFilter1: {
//     height: "63.3%",
//     width: "4.95%",
//     right: "3.3%",
//     bottom: "8.58%",
//     left: "91.76%",
//     top: "28.13%",
//     position: "absolute",
//   },
//   whatsLatestGroup: {
//     width: "85.48%",
//     top: "48.02%",
//     right: "5.3%",
//     bottom: "51.05%",
//     left: "9.22%",
//     height: "0.93%",
//     position: "absolute",
//   },
//   ellipseIcon: {
//     top: "8.86%",
//     right: "8.06%",
//     bottom: "90.09%",
//     left: "83.41%",
//   },
//   instanceChild1: {
//     top: "48.17%",
//     right: "7.6%",
//     bottom: "50.78%",
//     left: "83.87%",
//   },
//   instanceChildPosition11: {
//     elevation: 10,
//     shadowRadius: 10,
//     shadowColor: "rgba(0, 0, 0, 0.15)",
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     left: "5.76%",
//     bottom: "74.78%",
//     right: "4.84%",
//     top: "21.85%",
//     width: "89.4%",
//     height: "3.37%",
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     backgroundColor: "#fff",
//     position: "absolute",
//   },
//   instanceChildPosition10: {
//     bottom: "24.14%",
//     top: "72.49%",
//     elevation: 10,
//     shadowRadius: 10,
//     shadowColor: "rgba(0, 0, 0, 0.15)",
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     left: "5.76%",
//     right: "4.84%",
//     width: "89.4%",
//     height: "3.37%",
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     backgroundColor: "#fff",
//     position: "absolute",
//   },
//   instanceChild4: {
//     backgroundColor: "#fff",
//     position: "absolute",
//   },
//   instanceChild7: {
//     bottom: "63.8%",
//     top: "32.83%",
//     elevation: 10,
//     shadowRadius: 10,
//     shadowColor: "rgba(0, 0, 0, 0.15)",
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     left: "5.76%",
//     right: "4.84%",
//     width: "89.4%",
//     height: "3.37%",
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//   },
//   instanceChild8: {
//     borderRadius: 10,
//     backgroundColor: "#fff",
//   },
//   instanceChild9: {
//     backgroundColor: "#fff",
//   },
//   instanceChild10: {
//     backgroundColor: "#fff",
//   },
//   image1586Icon: {
//     top: "10.23%",
//     bottom: "78.15%",
//     height: "11.62%",
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//   },
//   image1587Icon: {
//     top: "60.87%",
//     bottom: "27.51%",
//     height: "11.62%",
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//   },
//   image1588Icon: {
//     height: "7.03%",
//     top: "25.8%",
//     bottom: "67.17%",
//   },
//   image1589Icon: {
//     borderRadius: 10,
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   image1590Icon: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   image1591Icon: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   matchOfThe: {
//     top: "19.73%",
//     color: "#fff",
//     fontSize: 32,
//     height: "0.73%",
//     lineHeight: 28,
//     left: "9.22%",
//     fontFamily: "LeagueGothic-Regular",
//     width: "75.12%",
//   },
//   berugaFcTeam: {
//     top: "70.37%",
//     color: "#fff",
//     fontSize: 32,
//     height: "0.73%",
//     lineHeight: 28,
//     left: "9.22%",
//     fontFamily: "LeagueGothic-Regular",
//     width: "75.12%",
//   },
//   matchHighlightsBeruga: {
//     top: "30.71%",
//     color: "#fff",
//     fontSize: 32,
//     height: "0.73%",
//     lineHeight: 28,
//     left: "9.22%",
//     fontFamily: "LeagueGothic-Regular",
//     width: "75.12%",
//   },
//   predictAndWin: {
//     width: "82.26%",
//     top: "42.42%",
//     color: "#fff",
//     fontSize: 32,
//     height: "0.73%",
//     lineHeight: 28,
//     left: "9.22%",
//     fontFamily: "LeagueGothic-Regular",
//   },
//   leagueQuiz: {
//     width: "71.2%",
//     top: "93.09%",
//     color: "#fff",
//     fontSize: 32,
//     height: "0.73%",
//     lineHeight: 28,
//     left: "9.22%",
//     fontFamily: "LeagueGothic-Regular",
//   },
//   motlEndOf: {
//     width: "81.11%",
//     top: "81.81%",
//     color: "#fff",
//     fontSize: 32,
//     height: "0.73%",
//     lineHeight: 28,
//     left: "9.22%",
//     fontFamily: "LeagueGothic-Regular",
//   },
//   instanceChild11: {
//     top: "19.26%",
//     bottom: "80.68%",
//     right: "76.27%",
//     width: "14.52%",
//     height: "0.06%",
//     backgroundColor: "#ff0000",
//     left: "9.22%",
//   },
//   instanceChild12: {
//     top: "69.9%",
//     bottom: "30.04%",
//     right: "76.27%",
//     width: "14.52%",
//     height: "0.06%",
//     backgroundColor: "#ff0000",
//     left: "9.22%",
//   },
//   instanceChild13: {
//     top: "30.24%",
//     bottom: "69.7%",
//     right: "76.27%",
//     width: "14.52%",
//     height: "0.06%",
//     backgroundColor: "#ff0000",
//     left: "9.22%",
//   },
//   instanceChild14: {
//     top: "42.07%",
//     bottom: "57.87%",
//     right: "76.27%",
//     width: "14.52%",
//     height: "0.06%",
//     backgroundColor: "#ff0000",
//     left: "9.22%",
//   },
//   instanceChild15: {
//     top: "92.82%",
//     bottom: "7.12%",
//     right: "76.27%",
//     width: "14.52%",
//     height: "0.06%",
//     backgroundColor: "#ff0000",
//     left: "9.22%",
//   },
//   instanceChild16: {
//     top: "81.49%",
//     bottom: "18.45%",
//     right: "76.27%",
//     width: "14.52%",
//     height: "0.06%",
//     backgroundColor: "#ff0000",
//     left: "9.22%",
//   },
//   textTypo: {
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//   },
//   text1: {
//     fontFamily: "Poppins_regular",
//   },
//   likes1Typo: {
//     fontFamily: "Poppins-Light",
//     fontWeight: "300",
//   },
//   likes: {
//     color: "#000",
//     top: "22.43%",
//     width: "16.13%",
//     fontSize: 14,
//     left: "30.41%",
//     height: "0.55%",
//   },
//   likes2: {
//     fontSize: 14,
//     left: "30.41%",
//     height: "0.55%",
//     textAlign: "left",
//     position: "absolute",
//     width: "16.13%",
//   },
//   likes1kContainer: {
//     width: "32.03%",
//     fontSize: 14,
//     left: "30.41%",
//     height: "0.55%",
//     textAlign: "left",
//     position: "absolute",
//     top: "33.41%",
//   },
//   like: {
//     color: "rgba(0, 0, 0, 0.71)",
//     top: "24.03%",
//   },
//   like1: {
//     top: "74.67%",
//     color: "rgba(0, 0, 0, 0.71)",
//   },
//   like2: {
//     top: "35.01%",
//     color: "#fff",
//   },
//   comment: {
//     color: "rgba(0, 0, 0, 0.71)",
//     top: "24.03%",
//   },
//   comment1: {
//     top: "74.67%",
//     color: "rgba(0, 0, 0, 0.71)",
//   },
//   comment2: {
//     top: "35.01%",
//     color: "#fff",
//   },
//   share: {
//     color: "rgba(0, 0, 0, 0.71)",
//     top: "24.03%",
//   },
//   share1: {
//     top: "74.67%",
//     color: "rgba(0, 0, 0, 0.71)",
//   },
//   share2: {
//     top: "35.01%",
//     color: "#fff",
//   },
//   comments: {
//     color: "#000",
//     top: "22.43%",
//   },
//   comments2: {
//     top: "73.07%",
//     color: "#000",
//   },
//   comments4: {
//     top: "33.41%",
//     color: "#fff",
//   },
//   lineView: {
//     top: "44.91%",
//     bottom: "55.08%",
//   },
//   instanceChild17: {
//     top: "95.78%",
//     bottom: "4.21%",
//   },
//   instanceChild18: {
//     top: "84.68%",
//     bottom: "15.31%",
//   },
//   instanceChild19: {
//     top: "23.51%",
//     bottom: "76.48%",
//   },
//   instanceChild20: {
//     top: "74.15%",
//     bottom: "25.84%",
//   },
//   instanceChild21: {
//     top: "34.5%",
//     bottom: "65.5%",
//     borderColor: "#fff",
//     left: "6.88%",
//     right: "6.42%",
//     width: "86.71%",
//     borderTopWidth: 0.3,
//     borderStyle: "solid",
//     height: "0.01%",
//     position: "absolute",
//   },
//   instanceChild22: {
//     bottom: "76.82%",
//     top: "22.17%",
//   },
//   instanceChild23: {
//     left: "6.91%",
//     right: "85.02%",
//     width: "8.06%",
//     height: "1.02%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   instanceChild24: {
//     left: "6.91%",
//     right: "85.02%",
//     width: "8.06%",
//     height: "1.02%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   instanceChild25: {
//     bottom: "76.82%",
//     top: "22.17%",
//   },
//   instanceChild26: {
//     bottom: "26.18%",
//     top: "72.81%",
//   },
//   instanceChild27: {
//     bottom: "65.83%",
//     top: "33.15%",
//   },
//   instanceChild28: {
//     bottom: "76.82%",
//     top: "22.17%",
//   },
//   instanceChild29: {
//     bottom: "26.18%",
//     top: "72.81%",
//   },
//   instanceChild30: {
//     bottom: "65.83%",
//     top: "33.15%",
//   },
//   instanceChild31: {
//     bottom: "76.82%",
//     top: "22.17%",
//   },
//   instanceChild32: {
//     bottom: "26.18%",
//     top: "72.81%",
//   },
//   instanceChild33: {
//     bottom: "65.83%",
//     top: "33.15%",
//   },
//   groupChild: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   text12: {
//     height: "37.14%",
//     width: "77.14%",
//     top: "22.86%",
//     left: "11.43%",
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//     position: "absolute",
//   },
//   ellipseParent: {
//     left: "21.2%",
//     bottom: "76.82%",
//     top: "22.17%",
//   },
//   ellipseGroup: {
//     left: "21.2%",
//     bottom: "26.18%",
//     top: "72.81%",
//   },
//   ellipseContainer: {
//     left: "21.2%",
//     bottom: "65.83%",
//     top: "33.15%",
//   },
//   image1592Icon: {
//     top: "24.06%",
//     bottom: "75.25%",
//     height: "0.7%",
//     left: "74.19%",
//     right: "19.35%",
//     width: "6.45%",
//   },
//   image1593Icon: {
//     top: "74.69%",
//     bottom: "24.61%",
//     height: "0.7%",
//     left: "74.19%",
//     right: "19.35%",
//     width: "6.45%",
//   },
//   image1342Icon: {
//     height: "77.78%",
//     width: "84.62%",
//     top: "7.41%",
//     right: "7.69%",
//     bottom: "14.81%",
//     left: "7.69%",
//     position: "absolute",
//   },
//   image1336Icon: {
//     display: "none",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   image1342Parent: {
//     top: "23.82%",
//     bottom: "75.1%",
//   },
//   image1342Group: {
//     top: "74.46%",
//     bottom: "24.46%",
//   },
//   image1594Icon: {
//     height: "0.64%",
//     top: "35.04%",
//     bottom: "64.32%",
//   },
//   groupIcon: {
//     height: "1.51%",
//     width: "11.98%",
//     top: "28.56%",
//     right: "45.16%",
//     bottom: "69.93%",
//     left: "42.86%",
//     position: "absolute",
//   },
//   image1345Icon: {
//     height: "78.57%",
//     width: "84%",
//     top: "7.14%",
//     right: "8%",
//     bottom: "14.29%",
//     left: "8%",
//     position: "absolute",
//   },
//   image1345Parent: {
//     top: "34.81%",
//     bottom: "64.12%",
//   },
//   remaining: {
//     top: "44.04%",
//   },
//   remaining1: {
//     top: "94.8%",
//   },
//   thJuly2023: {
//     top: "83.7%",
//   },
//   instanceChild34: {
//     top: "44.92%",
//     bottom: "53.72%",
//     backgroundColor: "rgba(255, 255, 255, 0)",
//   },
//   instanceChild35: {
//     top: "95.79%",
//     bottom: "2.85%",
//     backgroundColor: "rgba(255, 255, 255, 0)",
//   },
//   instanceChild36: {
//     top: "84.69%",
//     bottom: "13.95%",
//     backgroundColor: "#fff",
//   },
//   predictNow: {
//     width: "22.35%",
//     top: "45.18%",
//     left: "23.5%",
//     textAlign: "center",
//     color: "#fff",
//   },
//   takeQuizNow: {
//     width: "26.04%",
//     top: "96.05%",
//     textAlign: "center",
//     left: "21.2%",
//     color: "#fff",
//   },
//   ticketsOnSale: {
//     width: "36.87%",
//     top: "84.95%",
//     left: "14.98%",
//     textAlign: "center",
//     color: "#000",
//   },
//   instanceChild37: {
//     top: "-0.01%",
//     right: "0.4%",
//     bottom: "99.99%",
//     left: "0.86%",
//     borderColor: "rgba(81, 23, 96, 0.14)",
//   },
//   instanceChild38: {
//     top: "99.99%",
//     right: "-0.06%",
//     bottom: "-0.01%",
//     left: "1.32%",
//     borderColor: "rgba(81, 23, 96, 0.08)",
//   },
//   iconChat: {
//     bottom: "75.24%",
//     top: "24.03%",
//   },
//   iconChat1: {
//     bottom: "24.6%",
//     top: "74.67%",
//   },
//   iconChat2: {
//     bottom: "64.26%",
//     top: "35.01%",
//   },
//   rectangleIcon: {
//     borderRadius: 10,
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   matchdayPhotosBeruga: {
//     left: "12.61%",
//     top: "83.8%",
//     lineHeight: 17,
//     fontSize: 17,
//     width: "82.88%",
//     height: "8.66%",
//   },
//   rectangleGroup: {
//     left: 15,
//   },
//   matchdayPhotosBeruga1: {
//     top: "83.52%",
//     left: "10.36%",
//     lineHeight: 17,
//     fontSize: 17,
//     width: "82.88%",
//     height: "8.66%",
//   },
//   rectangleContainer: {
//     left: 252,
//   },
//   matchdayPhotosBeruga2: {
//     left: "13.06%",
//     top: "83.8%",
//     lineHeight: 17,
//     fontSize: 17,
//     width: "82.88%",
//     height: "8.66%",
//   },
//   groupView: {
//     left: 489,
//   },
//   matchdayPhotosBeruga3: {
//     top: "83.24%",
//     left: "9.46%",
//     lineHeight: 17,
//     fontSize: 17,
//     width: "82.88%",
//     height: "8.66%",
//   },
//   rectangleParent1: {
//     left: 726,
//   },
//   instanceParent: {
//     top: "49.42%",
//     bottom: "40.18%",
//     height: "10.4%",
//     left: "1.38%",
//     right: "0%",
//     width: "98.62%",
//     position: "absolute",
//   },
//   iconMoreHorizontal: {
//     width: "6.23%",
//     top: "48.2%",
//     right: "8.74%",
//     bottom: "50.87%",
//     left: "85.02%",
//     height: "0.93%",
//     position: "absolute",
//   },
//   instanceChild42: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   instanceChild43: {
//     borderColor: "#ff0000",
//     borderWidth: 1.9,
//     backgroundColor: "rgba(255, 255, 255, 0)",
//     borderStyle: "solid",
//     bottom: "0%",
//     borderRadius: 10,
//   },
//   matchdayPhotosBeruga4: {
//     left: "11.31%",
//     width: "85.71%",
//     fontSize: 12,
//     top: "80.8%",
//   },
//   rectangleParent2: {
//     left: 189,
//   },
//   matchdayPhotosBeruga5: {
//     left: "10.12%",
//     width: "85.71%",
//     fontSize: 12,
//     top: "80.8%",
//   },
//   rectangleParent3: {
//     left: 365,
//   },
//   trophyHandoverPhotos: {
//     width: "79.76%",
//     left: "9.52%",
//   },
//   rectangleParent4: {
//     left: 716,
//   },
//   instanceChild48: {
//     backgroundColor: "#92679a",
//   },
//   leagueQuiz1: {
//     width: "55.36%",
//     left: "22.02%",
//   },
//   instanceChild50: {
//     top: "17.5%",
//     bottom: "82.3%",
//   },
//   instanceChild51: {
//     top: "76.7%",
//     bottom: "23.1%",
//   },
//   remaining2: {
//     width: "81.55%",
//     top: "21.2%",
//     fontFamily: "Poppins-Medium",
//     fontWeight: "500",
//     left: "10.12%",
//   },
//   topic: {
//     width: "33.93%",
//     top: "66.4%",
//     left: "34.52%",
//     fontFamily: "Poppins-SemiBold",
//     fontWeight: "600",
//   },
//   motlDebutSeason: {
//     width: "78.57%",
//     top: "78.4%",
//     lineHeight: 15,
//     height: "8%",
//     fontSize: 13,
//     color: "#fff",
//     textAlign: "left",
//     fontFamily: "Poppins-Light",
//     fontWeight: "300",
//   },
//   image1586Icon1: {
//     height: "40.4%",
//     width: "63.69%",
//     top: "26.8%",
//     right: "17.86%",
//     bottom: "32.8%",
//     left: "18.45%",
//     position: "absolute",
//   },
//   rectangleParent5: {
//     left: 891,
//   },
//   liveGame: {
//     width: "50.6%",
//     left: "36.9%",
//   },
//   instanceChild54: {
//     height: "9.6%",
//     width: "14.29%",
//     top: "6%",
//     right: "72.62%",
//     bottom: "84.4%",
//     left: "13.1%",
//     position: "absolute",
//   },
//   instanceChild55: {
//     width: "11.9%",
//     top: "6.8%",
//     right: "73.81%",
//     bottom: "85.2%",
//     left: "14.29%",
//     height: "8%",
//     position: "absolute",
//   },
//   ht45Mins: {
//     width: "67.26%",
//     left: "20.83%",
//     fontSize: 18,
//     height: "8%",
//     lineHeight: 20,
//     top: "21.2%",
//     color: "#fff",
//     textAlign: "left",
//     position: "absolute",
//   },
//   berugaFc: {
//     top: "62.4%",
//   },
//   olympiacosFc: {
//     top: "74.4%",
//   },
//   v: {
//     fontSize: 18,
//   },
//   s: {
//     fontSize: 10,
//   },
//   vs: {
//     left: "41.67%",
//   },
//   image1587Icon1: {
//     top: "34%",
//     right: "10.71%",
//     bottom: "44%",
//     left: "53.57%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     position: "absolute",
//   },
//   image1588Icon1: {
//     top: "36.4%",
//     right: "66.07%",
//     left: "8.33%",
//     width: "25.6%",
//     height: "19.2%",
//   },
//   rectangleParent6: {
//     left: 13,
//   },
//   vs1: {
//     left: "43.45%",
//   },
//   image1589Icon1: {
//     top: "33.6%",
//     right: "8.33%",
//     left: "55.95%",
//     width: "35.71%",
//     height: "22%",
//   },
//   image1590Icon1: {
//     top: "36%",
//     right: "63.69%",
//     bottom: "44.8%",
//     left: "10.71%",
//     position: "absolute",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   rectangleParent7: {
//     left: 540,
//   },
//   instanceGroup: {
//     height: "7.26%",
//     width: "99.54%",
//     top: "0.73%",
//     bottom: "92.01%",
//     left: "0%",
//     right: "0.46%",
//     position: "absolute",
//   },
//   rectangleParent: {
//     height: 3442,
//     left: 0,
//     top: 0,
//   },
//   motlHomePostsInner: {
//     top: 124,
//     left: -4,
//     height: 746,
//   },
//   groupChild1: {
//     top: 26,
//     height: 94,
//     width: 428,
//     left: 0,
//   },
//   icon: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   iconCalendar: {
//     left: "26.17%",
//     right: "67.65%",
//     bottom: "47.43%",
//     width: "6.18%",
//     height: "21.73%",
//   },
//   home: {
//     color: "#ff0000",
//   },
//   fixtures: {
//     color: "#fff",
//   },
//   homeFixturesMotlContainer: {
//     top: 62,
//     left: 32,
//     fontSize: 11,
//     fontFamily: "Montserrat_regular",
//     width: 385,
//     height: 31,
//   },
//   iconHome: {
//     left: "8.18%",
//     right: "85.75%",
//     bottom: "48.33%",
//     width: "6.07%",
//     height: "20.83%",
//   },
//   groupChild2: {
//     marginLeft: -40,
//     width: 81,
//     height: 67,
//     top: 0,
//   },
//   iconShoppingBag: {
//     left: "64.95%",
//     top: "27.5%",
//     right: "26.64%",
//     bottom: "43.36%",
//     width: "8.4%",
//     height: "29.14%",
//     position: "absolute",
//   },
//   iconStatsUp: {
//     height: "25.22%",
//     width: "7.28%",
//     top: "29.17%",
//     right: "9.54%",
//     bottom: "45.62%",
//     left: "83.18%",
//     position: "absolute",
//   },
//   rectangleParent8: {
//     top: 806,
//     shadowColor: "rgba(255, 0, 0, 0.22)",
//     shadowRadius: 15,
//     elevation: 15,
//     height: 120,
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     width: 428,
//     left: 0,
//     position: "absolute",
//   },
//   image1571: {
//     left: 195,
//     top: 815,
//     width: 40,
//     height: 55,
//     position: "absolute",
//   },
//   motlHomePostsChild1: {
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     height: 133,
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     elevation: 4,
//     shadowRadius: 4,
//     width: 428,
//     left: 0,
//     top: 0,
//   },
//   text15: {
//     fontSize: 19,
//     fontFamily: "Inter_semibold",
//     width: 76,
//     textAlign: "center",
//     fontWeight: "600",
//     height: 27,
//     color: "#fff",
//     left: 0,
//     top: 0,
//   },
//   signalIcon: {
//     top: 7,
//     left: 306,
//     width: 26,
//     height: 13,
//     position: "absolute",
//   },
//   groupChild3: {
//     left: 325,
//     backgroundColor: "rgba(217, 217, 217, 0.4)",
//     width: 3,
//     top: 6,
//     height: 13,
//     borderRadius: 10,
//     position: "absolute",
//   },
//   image3Icon: {
//     left: 339,
//     width: 16,
//   },
//   image2Icon: {
//     top: 1,
//     left: 362,
//     width: 32,
//   },
//   parent: {
//     top: 10,
//     left: 21,
//     width: 394,
//     height: 28,
//     position: "absolute",
//   },
//   image1332Icon: {
//     top: 43,
//     left: 16,
//     width: 50,
//     height: 49,
//     position: "absolute",
//   },
//   iconSearchOutline: {
//     height: "4.36%",
//     width: "8.88%",
//     top: "5.62%",
//     right: "5.61%",
//     bottom: "90.02%",
//     left: "85.51%",
//     position: "absolute",
//   },
//   motl: {
//     height: "2.7%",
//     marginLeft: -130,
//     top: "5.29%",
//     fontSize: 28,
//     width: 44,
//     textShadowColor: "rgba(0, 0, 0, 0.5)",
//     textShadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     textShadowRadius: 4,
//     color: "#fff",
//     textAlign: "left",
//     fontFamily: "LeagueGothic-Regular",
//   },
//   iconBell: {
//     height: "92.31%",
//     width: "124.26%",
//     top: "28.21%",
//     right: "-10.06%",
//     bottom: "-20.51%",
//     left: "-14.2%",
//     position: "absolute",
//   },
//   groupChild4: {
//     left: 3,
//     width: 15,
//   },
//   text16: {
//     height: "86.98%",
//     fontFamily: "Montserrat_semibold",
//     fontSize: 10,
//     textAlign: "center",
//     top: "0%",
//     fontWeight: "600",
//     color: "#fff",
//     lineHeight: 28,
//     left: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   ellipseParent1: {
//     left: 9,
//     width: 19,
//     height: 22,
//     top: 0,
//     position: "absolute",
//   },
//   iconBellParent: {
//     height: "4.21%",
//     width: "6.58%",
//     top: "4.64%",
//     right: "18.42%",
//     bottom: "91.14%",
//     left: "75%",
//     position: "absolute",
//   },
//   posts1: {
//     marginLeft: -148,
//     width: 61,
//   },
//   posts: {
//     top: 102,
//   },
//   buzz1: {
//     marginLeft: 52,
//     width: 111,
//   },
//   motlHomePostsChild2: {
//     top: 129,
//     left: 25,
//     width: 147,
//     height: 4,
//     borderRadius: 10,
//   },
//   motlHomePosts: {
//     backgroundColor: "#1119ea",
//     flex: 1,
//     overflow: "hidden",
//     width: "100%",
//     //height: 926,
//   },
// });

// export default Posts;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Post = () => {
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
