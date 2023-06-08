import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const FrameScreen = () => {
  return (
    <View style={styles.componentParent}>

      <View style={styles.rectangleParent}>
        
        <View style={styles.componentChild} />
        <View style={styles.componentItem} />

        <View style={styles.groupWrapper}>
          <View style={styles.rectangleWrapperPosition}>
            <Text style={styles.fixtures20222023}>FIXTURES - 2022/2023</Text>
          </View>
        </View>

        <View style={styles.groupContainer}>
          <View style={styles.rectangleWrapperPosition}>
            <Text style={styles.fixtures20222023}>GAME WEEKS</Text>
          </View>
        </View>

        <View style={[styles.componentInner, styles.componentShadowBox]} />
        <View style={[styles.rectangleView, styles.componentShadowBox]} />
        <View style={[styles.componentChild1, styles.componentShadowBox]} />
        <Text style={[styles.today25thJune, styles.juneTypo]}>
          Today 25th June 2023
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",
          }}
        />
        <Image
          style={[styles.componentChild2, styles.groupIconLayout]}
          contentFit="cover"
        //   source={require("../assets/group-2819.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <View style={[styles.lineView, styles.componentChildPosition6]} />
        <View
          style={[styles.rectangleWrapper, styles.rectangleWrapperShadowBox]}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View
          style={[styles.rectangleContainer, styles.rectangleWrapperShadowBox]}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.rectangleFrame, styles.rectangleWrapperShadowBox]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Text style={[styles.olympiacoFc, styles.olympiacoTypo]}>
          Olympiaco FC
        </Text>
        <Text style={[styles.berugaFc, styles.berugaTypo1]}>BERUGA FC</Text>
        <Text style={[styles.berugaFc1, styles.berugaTypo]}>BERUGA FC</Text>
        <Image
          style={[styles.vectorIcon, styles.componentChildLayout8]}
          contentFit="cover"
        //   source={require("../assets/vector-39.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",   
        }}
        />
        <Text style={[styles.gameWeek7, styles.gameTypo]}>Game week 7</Text>
        <Text style={[styles.live, styles.liveTypo]}>{`LIVE `}</Text>
        <Text style={[styles.live1, styles.liveTypo]}>{`LIVE `}</Text>
        <Text style={[styles.live2, styles.liveTypo]}>{`LIVE `}</Text>
        <View style={[styles.componentChild3, styles.componentChildLayout7]} />
        <Text style={[styles.theCardinal, styles.theTypo]}>
          THE CARDINAL...
        </Text>
        <Text style={[styles.legendsFc, styles.berugaTypo]}>LEGENDS FC</Text>
        <View
          style={[styles.componentChild4, styles.componentChildShadowBox]}
        />
        <View
          style={[styles.componentChild5, styles.componentChildShadowBox]}
        />
        <View
          style={[styles.componentChild6, styles.componentChildShadowBox]}
        />
        <Image
          style={[styles.componentChild7, styles.componentChildPosition4]}
          contentFit="cover"
        //   source={require("../assets/vector-39.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Text style={[styles.gameWeek71, styles.gameTypo]}>Game week 7</Text>
        <View
          style={[styles.componentChild8, styles.componentChildPosition1]}
        />
        <Text style={[styles.roversFc, styles.roversTypo]}>ROVERS FC</Text>
        <Text style={[styles.extremeFc, styles.extremeTypo]}>EXTREME FC</Text>
        <Image
          style={[styles.componentChild9, styles.componentChildPosition1]}
          contentFit="cover"
        //   source={require("../assets/vector-41.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",    
        }}
        />
        <Text style={[styles.gameWeek72, styles.gameTypo]}>Game week 7</Text>
        <View style={[styles.componentChild10, styles.componentChildLayout7]} />
        <View style={[styles.componentChild11, styles.componentChildLayout7]} />
        <Text style={[styles.legendsFc1, styles.legendsTypo]}>LEGENDS FC</Text>
        <Image
          style={[styles.componentChild12, styles.componentChildLayout6]}
          contentFit="cover"
        //   source={require("../assets/vector-41.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",   
        }}
        />
        <Text style={[styles.gameWeek73, styles.gameWeek73Position]}>
          Game week 7
        </Text>
        <View style={[styles.rectangleGroup, styles.iconFilterPosition]}>
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
          <Text style={styles.sortByTeam}>SORT BY TEAM</Text>
          <Image
            style={[styles.groupChild2, styles.groupIconLayout]}
            contentFit="cover"
            // source={require("../assets/vector-5.png")}
            source={{
                uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
            }}
          />
        </View>
        <View style={styles.componentChild13} />
        <View style={[styles.componentChild14, styles.componentChildLayout7]} />
        <Image
          style={[styles.componentChild15, styles.componentChildLayout5]}
          contentFit="cover"
        //   
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.componentChild16, styles.componentChildLayout5]}
          contentFit="cover"
        //   
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.componentChild17, styles.componentChildLayout5]}
          contentFit="cover"
        //   
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.componentChild18, styles.componentChildLayout4]}
          contentFit="cover"
        //   
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1650Icon, styles.groupIconLayout]}
          contentFit="cover"
        //   source={require("../assets/image-1650.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={styles.image1651Icon}
          contentFit="cover"
        
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1652Icon, styles.groupIconLayout]}
          contentFit="cover"
        //   source={require("../assets/image-1652.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1653Icon, styles.iconLayout8]}
          contentFit="cover"
        //   source={require("../assets/image-1652.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={styles.image1654Icon}
          contentFit="cover"
        //   source={require("../assets/image-1654.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={styles.image1655Icon}
          contentFit="cover"
        //   source={require("../assets/image-1655.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",   
        }}
        />
        <Image
          style={[styles.image1656Icon, styles.iconLayout6]}
          contentFit="cover"
        //   source={require("../assets/image-1655.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={styles.image1657Icon}
          contentFit="cover"
        //   source={require("../assets/image-1657.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.ellipseIcon, styles.componentChildLayout3]}
          contentFit="cover"
        //   source={require("../assets/ellipse-230.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.componentChild19, styles.componentChildLayout3]}
          contentFit="cover"
        //   source={require("../assets/ellipse-230.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.componentChild20, styles.componentChildLayout3]}
          contentFit="cover"
        //   source={require("../assets/ellipse-230.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.componentChild21, styles.componentChildLayout2]}
          contentFit="cover"
        //   source={require("../assets/group-2828.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.componentChild22, styles.componentChildLayout2]}
          contentFit="cover"
        //   source={require("../assets/group-2828.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",    
        }}
        />
        <Image
          style={[styles.componentChild23, styles.componentChildLayout2]}
          contentFit="cover"
        //   source={require("../assets/group-2828.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Text style={[styles.text, styles.textTypo2]}>3</Text>
        <Text style={[styles.text1, styles.textTypo2]}>2</Text>
        <Text style={[styles.text2, styles.textTypo2]}>0</Text>
        <Text style={[styles.text3, styles.textTypo2]}>1</Text>
        <Text style={[styles.text4, styles.textTypo1]}>2</Text>
        <Text style={[styles.text5, styles.textTypo1]}>2</Text>
        <View style={[styles.groupView, styles.groupParentPosition1]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Text style={[styles.pm, styles.pmTypo]}>2:00 PM</Text>
        <View style={[styles.htParent, styles.parentPosition]}>
          <Text style={[styles.ht, styles.textTypo]}>HT</Text>
          <View style={styles.view}>
            <Text style={[styles.text6, styles.textTypo]}>’</Text>
          </View>
        </View>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={[styles.ht, styles.textTypo]}>23</Text>
          <View style={styles.view}>
            <Text style={[styles.text8, styles.textTypo]}>’</Text>
          </View>
        </View>
        <View style={[styles.group, styles.parentPosition]}>
          <Text style={[styles.ht, styles.textTypo]}>01</Text>
          <View style={styles.view}>
            <Text style={[styles.text8, styles.textTypo]}>’</Text>
          </View>
        </View>
        <Text style={styles.tomorrow25thJune}>Tomorrow 25th June 2023</Text>
        <Image
          style={[styles.componentChild2, styles.groupIconLayout]}
          contentFit="cover"
        //   source={require("../assets/group-2818.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <View
          style={[styles.componentChild25, styles.componentChildPosition6]}
        />
        <Text style={[styles.olympiacoFc1, styles.olympiacoTypo]}>
          Olympiaco FC
        </Text>
        <Text style={[styles.berugaFc2, styles.berugaTypo1]}>BERUGA FC</Text>
        <Text style={[styles.berugaFc3, styles.berugaTypo]}>BERUGA FC</Text>
        <Image
          style={[styles.componentChild26, styles.gameWeek74Position]}
          contentFit="cover"
        //   source={require("../assets/vector-39.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Text style={[styles.gameWeek74, styles.gameWeek74Position]}>
          Game week 7
        </Text>
        <View style={[styles.componentChild27, styles.componentChildLayout7]} />
        <Text style={[styles.theCardinal1, styles.theTypo]}>
          THE CARDINAL...
        </Text>
        <Text style={[styles.legendsFc2, styles.berugaTypo]}>LEGENDS FC</Text>
        <Image
          style={[styles.componentChild28, styles.gameWeek75Position]}
          contentFit="cover"
        //   source={require("../assets/vector-39.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Text style={[styles.gameWeek75, styles.gameWeek75Position]}>
          Game week 7
        </Text>
        <View style={[styles.componentChild29, styles.componentChildLayout7]} />
        <Text style={[styles.roversFc1, styles.roversTypo]}>ROVERS FC</Text>
        <Text style={[styles.extremeFc1, styles.extremeTypo]}>EXTREME FC</Text>
        <Image
          style={[styles.componentChild30, styles.gameWeek76Position]}
          contentFit="cover"
        //   source={require("../assets/vector-41.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",   
        }}
        />
        <Text style={[styles.gameWeek76, styles.gameWeek76Position]}>
          Game week 7
        </Text>
        <View style={[styles.componentChild31, styles.componentChildLayout7]} />
        <View style={[styles.componentChild32, styles.componentChildLayout7]} />
        <Text style={[styles.legendsFc3, styles.legendsTypo]}>LEGENDS FC</Text>
        <Image
          style={[styles.componentChild33, styles.gameWeek77Position]}
          contentFit="cover"
        //   source={require("../assets/vector-41.png")}
        source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Text style={[styles.gameWeek77, styles.gameWeek77Position]}>
          Game week 7
        </Text>
        <Image
          style={[styles.componentChild34, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.componentChild35, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.componentChild36, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.componentChild37, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.image1658Icon, styles.iconLayout5]}
          contentFit="cover"
