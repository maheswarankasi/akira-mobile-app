import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Modal,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// --- TIME SLOTS DATA ---
const SCHEDULE_SLOTS = [
  { id: 'm1', label: '5 - 6 AM', startHour: 5, period: 'MORNING' },
  { id: 'm2', label: '6 - 7 AM', startHour: 6, period: 'MORNING' },
  { id: 'm3', label: '7 - 8 AM', startHour: 7, period: 'MORNING' },
  { id: 'm4', label: '8 - 9 AM', startHour: 8, period: 'MORNING' },
  { id: 'm5', label: '9 - 10 AM', startHour: 9, period: 'MORNING' },
  { id: 'm6', label: '10 - 11 AM', startHour: 10, period: 'MORNING' },
  { id: 'm7', label: '11 - 12 AM', startHour: 11, period: 'MORNING' },
  { id: 'a1', label: '12 - 1 PM', startHour: 12, period: 'AFTERNOON' },
  { id: 'a2', label: '1 - 2 PM', startHour: 13, period: 'AFTERNOON' },
  { id: 'a3', label: '2 - 3 PM', startHour: 14, period: 'AFTERNOON' },
  { id: 'a4', label: '3 - 4 PM', startHour: 15, period: 'AFTERNOON' },
  { id: 'a5', label: '4 - 5 PM', startHour: 16, period: 'AFTERNOON' },
  { id: 'e1', label: '5 - 6 PM', startHour: 17, period: 'EVENING' },
  { id: 'e2', label: '6 - 7 PM', startHour: 18, period: 'EVENING' },
  { id: 'e3', label: '7 - 8 PM', startHour: 19, period: 'EVENING' },
  { id: 'e4', label: '8 - 9 PM', startHour: 20, period: 'EVENING' },
  { id: 'e5', label: '9 - 10 PM', startHour: 21, period: 'EVENING' },
  { id: 'e6', label: '10 - 11 PM', startHour: 22, period: 'EVENING' },
];

