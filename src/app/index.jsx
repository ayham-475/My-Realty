
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F7F9]">
      <View className="flex-1 px-6 pt-16">
        
        {/* قسم الترحيب (Header) */}
        <View className="items-center mb-12">
          <Text className="text-[32px] font-extrabold text-[#111111] text-center leading-[45px] mb-3">
            مرحباً بك في{"\n"}نظام إدارة الأملاك
          </Text>
          <Text className="text-base text-gray-500 font-medium">
            الرجاء تحديد صفتك للمتابعة
          </Text>
        </View>

        {/* قسم الخيارات (Cards) */}
        <View className="space-y-6">
          
          {/* البطاقة الأولى: المالك */}
          <TouchableOpacity 
            activeOpacity={0.8} 
            className="bg-[#262626] rounded-[32px] py-8 px-6 items-center shadow-lg shadow-black/20"
          >
            {/* دائرة الأيقونة */}
            <View className="w-16 h-16 bg-white rounded-full items-center justify-center mb-4">
              <FontAwesome5 name="building" size={24} color="#FF4B4B" />
            </View>
            
            <Text className="text-white text-2xl font-bold mb-3">
              أنا مالك عقار
            </Text>
            
            <Text className="text-gray-400 text-center text-[15px] leading-6 px-4">
              لإدارة أملاكك، الفواتير، ومتابعة{"\n"}التحصيلات
            </Text>
          </TouchableOpacity>

          {/* البطاقة الثانية: المستأجر */}
          {/* استخدمنا mt-6 كبديل لـ space-y-6 في بعض إصدارات NativeWind */}
          <TouchableOpacity 
            activeOpacity={0.7} 
            className="bg-white rounded-[32px] py-8 px-6 items-center border border-gray-100 shadow-sm mt-5"
          >
            {/* دائرة الأيقونة */}
            <View className="w-16 h-16 bg-[#F3F4F6] rounded-full items-center justify-center mb-4">
              <FontAwesome5 name="key" size={20} color="#FF4B4B" />
            </View>
            
            <Text className="text-[#111111] text-2xl font-bold mb-3">
              أنا مستأجر
            </Text>
            
            <Text className="text-gray-500 text-center text-[15px] leading-6 px-4">
              لدفع الإيجار، متابعة العدادات،{"\n"}وطلبات الصيانة
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>

  );
}