source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1659Icon, styles.iconLayout4]}
          contentFit="cover"
          source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1660Icon, styles.iconLayout3]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1661Icon, styles.iconLayout8]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1662Icon, styles.iconLayout2]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1663Icon, styles.iconLayout1]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1664Icon, styles.iconLayout6]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1665Icon, styles.iconLayout]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <View style={[styles.groupParent, styles.groupParentPosition1]}>
          <View
            style={[styles.rectangleWrapper1, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent1, styles.groupParentPosition1]}>
          <View
            style={[styles.rectangleWrapper2, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent2, styles.groupParentPosition1]}>
          <View
            style={[styles.rectangleWrapper3, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent3, styles.groupParentPosition1]}>
          <View
            style={[styles.rectangleWrapper4, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <Text style={[styles.olympiacoFc2, styles.theTypo]}>Olympiaco FC</Text>
        <Text style={[styles.berugaFc4, styles.olympiacoTypo]}>BERUGA FC</Text>
        <Text style={[styles.berugaFc5, styles.berugaFc5Typo]}>BERUGA FC</Text>
        <Image
          style={[styles.componentChild38, styles.componentChildLayout1]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Text style={[styles.gameWeek78, styles.gameWeek78Position]}>
          Game week 7
        </Text>
        <View
          style={[styles.componentChild39, styles.componentChildPosition]}
        />
        <Text style={[styles.theCardinal2, styles.olympiacoTypo]}>
          THE CARDINAL...
        </Text>
        <Text style={[styles.legendsFc4, styles.berugaFc5Typo]}>
          LEGENDS FC
        </Text>
        <Image
          style={[styles.componentChild40, styles.gameWeek79Position]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Text style={[styles.gameWeek79, styles.gameWeek79Position]}>
          Game week 7
        </Text>
        <View
          style={[styles.componentChild41, styles.componentChildPosition]}
        />
        <Text style={[styles.roversFc2, styles.olympiacoTypo]}>ROVERS FC</Text>
        <Text style={[styles.extremeFc2, styles.extremeTypo]}>EXTREME FC</Text>
        <Image
          style={[styles.componentChild42, styles.gameWeek710Position]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Text style={[styles.gameWeek710, styles.gameWeek710Position]}>
          Game week 7
        </Text>
        <View
          style={[styles.componentChild43, styles.componentChildPosition]}
        />
        <View
          style={[styles.componentChild44, styles.componentChildPosition]}
        />
        <Text style={[styles.legendsFc5, styles.olympiacoTypo]}>
          LEGENDS FC
        </Text>
        <Image
          style={[styles.componentChild45, styles.gameWeek711Position]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Text style={[styles.gameWeek711, styles.gameWeek711Position]}>
          Game week 7
        </Text>
        <Image
          style={[styles.componentChild46, styles.componentChildLayout]}
          contentFit="cover"
        //   source={require("../assets/group-2844.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.componentChild47, styles.componentChildLayout]}
          contentFit="cover"
        //   source={require("../assets/group-2844.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.componentChild48, styles.componentChildLayout]}
          contentFit="cover"
        //   source={require("../assets/group-2844.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.componentChild49, styles.componentChildLayout]}
          contentFit="cover"
        //   source={require("../assets/group-2844.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={styles.image1666Icon}
          contentFit="cover"
        //   source={require("../assets/image-1666.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={styles.image1667Icon}
          contentFit="cover"
        //   source={require("../assets/image-1667.png")}/
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1668Icon, styles.iconLayout9]}
          contentFit="cover"
        //   source={require("../assets/image-1668.png")}
        
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1669Icon, styles.iconLayout9]}
          contentFit="cover"
        //   source={require("../assets/image-1668.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={styles.image1670Icon}
          contentFit="cover"
        //   source={require("../assets/image-1670.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1671Icon, styles.iconLayout7]}
          contentFit="cover"
        //   source={require("../assets/image-1671.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1672Icon, styles.iconLayout7]}
          contentFit="cover"
        //   source={require("../assets/image-1671.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={styles.image1673Icon}
          contentFit="cover"
        //   source={require("../assets/image-1673.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <View style={[styles.groupParent4, styles.groupParentPosition]}>
          <View
            style={[styles.rectangleWrapper5, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent5, styles.groupParentPosition]}>
          <View
            style={[styles.rectangleWrapper6, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent6, styles.groupParentPosition]}>
          <View
            style={[styles.rectangleWrapper7, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent7, styles.groupParentPosition]}>
          <View
            style={[styles.rectangleWrapper8, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <Text style={[styles.saturday25thJune, styles.juneTypo]}>
          Saturday 25th June 2023
        </Text>
        <Image
          style={[styles.componentChild50, styles.groupIconLayout]}
          contentFit="cover"
        //   source={require("../assets/group-2852.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <View
          style={[styles.componentChild51, styles.componentChildPosition6]}
        />
        <Text style={[styles.olympiacoFc3, styles.olympiacoTypo]}>
          Olympiaco FC
        </Text>
        <Text style={[styles.berugaFc6, styles.berugaTypo1]}>BERUGA FC</Text>
        <Text style={[styles.berugaFc7, styles.berugaTypo]}>BERUGA FC</Text>
        <Image
          style={[styles.componentChild52, styles.gameWeek8Position]}
          contentFit="cover"
        //   source={require("../assets/vector-39.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Text style={[styles.gameWeek8, styles.gameWeek8Position]}>
          Game week 8
        </Text>
        <View style={[styles.componentChild53, styles.componentChildLayout7]} />
        <Text style={[styles.theCardinal3, styles.theTypo]}>
          THE CARDINAL...
        </Text>
        <Text style={[styles.legendsFc6, styles.berugaTypo]}>LEGENDS FC</Text>
        <Image
          style={[styles.componentChild54, styles.gameWeek81Position]}
          contentFit="cover"
        //   source={require("../assets/vector-39.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Text style={[styles.gameWeek81, styles.gameWeek81Position]}>
          Game week 8
        </Text>
        <View style={[styles.componentChild55, styles.componentChildLayout7]} />
        <Text style={[styles.roversFc3, styles.roversTypo]}>ROVERS FC</Text>
        <Text style={[styles.extremeFc3, styles.extremeTypo]}>EXTREME FC</Text>
        <Image
          style={[styles.componentChild56, styles.componentChildLayout6]}
          contentFit="cover"
        //   source={require("../assets/vector-41.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <View style={[styles.componentChild57, styles.componentChildLayout7]} />
        <View style={[styles.componentChild58, styles.componentChildLayout7]} />
        <Text style={[styles.legendsFc7, styles.legendsTypo]}>LEGENDS FC</Text>
        <Image
          style={[styles.componentChild59, styles.gameWeek82Position]}
          contentFit="cover"
        //   source={require("../assets/vector-41.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Text style={[styles.gameWeek82, styles.gameWeek82Position]}>
          Game week 8
        </Text>
        <Image
          style={[styles.componentChild60, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.componentChild61, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.componentChild62, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.componentChild63, styles.componentChildLayout4]}
          contentFit="cover"
          
        />
        <Image
          style={[styles.image1674Icon, styles.iconLayout5]}
          contentFit="cover"
source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1675Icon, styles.iconLayout4]}
          contentFit="cover"
          source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1676Icon, styles.iconLayout3]}
          contentFit="cover"
          source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1677Icon, styles.iconLayout8]}
          contentFit="cover"