export default function ScheduleDeliveryModal({ visible, onClose, onSuccess }) {
  const [scheduleDates, setScheduleDates] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // அடுத்த 7 நாட்களை உருவாக்கும் லாஜிக்
  useEffect(() => {
    if (visible) {
      const dates = [];
      const today = new Date();
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      for (let i = 0; i < 7; i++) {
        const nextDate = new Date();
        nextDate.setDate(today.getDate() + i);
        
        let dayLabel = dayNames[nextDate.getDay()];
        if (i === 0) dayLabel = 'Today';
        else if (i === 1) dayLabel = 'Tomorrow';

        dates.push({
          id: i,
          dayLabel,
          // தேதியை "24-Jul" என்ற வடிவத்தில் மாற்றுகிறோம்
          dateString: `${nextDate.getDate()}-${monthNames[nextDate.getMonth()]}`,
          fullDate: nextDate.toISOString()
        });
      }
      setScheduleDates(dates);
      // Modal ஓபன் ஆகும்போது பழைய செலக்சனை ரீசெட் செய்ய
      setSelectedDateIndex(0);
      setSelectedTimeSlot(null);
    }
  }, [visible]);

  // --- Schedule Time Logic ---
  const currentHour = new Date().getHours();
  
  const isSlotEnabled = (startHour) => {
    // நாளை, மறுநாள் என்றால் எல்லா நேரமும் Enable ஆகும்
    if (selectedDateIndex !== 0) return true; 
    // இன்று என்றால்: தற்போதைய நேரத்தை விட குறைந்தபட்சம் 1 மணிநேரம் தள்ளி இருக்க வேண்டும்
    return startHour > currentHour + 1;
  };

  const handleConfirmSchedule = async () => {
    if (!selectedTimeSlot) {
      Alert.alert("Action Required", "Please select a preferred time slot.");
      return;
    }
    
    const selectedDateObj = scheduleDates[selectedDateIndex];

    const scheduleData = {
      date: {
        ...selectedDateObj,
        // Cart Screen-ல் "Tomorrow" என்று காட்டாமல் "24-Jul" என்றே காட்ட இதை மாற்றுகிறோம்
        dayLabel: selectedDateObj.dateString 
      },
      time: selectedTimeSlot
    };
    
    try {
      // Local Storage-ல் சேமிக்கிறோம்
      await AsyncStorage.setItem('deliverySchedule', JSON.stringify(scheduleData));
      
      // வெற்றிகரமாக சேமிக்கப்பட்டால், Parent Component-க்கு தகவல் அனுப்புகிறோம்
      if (onSuccess) onSuccess(scheduleData);
      
      onClose(); // Modal-ஐ மூட
    } catch (e) {
      console.log("Error saving schedule: ", e);
    }
  };

  const renderTimeSlots = (period) => {
    const slots = SCHEDULE_SLOTS.filter(s => s.period === period);
    return (
      <View style={styles.slotGrid}>
        {slots.map(slot => {
          const enabled = isSlotEnabled(slot.startHour);
          const selected = selectedTimeSlot?.id === slot.id;
          return (
            <TouchableOpacity 
              key={slot.id} 
              style={[
                styles.slotBox, 
                selected && styles.slotBoxSelected,
                !enabled && styles.slotBoxDisabled
              ]}
              onPress={() => enabled && setSelectedTimeSlot(slot)}
              disabled={!enabled}
            >
              <Text style={[
                styles.slotText,
                selected && styles.slotTextSelected,
                !enabled && styles.slotTextDisabled
              ]}>{slot.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Schedule your order</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>

          {/* Dates Horizontal List */}
          <View style={styles.datesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {scheduleDates.map((d, index) => {
                const isSelected = selectedDateIndex === index;
                return (
                  <TouchableOpacity 
                    key={d.id} 
                    style={[styles.dateBox, isSelected && styles.dateBoxSelected]}
                    onPress={() => {
                      setSelectedDateIndex(index);
                      setSelectedTimeSlot(null); 
                    }}
                  >
                    <Text style={[styles.dateLabel, isSelected && styles.dateTextSelected]}>{d.dayLabel}</Text>
                    <Text style={[styles.dateValue, isSelected && styles.dateTextSelected]}>{d.dateString}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* Time Slots */}
          <ScrollView style={styles.timeSlotsScroll} showsVerticalScrollIndicator={false}>
            <Text style={styles.periodHeading}>MORNING</Text>
            {renderTimeSlots('MORNING')}

            <Text style={styles.periodHeading}>AFTERNOON</Text>
            {renderTimeSlots('AFTERNOON')}

            <Text style={styles.periodHeading}>EVENING</Text>
            {renderTimeSlots('EVENING')}
            
            <View style={{height: 20}} />
          </ScrollView>

          <View style={styles.confirmBtnContainer}>
             <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirmSchedule}>
               <Text style={styles.confirmBtnText}>Confirm</Text>
             </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, height: '85%', paddingHorizontal: 16, paddingTop: 20 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  closeBtn: { backgroundColor: '#111827', width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  datesContainer: { marginBottom: 20 },
  dateBox: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, marginRight: 10, alignItems: 'center', minWidth: 80 },
  dateBoxSelected: { borderColor: '#058A46', backgroundColor: '#F0FDF4' },
  dateLabel: { fontSize: 12, color: '#9CA3AF', marginBottom: 4 },
  dateValue: { fontSize: 14, fontWeight: 'bold', color: '#111827' },
  dateTextSelected: { color: '#058A46' },
  timeSlotsScroll: { flex: 1 },
  periodHeading: { fontSize: 12, fontWeight: 'bold', color: '#9CA3AF', marginTop: 10, marginBottom: 10, letterSpacing: 1 },
  slotGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  slotBox: { width: '31%', paddingVertical: 12, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, alignItems: 'center', marginBottom: 4 },
  slotBoxSelected: { borderColor: '#058A46', backgroundColor: '#F0FDF4' },
  slotBoxDisabled: { backgroundColor: '#F3F4F6', borderColor: '#F3F4F6' },
  slotText: { fontSize: 12, fontWeight: '600', color: '#4B5563' },
  slotTextSelected: { color: '#058A46' },
  slotTextDisabled: { color: '#D1D5DB' },
  confirmBtnContainer: { paddingVertical: 16, borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingBottom: Platform.OS === 'ios' ? 32 : 16 },
  confirmBtn: { backgroundColor: '#FF204E', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  confirmBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});