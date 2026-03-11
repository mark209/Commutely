import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const OPTIONS = [
  { id: 'jeepney', label: 'Jeepney', icon: 'bus' },
  { id: 'bus', label: 'Bus', icon: 'bus-multiple' },
  { id: 'uv', label: 'UV', icon: 'car-side' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.card}>
          <View style={styles.topRow}>
            <View>
              <Text style={styles.brand}>Commutely</Text>
              <Text style={styles.subTitle}>Select your ride</Text>
            </View>
            <View style={styles.profileDot} />
          </View>

          <View style={styles.heroPanel}>
            <View style={styles.heroGlow} />
            <View style={styles.heroImage}>
              <Ionicons name="car-sport" size={110} color="#ffffff" />
            </View>
            <Text style={styles.heroLabel}>Honda E: Advance</Text>
          </View>

          <View style={styles.batteryRow}>
            <View style={styles.batteryIcon}>
              <Ionicons name="battery-half" size={16} color="#e9f2ef" />
            </View>
            <View style={styles.batteryTrack}>
              <View style={styles.batteryFill} />
            </View>
            <Text style={styles.batteryText}>90% Battery</Text>
          </View>

          <View style={styles.actionRow}>
            {OPTIONS.map((option) => (
              <Pressable key={option.id} style={styles.optionCard}>
                <View style={styles.optionIcon}>
                  <MaterialCommunityIcons name={option.icon as 'bus' | 'bus-multiple' | 'car-side'} size={20} color="#e9f2ef" />
                </View>
                <Text style={styles.optionText}>{option.label}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.voiceButton}>
            <Ionicons name="mic" size={18} color="#1f2b2a" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2f6f76',
  },
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 18,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#2b5f66',
    borderRadius: 26,
    padding: 18,
    gap: 16,
    shadowColor: '#1e3e41',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    color: '#eaf3f2',
    fontSize: 18,
    fontWeight: '700',
  },
  subTitle: {
    color: '#b8d0ce',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  profileDot: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#101d1f',
  },
  heroPanel: {
    height: 170,
    borderRadius: 20,
    backgroundColor: '#326f76',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#3f8790',
    top: -40,
    right: -20,
    opacity: 0.7,
  },
  heroImage: {
    width: 150,
    height: 90,
    borderRadius: 18,
    backgroundColor: '#2a5358',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroLabel: {
    color: '#eaf3f2',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
  },
  batteryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  batteryIcon: {
    height: 26,
    width: 34,
    borderRadius: 8,
    backgroundColor: '#1f2b2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  batteryTrack: {
    flex: 1,
    height: 26,
    borderRadius: 14,
    backgroundColor: '#9fbab6',
    overflow: 'hidden',
  },
  batteryFill: {
    width: '90%',
    height: '100%',
    backgroundColor: '#e1f1ee',
  },
  batteryText: {
    color: '#eaf3f2',
    fontSize: 12,
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  optionCard: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#1f2b2a',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 6,
  },
  optionIcon: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#2a3b39',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: '#eaf3f2',
    fontSize: 12,
    fontWeight: '700',
  },
  voiceButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#e7f1ef',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1e3e41',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
});