source={{
            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  
        }}
        />
        <Image
          style={[styles.image1678Icon, styles.iconLayout2]}
          contentFit="cover"
        //   source={require("../assets/image-1654.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1679Icon, styles.iconLayout1]}
          contentFit="cover"
        //   source={require("../assets/image-1655.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1680Icon, styles.iconLayout6]}
          contentFit="cover"
        //   source={require("../assets/image-1655.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.image1681Icon, styles.iconLayout]}
          contentFit="cover"
        //   source={require("../assets/image-1657.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <View style={[styles.groupParent8, styles.groupParentPosition1]}>
          <View
            style={[styles.rectangleWrapper9, styles.rectangleWrapperShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent9, styles.groupParentPosition1]}>
          <View
            style={[
              styles.rectangleWrapper10,
              styles.rectangleWrapperShadowBox,
            ]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent10, styles.groupParentPosition1]}>
          <View
            style={[
              styles.rectangleWrapper11,
              styles.rectangleWrapperShadowBox,
            ]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <View style={[styles.groupParent11, styles.groupParentPosition1]}>
          <View
            style={[
              styles.rectangleWrapper12,
              styles.rectangleWrapperShadowBox,
            ]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
          <Text style={[styles.pm1, styles.pmTypo]}>2:00 PM</Text>
        </View>
        <Text style={[styles.gameWeek83, styles.gameTypo]}>Game week 8</Text>
        <Image
          style={[styles.iconFilter, styles.iconFilterPosition]}
          contentFit="cover"
        //   source={require("../assets/-icon-filter.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.iconArrowRight, styles.groupIconLayout]}
          contentFit="cover"
        //   source={require("../assets/-icon-arrow-right.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
        <Image
          style={[styles.iconArrowsSort, styles.groupIconLayout]}
          contentFit="cover"
        //   source={require("../assets/-icon-arrows-sort.png")}
        source={{            uri: "https://static.overlay-tech.com/assets/0e7c2b7a-9b7a-4b7e-9e1a-9b8b5b2a2b7f.png",  }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: "#b66194",
    borderRadius: 10,
    left: "2.63%",
    right: "2.57%",
    width: "94.81%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  juneTypo: {
    letterSpacing: -0.5,
    fontSize: 25,
    left: "31.52%",
    width: "36.89%",
    height: "1.1%",
    textAlign: "left",
    color: "#50165f",
    fontFamily: "League Gothic_regular",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  componentChildPosition6: {
    borderTopWidth: 0.7,
    left: "2.54%",
    right: "2.49%",
    width: "94.97%",
    height: "0.03%",
    borderColor: "#ff0000",
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleWrapperShadowBox: {
    shadowColor: "rgba(170, 16, 16, 0.5)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  groupChildPosition: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  olympiacoTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
    lineHeight: 20,
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  berugaTypo1: {
    left: "16.17%",
    width: "15.65%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 12,
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  berugaTypo: {
    left: "15.47%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 12,
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  componentChildLayout8: {
    left: "30.71%",
    right: "30.65%",
    width: "38.64%",
    height: "0.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameTypo: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
  },
  liveTypo: {
    textShadowColor: "#aa1010",
    letterSpacing: 1.4,
    fontSize: 14,
    width: "7.24%",
    left: "14.54%",
    fontFamily: "Poppins_light",
    fontWeight: "300",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: "#fff",
    lineHeight: 20,
    height: "0.88%",
    textAlign: "left",
    position: "absolute",
  },
  componentChildLayout7: {
    borderTopWidth: 0.5,
    height: "0.02%",
    borderStyle: "solid",
  },
  theTypo: {
    left: "71.51%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 12,
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  componentChildShadowBox: {
    borderRightWidth: 0.7,
    shadowColor: "#aa1010",
    left: "49.48%",
    right: "50.36%",
    width: "0.16%",
    height: "1.27%",
    borderColor: "#ff0000",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  componentChildPosition4: {
    top: "14.23%",
    position: "absolute",
  },
  componentChildPosition1: {
    top: "19.26%",
    position: "absolute",
  },
  roversTypo: {
    left: "72.15%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  extremeTypo: {
    width: "16.11%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 12,
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  legendsTypo: {
    left: "70.99%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  componentChildLayout6: {
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek73Position: {
    top: "24.29%",
    height: "0.88%",
    position: "absolute",
  },
  iconFilterPosition: {
    bottom: "94.8%",
    position: "absolute",
  },
  componentChildLayout5: {
    left: "82.95%",
    right: "9.61%",
    width: "7.43%",
    height: "1.46%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChildLayout4: {
    left: "83.89%",
    right: "10.51%",
    width: "5.6%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "1.1%",
    position: "absolute",
  },
  iconLayout8: {
    left: "60.77%",
    right: "29.66%",
    width: "9.57%",
    height: "1.81%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout6: {
    right: "60.95%",
    width: "7.71%",
    height: "1.63%",
    left: "31.35%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChildLayout3: {
    left: "7.53%",
    right: "86.87%",
    height: "1.06%",
    width: "5.6%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChildLayout2: {
    left: "8%",
    right: "87.33%",
    width: "4.67%",
    height: "0.88%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textTypo2: {
    letterSpacing: -1.2,
    fontSize: 24,
    width: "3.5%",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    height: "0.88%",
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    left: "52.13%",
    letterSpacing: -1.2,
    fontSize: 24,
    width: "3.5%",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    height: "0.88%",
    textAlign: "left",
    position: "absolute",
  },
  groupParentPosition1: {
    right: "41.1%",
    left: "41.16%",
    width: "17.75%",
    height: "1.32%",
    position: "absolute",
  },
  pmTypo: {
    letterSpacing: -0.7,
    fontSize: 15,
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    left: "46.06%",
    right: "44.6%",
    width: "9.34%",
    height: "1.1%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 20,
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    left: "0%",
    position: "absolute",
  },
  gameWeek74Position: {
    top: "32.41%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek75Position: {
    top: "37.43%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek76Position: {
    top: "42.46%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek77Position: {
    top: "47.49%",
    height: "0.88%",
    position: "absolute",
  },
  iconLayout5: {
    left: "60.07%",
    right: "28.02%",
    width: "11.91%",
    height: "2.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout4: {
    left: "60.54%",
    right: "28.49%",
    width: "10.97%",
    height: "2.03%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout3: {
    left: "30.88%",
    right: "59.55%",
    width: "9.57%",
    height: "1.81%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout2: {
    right: "60.25%",
    width: "8.17%",
    left: "31.58%",
    height: "1.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout1: {
    left: "31.81%",
    right: "60.48%",
    width: "7.71%",
    height: "1.63%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout: {
    right: "28.25%",
    width: "12.14%",
    height: "2.47%",
    left: "59.6%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  berugaFc5Typo: {
    left: "15.53%",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 12,
    height: "0.88%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  componentChildLayout1: {
    right: "30.71%",
    left: "30.88%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek78Position: {
    top: "52.51%",
    height: "0.88%",
    position: "absolute",
  },
  componentChildPosition: {
    right: "4.85%",
    borderTopWidth: 0.5,
    width: "90.02%",
    height: "0.02%",
    borderColor: "#ff0000",
    borderStyle: "solid",
    left: "5.14%",
    position: "absolute",
  },
  gameWeek79Position: {
    top: "57.54%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek710Position: {
    top: "62.57%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek711Position: {
    top: "67.59%",
    height: "0.88%",
    position: "absolute",
  },
  componentChildLayout: {
    left: "83.95%",
    right: "10.45%",
    width: "5.6%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "1.1%",
    position: "absolute",
  },
  iconLayout9: {
    width: "9.57%",
    height: "1.81%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout7: {
    width: "7.71%",
    height: "1.63%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupParentPosition: {
    left: "41.21%",
    right: "41.04%",
    width: "17.75%",
    height: "1.32%",
    position: "absolute",
  },
  gameWeek8Position: {
    top: "75.97%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek81Position: {
    top: "81%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek82Position: {
    top: "91.05%",
    height: "0.88%",
    position: "absolute",
  },
  componentChild: {
    height: "92.28%",
    top: "6.79%",
    bottom: "0.93%",
    left: "0.06%",
    backgroundColor: "rgba(255, 143, 143, 0.74)",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    right: "0%",
    width: "99.94%",
    position: "absolute",
  },
  componentItem: {
    height: "6.31%",
    right: "0.06%",
    bottom: "93.69%",
    backgroundColor: "#ff8f8f",
    justifyContent: "center",
    alignItems: "center",
    left: "0%",
    top: "0%",
    width: "99.94%",
    position: "absolute",
  },
  fixtures20222023: {
    fontSize: 30,
    textAlign: "left",
    color: "#50165f",
    fontFamily: "LeagueGothic-Regular",
    letterSpacing: -0.6,
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleWrapperPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    width: "43.49%",
    right: "51.37%",
    left: "5.14%",
    bottom: "98.19%",
    top: "0.44%",
    height: "1.37%",
    position: "absolute",
  },
  groupContainer: {
    width: "25.69%",
    right: "11.44%",
    left: "62.87%",
    bottom: "98.19%",
    top: "0.44%",
    height: "1.37%",
    position: "absolute",
  },
  componentInner: {
    height: "22.71%",
    top: "7.23%",
    bottom: "70.06%",
  },
  rectangleView: {
    height: "22.93%",
    top: "73.77%",
    bottom: "3.31%",
  },
  componentChild1: {
    height: "42.81%",
    top: "30.42%",
    bottom: "26.76%",
  },
  today25thJune: {
    top: "7.54%",
  },
  groupIcon: {
    top: "7.5%",
    bottom: "91.01%",
    left: "82.2%",
    right: "9.86%",
    width: "7.94%",
    height: "1.5%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChild2: {
    top: "30.69%",
    bottom: "67.81%",
    left: "82.2%",
    right: "9.86%",
    width: "7.94%",
    height: "1.5%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  lineView: {
    top: "9.21%",
    bottom: "90.76%",
  },
  groupChild: {
    backgroundColor: "#50165f",
    borderColor: "#ff0000",
    borderWidth: 0.5,
    borderRadius: 5,
  },
  rectangleWrapper: {
    top: "10.8%",
    bottom: "87.87%",
    left: "41.1%",
    right: "41.16%",
    width: "17.75%",
    height: "1.32%",
    shadowColor: "rgba(170, 16, 16, 0.5)",
    position: "absolute",
  },
  rectangleContainer: {
    top: "15.83%",
    bottom: "82.85%",
    left: "41.1%",
    right: "41.16%",
    width: "17.75%",
    height: "1.32%",
    shadowColor: "rgba(170, 16, 16, 0.5)",
    position: "absolute",
  },
  rectangleFrame: {
    top: "20.86%",
    bottom: "77.82%",
    left: "41.1%",
    right: "41.16%",
    width: "17.75%",
    height: "1.32%",
    shadowColor: "rgba(170, 16, 16, 0.5)",
    position: "absolute",
  },
  olympiacoFc: {
    top: "10.85%",
    left: "71.45%",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    width: "20.32%",
  },
  berugaFc: {
    top: "10.98%",
  },
  berugaFc1: {
    top: "25.97%",
    width: "15.65%",
  },
  vectorIcon: {
    top: "9.2%",
    bottom: "89.89%",
    position: "absolute",
  },
  gameWeek7: {
    top: "9.22%",
    height: "0.88%",
    left: "41.1%",
    position: "absolute",
  },
  live: {
    top: "9.44%",
  },
  live1: {
    top: "14.46%",
  },
  live2: {
    top: "19.49%",
  },
  componentChild3: {
    bottom: "85.75%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    top: "14.23%",
    position: "absolute",
  },
  theCardinal: {
    top: "15.87%",
    width: "24.29%",
  },
  legendsFc: {
    top: "16.01%",
    width: "16.81%",
  },
  componentChild4: {
    top: "10.83%",
    bottom: "87.9%",
  },
  componentChild5: {
    top: "15.86%",
    bottom: "82.88%",
  },
  componentChild6: {
    top: "20.88%",
    bottom: "77.85%",
  },
  componentChild7: {
    bottom: "84.87%",
    left: "30.71%",
    right: "30.65%",
    width: "38.64%",
    height: "0.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek71: {
    top: "14.24%",
    height: "0.88%",
    left: "41.1%",
    position: "absolute",
  },
  componentChild8: {
    bottom: "80.72%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderStyle: "solid",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderColor: "#ff0000",
  },
  roversFc: {
    top: "20.9%",
  },
  extremeFc: {
    top: "21.03%",
    left: "14.54%",
    width: "16.11%",
  },
  componentChild9: {
    bottom: "79.84%",
    left: "30.71%",
    right: "30.65%",
    width: "38.64%",
    height: "0.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek72: {
    top: "19.27%",
    height: "0.88%",
    left: "41.1%",
    position: "absolute",
  },
  componentChild10: {
    top: "24.28%",
    bottom: "75.69%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  componentChild11: {
    top: "29.31%",
    bottom: "70.67%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  legendsFc1: {
    top: "25.93%",
  },
  componentChild12: {
    bottom: "74.82%",
    top: "24.29%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek73: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  groupChild1: {
    backgroundColor: "#c2628e",
    borderColor: "rgba(40, 20, 158, 0.44)",
  },
  sortByTeam: {
    height: "57.5%",
    width: "36.34%",
    top: "25%",
    left: "31.7%",
    fontSize: 18,
    letterSpacing: 0.9,
    fontFamily: "Poppins_regular",
    color: "#fff",
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  groupChild2: {
    height: "67.92%",
    width: "5.67%",
    top: "13.33%",
    right: "84.15%",
    bottom: "18.75%",
    left: "10.18%",
    position: "absolute",
  },
  rectangleGroup: {
    height: "1.76%",
    width: "90.6%",
    top: "3.44%",
    right: "4.73%",
    left: "4.67%",
  },
  componentChild13: {
    height: "0.13%",
    width: "95.51%",
    top: "2.36%",
    right: "2.22%",
    bottom: "97.51%",
    left: "2.28%",
    borderColor: "#50165f",
    borderTopWidth: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  componentChild14: {
    width: "100.06%",
    top: "99.99%",
    bottom: "-0.01%",
    left: "-0.06%",
    borderColor: "rgba(255, 0, 0, 0.15)",
    borderTopWidth: 0.5,
    height: "0.02%",
    right: "0%",
    position: "absolute",
  },
  componentChild15: {
    top: "9.39%",
    bottom: "89.15%",
  },
  componentChild16: {
    bottom: "84.17%",
    top: "14.37%",
  },
  componentChild17: {
    bottom: "79.14%",
    top: "19.4%",
  },
  componentChild18: {
    top: "24.38%",
    bottom: "74.51%",
  },
  image1650Icon: {
    height: "2.82%",
    top: "15.3%",
    right: "27.09%",
    bottom: "81.88%",
    left: "59.14%",
    width: "13.78%",
    position: "absolute",
  },
  image1651Icon: {
    height: "2.38%",
    width: "12.84%",
    top: "10.41%",
    right: "27.55%",
    bottom: "87.21%",
    left: "59.6%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  image1652Icon: {
    height: "2.16%",
    width: "11.44%",
    top: "15.65%",
    right: "58.61%",
    bottom: "82.19%",
    left: "29.95%",
    position: "absolute",
  },
  image1653Icon: {
    top: "25.57%",
    bottom: "72.62%",
  },
  image1654Icon: {
    width: "10.04%",
    top: "20.55%",
    right: "59.31%",
    bottom: "77.56%",
    left: "30.65%",
    height: "1.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  image1655Icon: {
    height: "1.98%",
    top: "10.67%",
    right: "59.08%",
    bottom: "87.35%",
    left: "31.35%",
    width: "9.57%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  image1656Icon: {
    top: "25.66%",
    bottom: "72.71%",
  },
  image1657Icon: {
    width: "14.01%",
    top: "20.24%",
    right: "27.32%",
    bottom: "77.29%",
    left: "58.67%",
    height: "2.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  ellipseIcon: {
    top: "9.35%",
    bottom: "89.59%",
  },
  componentChild19: {
    bottom: "84.57%",
    top: "14.37%",
  },
  componentChild20: {
    bottom: "79.54%",
    top: "19.4%",
  },
  componentChild21: {
    bottom: "89.68%",
    top: "9.44%",
  },
  componentChild22: {
    bottom: "84.66%",
    top: "14.46%",
  },
  componentChild23: {
    bottom: "79.63%",
    top: "19.49%",
  },
  text: {
    left: "43.72%",
    letterSpacing: -1.2,
    fontSize: 24,
    width: "3.5%",
    top: "11.07%",
  },
  text1: {
    top: "16.09%",
    left: "43.72%",
    letterSpacing: -1.2,
    fontSize: 24,
    width: "3.5%",
  },
  text2: {
    top: "21.12%",
    left: "43.72%",
    letterSpacing: -1.2,
    fontSize: 24,
    width: "3.5%",
  },
  text3: {
    left: "52.6%",
    top: "11.07%",
    letterSpacing: -1.2,
    fontSize: 24,
    width: "3.5%",
  },
  text4: {
    top: "16.09%",
  },
  text5: {
    top: "21.12%",
  },
  groupView: {
    top: "25.75%",
    bottom: "72.93%",
    left: "41.16%",
    shadowColor: "rgba(170, 16, 16, 0.5)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  pm: {
    left: "44.19%",
    width: "13.78%",
    top: "25.97%",
    height: "0.88%",
  },
  ht: {
    width: "80%",
    top: "20%",
    height: "80%",
  },
  text6: {
    display: "none",
    height: "100%",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 20,
    top: "0%",
    width: "100%",
  },
  view: {
    width: "42.5%",
    bottom: "20%",
    left: "57.5%",
    height: "80%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  htParent: {
    top: "12.65%",
    bottom: "86.24%",
  },
  text8: {
    height: "100%",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 20,
    top: "0%",
    width: "100%",
  },
  parent: {
    top: "17.68%",
    bottom: "81.22%",
  },
  group: {
    top: "22.71%",
    bottom: "76.19%",
  },
  tomorrow25thJune: {
    width: "38.76%",
    top: "30.73%",
    left: "31.58%",
    letterSpacing: -0.5,
    fontSize: 25,
    height: "1.1%",
    textAlign: "left",
    color: "#50165f",
    fontFamily: "League Gothic_regular",
    position: "absolute",
  },
  componentChild25: {
    top: "32.4%",
    bottom: "67.57%",
  },
  olympiacoFc1: {
    top: "34.04%",
    left: "71.45%",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    width: "20.32%",
  },
  berugaFc2: {
    top: "34.17%",
  },
  berugaFc3: {
    top: "49.16%",
    width: "15.65%",
  },
  componentChild26: {
    bottom: "66.71%",
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek74: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  componentChild27: {
    top: "37.42%",
    bottom: "62.56%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  theCardinal1: {
    top: "39.07%",
    width: "24.29%",
  },
  legendsFc2: {
    top: "39.2%",
    width: "16.81%",
  },
  componentChild28: {
    bottom: "61.68%",
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek75: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  componentChild29: {
    top: "42.45%",
    bottom: "57.53%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  roversFc1: {
    top: "44.09%",
  },
  extremeFc1: {
    top: "44.22%",
    left: "14.54%",
    width: "16.11%",
  },
  componentChild30: {
    bottom: "56.66%",
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek76: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  componentChild31: {
    top: "47.48%",
    bottom: "52.5%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  componentChild32: {
    top: "52.5%",
    bottom: "47.48%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  legendsFc3: {
    top: "49.12%",
  },
  componentChild33: {
    bottom: "51.63%",
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek77: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  componentChild34: {
    top: "32.58%",
    bottom: "66.31%",
  },
  componentChild35: {
    top: "37.57%",
    bottom: "61.33%",
  },
  componentChild36: {
    top: "42.59%",
    bottom: "56.31%",
  },
  componentChild37: {
    top: "47.57%",
    bottom: "51.32%",
  },
  image1658Icon: {
    top: "38.49%",
    bottom: "59.04%",
  },
  image1659Icon: {
    top: "33.6%",
    bottom: "64.37%",
  },
  image1660Icon: {
    top: "38.84%",
    bottom: "59.35%",
  },
  image1661Icon: {
    top: "48.77%",
    bottom: "49.43%",
  },
  image1662Icon: {
    top: "43.74%",
    bottom: "54.37%",
  },
  image1663Icon: {
    top: "33.86%",
    bottom: "64.51%",
  },
  image1664Icon: {
    top: "48.85%",
    bottom: "49.51%",
  },
  image1665Icon: {
    top: "43.43%",
    bottom: "54.1%",
  },
  rectangleWrapper1: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  pm1: {
    height: "66.67%",
    width: "77.63%",
    top: "16.67%",
    left: "17.11%",
  },
  groupParent: {
    top: "48.94%",
    bottom: "49.74%",
    left: "41.16%",
  },
  rectangleWrapper2: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent1: {
    top: "44.05%",
    bottom: "54.63%",
    left: "41.16%",
  },
  rectangleWrapper3: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent2: {
    top: "39.02%",
    bottom: "59.66%",
    left: "41.16%",
  },
  rectangleWrapper4: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent3: {
    top: "33.99%",
    bottom: "64.68%",
    left: "41.16%",
  },
  olympiacoFc2: {
    top: "54.14%",
    width: "20.32%",
  },
  berugaFc4: {
    top: "54.28%",
    left: "16.23%",
    width: "15.65%",
  },
  berugaFc5: {
    top: "69.27%",
    width: "15.65%",
  },
  componentChild38: {
    bottom: "46.6%",
    top: "52.51%",
    height: "0.88%",
    position: "absolute",
  },
  gameWeek78: {
    left: "41.16%",
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
  },
  componentChild39: {
    top: "57.53%",
    bottom: "42.45%",
  },
  theCardinal2: {
    top: "59.17%",
    left: "71.57%",
    width: "24.29%",
  },
  legendsFc4: {
    top: "59.3%",
    width: "16.81%",
  },
  componentChild40: {
    bottom: "41.58%",
    right: "30.71%",
    left: "30.88%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek79: {
    left: "41.16%",
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
  },
  componentChild41: {
    top: "62.56%",
    bottom: "37.42%",
  },
  roversFc2: {
    top: "64.2%",
    left: "72.21%",
    width: "20.32%",
  },
  extremeFc2: {
    top: "64.33%",
    left: "14.59%",
  },
  componentChild42: {
    bottom: "36.55%",
    right: "30.71%",
    left: "30.88%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek710: {
    left: "41.16%",
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
  },
  componentChild43: {
    top: "67.58%",
    bottom: "32.4%",
  },
  componentChild44: {
    top: "72.61%",
    bottom: "27.37%",
  },
  legendsFc5: {
    top: "69.22%",
    left: "71.04%",
    width: "20.32%",
  },
  componentChild45: {
    bottom: "31.53%",
    right: "30.71%",
    left: "30.88%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek711: {
    left: "41.16%",
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
  },
  componentChild46: {
    top: "52.69%",
    bottom: "46.21%",
  },
  componentChild47: {
    top: "57.67%",
    bottom: "41.23%",
  },
  componentChild48: {
    top: "62.7%",
    bottom: "36.2%",
  },
  componentChild49: {
    top: "67.68%",
    bottom: "31.22%",
  },
  image1666Icon: {
    top: "58.6%",
    right: "27.96%",
    bottom: "38.93%",
    left: "60.13%",
    width: "11.91%",
    height: "2.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  image1667Icon: {
    top: "53.7%",
    right: "28.43%",
    bottom: "44.27%",
    left: "60.59%",
    width: "10.97%",
    height: "2.03%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  image1668Icon: {
    top: "58.95%",
    right: "59.49%",
    bottom: "39.24%",
    left: "30.94%",
  },
  image1669Icon: {
    top: "68.87%",
    right: "29.6%",
    bottom: "29.32%",
    left: "60.83%",
  },
  image1670Icon: {
    top: "63.84%",
    right: "60.19%",
    bottom: "34.26%",
    left: "31.64%",
    width: "8.17%",
    height: "1.9%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  image1671Icon: {
    top: "53.97%",
    right: "60.42%",
    bottom: "44.4%",
    left: "31.87%",
  },
  image1672Icon: {
    top: "68.96%",
    right: "60.89%",
    bottom: "29.41%",
    left: "31.41%",
  },
  image1673Icon: {
    top: "63.54%",
    right: "28.2%",
    bottom: "33.99%",
    left: "59.66%",
    width: "12.14%",
    height: "2.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleWrapper5: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent4: {
    top: "69.05%",
    bottom: "29.63%",
  },
  rectangleWrapper6: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent5: {
    top: "64.15%",
    bottom: "34.52%",
  },
  rectangleWrapper7: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent6: {
    top: "59.13%",
    bottom: "39.55%",
  },
  rectangleWrapper8: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent7: {
    top: "54.1%",
    bottom: "44.58%",
  },
  saturday25thJune: {
    top: "74.29%",
  },
  componentChild50: {
    top: "74.25%",
    bottom: "24.25%",
    left: "82.2%",
    right: "9.86%",
    width: "7.94%",
    height: "1.5%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChild51: {
    top: "75.96%",
    bottom: "24.01%",
  },
  olympiacoFc3: {
    top: "77.6%",
    left: "71.45%",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(170, 16, 16, 0.5)",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    width: "20.32%",
  },
  berugaFc6: {
    top: "77.73%",
  },
  berugaFc7: {
    top: "92.72%",
    width: "15.65%",
  },
  componentChild52: {
    bottom: "23.15%",
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek8: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  componentChild53: {
    top: "80.99%",
    bottom: "18.99%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  theCardinal3: {
    top: "82.63%",
    width: "24.29%",
  },
  legendsFc6: {
    top: "82.76%",
    width: "16.81%",
  },
  componentChild54: {
    bottom: "18.12%",
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek81: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  componentChild55: {
    top: "86.01%",
    bottom: "13.97%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  roversFc3: {
    top: "87.65%",
  },
  extremeFc3: {
    top: "87.79%",
    left: "14.54%",
    width: "16.11%",
  },
  componentChild56: {
    top: "86.02%",
    bottom: "13.1%",
    height: "0.88%",
    position: "absolute",
  },
  componentChild57: {
    top: "91.04%",
    bottom: "8.94%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  componentChild58: {
    top: "96.06%",
    bottom: "3.91%",
    left: "5.08%",
    right: "4.9%",
    width: "90.02%",
    borderTopWidth: 0.5,
    height: "0.02%",
    borderColor: "#ff0000",
    position: "absolute",
  },
  legendsFc7: {
    top: "92.68%",
  },
  componentChild59: {
    bottom: "8.07%",
    left: "30.82%",
    right: "30.76%",
    width: "38.41%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  gameWeek82: {
    fontFamily: "Poppins_light",
    fontWeight: "300",
    color: "#fff",
    lineHeight: 20,
    fontSize: 12,
    width: "20.32%",
    textAlign: "left",
    letterSpacing: -0.6,
    left: "41.1%",
  },
  componentChild60: {
    top: "76.15%",
    bottom: "22.75%",
  },
  componentChild61: {
    top: "81.13%",
    bottom: "17.77%",
  },
  componentChild62: {
    top: "86.16%",
    bottom: "12.74%",
  },
  componentChild63: {
    top: "91.14%",
    bottom: "7.76%",
  },
  image1674Icon: {
    top: "82.05%",
    bottom: "15.48%",
  },
  image1675Icon: {
    top: "77.16%",
    bottom: "20.81%",
  },
  image1676Icon: {
    top: "82.41%",
    bottom: "15.78%",
  },
  image1677Icon: {
    top: "92.33%",
    bottom: "5.86%",
  },
  image1678Icon: {
    top: "87.3%",
    bottom: "10.8%",
  },
  image1679Icon: {
    top: "77.43%",
    bottom: "20.94%",
  },
  image1680Icon: {
    top: "92.42%",
    bottom: "5.95%",
  },
  image1681Icon: {
    top: "86.99%",
    bottom: "10.54%",
  },
  rectangleWrapper9: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent8: {
    top: "92.5%",
    bottom: "6.17%",
    left: "41.16%",
  },
  rectangleWrapper10: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent9: {
    top: "87.61%",
    bottom: "11.07%",
    left: "41.16%",
  },
  rectangleWrapper11: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent10: {
    top: "82.58%",
    bottom: "16.09%",
    left: "41.16%",
  },
  rectangleWrapper12: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParent11: {
    top: "77.56%",
    bottom: "21.12%",
    left: "41.16%",
  },
  gameWeek83: {
    top: "85.98%",
    left: "40.45%",
    height: "0.88%",
    position: "absolute",
  },
  iconFilter: {
    width: "7.01%",
    top: "3.84%",
    right: "9.81%",
    left: "83.19%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "1.37%",
    bottom: "94.8%",
  },
  iconArrowRight: {
    height: "0.71%",
    width: "6.54%",
    top: "0.88%",
    right: "44.13%",
    bottom: "98.41%",
    left: "49.33%",
    position: "absolute",
  },
  iconArrowsSort: {
    height: "1.56%",
    width: "8.27%",
    top: "0.49%",
    right: "5.04%",
    bottom: "97.95%",
    left: "86.69%",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    width: 428,
    height: 2268,
    position: "absolute",
  },
  componentParent: {
    flex: 1,
    height: 494,
    width: "100%",
  },
});

export default FrameScreen;
