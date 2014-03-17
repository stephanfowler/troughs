(defn innerItems [v]
  (if (< (count v) 3) [] (rest (butlast v))))

(defn lowestEdge [v]
  (min (first v) (last v)))

(defn isValley [v]
  (if (< (count v) 3) false (every? #(< % (lowestEdge v)) (innerItems v))))

(defn leftOfPeak [v]
  (let [peak (apply max v)]
    (concat (take-while #(< % peak) v) [peak])))

(defn rightOfPeak [v]
    (drop-while #(< % (apply max v)) v))

(defn puddleVolume [v]
  (if (< (count v) 3)
    0
    (if (isValley v)
      (- (* (- (count v) 2) (lowestEdge v)) (reduce + (innerItems v)))
      (+ (puddleVolume (leftOfPeak v)) (puddleVolume (rightOfPeak v))))))


(puddleVolume [1 0 8 0 0 3])

