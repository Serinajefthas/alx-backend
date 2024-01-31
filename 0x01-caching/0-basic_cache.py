#!/usr/bin/env python3

"""Basic dictionary cache module"""


from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """Basic Cache class as simple caching system"""
    def put(self, key, item):
        """Assigns dictionary self.cache_data to item value for key"""
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """Returns value in dict linked to key"""
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data.get(key)
